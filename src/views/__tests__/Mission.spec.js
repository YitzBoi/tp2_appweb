import { shallowMount } from '@vue/test-utils'
import Mission from '@/views/Mission.vue'
import flushPromises from 'flush-promises'
import { scoresService } from '@/services/scoresService'
import { resetAllWhenMocks } from 'jest-when'

jest.mock('@/services/scoresService')

beforeEach(() => {
  jest.clearAllMocks()
  resetAllWhenMocks()
  scoresService.postScore.mockResolvedValue(true)
})

describe('Mission.vue', () => {
  // Methods
  test("Launch_fight doit changer le prop d'attaque de player et de l'ennemi a True.", async () => {
    const wrapper = await shallowMount(Mission)
    await flushPromises()
    expect(wrapper.vm.enemyShouldAttack).toBeFalsy()
    expect(wrapper.vm.playerShouldAttack).toBeFalsy()

    wrapper.vm.launch_fight()

    expect(wrapper.vm.enemyShouldAttack).toBeTruthy()
    expect(wrapper.vm.playerShouldAttack).toBeTruthy()
  })

  test('attack_enemy doit changer le prop damageToEnemy.', async () => {
    const wrapper = await shallowMount(Mission)
    await flushPromises()

    wrapper.vm.attack_enemy(100)

    expect(wrapper.vm.damageToEnemy).toBe(100)
  })

  test('attack_player doit changer le prop damageToPlayer.', async () => {
    const wrapper = await shallowMount(Mission)
    await flushPromises()

    wrapper.vm.attack_player(100)

    expect(wrapper.vm.damageToPlayer).toBe(100)
  })

  test('End_mission doit incrementer le nombre de rounds.', async () => {
    const wrapper = await shallowMount(Mission)
    await flushPromises()

    wrapper.vm.end_mission()

    expect(wrapper.vm.roundNb).toBe(2)
  })

  test('End_mission doit finir la partie quand il atteint le nombre maximum de rounds.', async () => {
    const msgBoxOk = jest.fn()
    const pushMock = jest.fn()

    const wrapper = await shallowMount(Mission, {
      mocks: {
        $bvModal: {
          msgBoxOk: () => msgBoxOk()
        },
        $router: {
          push: () => pushMock()
        },
        $route: {
          params: {
            playerName: 'Jeffery Epstein'
          }
        }
      }
    })
    await flushPromises()

    wrapper.setData({
      roundNb: 5
    })

    await wrapper.vm.end_mission()

    expect(wrapper.vm.roundNb).toBe(5)
    expect(wrapper.vm.gameHasEnded).toBeTruthy()
  })

  test('Game_over doit finir la partie et afficher une boite de texte.', async () => {
    const msgBoxOk = jest.fn()
    const pushMock = jest.fn()

    const wrapper = await shallowMount(Mission, {
      mocks: {
        $bvModal: {
          msgBoxOk: () => msgBoxOk()
        },
        $router: {
          push: () => pushMock()
        }
      }
    })

    await flushPromises()

    await wrapper.vm.game_over()

    expect(msgBoxOk).toHaveBeenCalled()
    expect(pushMock).toHaveBeenCalled()
  })

  test('Game_ended doit finir la partie et afficher une boite de texte et appeler le service pour sauvegarder le score du joueur.', async () => {
    const msgBoxOk = jest.fn()
    const pushMock = jest.fn()

    const wrapper = await shallowMount(Mission, {
      mocks: {
        $bvModal: {
          msgBoxOk: () => msgBoxOk()
        },
        $router: {
          push: () => pushMock()
        },
        $route: {
          params: {
            playerName: 'Jeffery Epstein'
          }
        }
      }
    })

    await flushPromises()

    await wrapper.vm.game_ended()

    expect(msgBoxOk).toHaveBeenCalled()
    expect(pushMock).toHaveBeenCalled()
  })

  test('repair_ship doit modifier shouldRepair pour que le prop du player soit modifié', async () => {
    const wrapper = await shallowMount(Mission)

    await flushPromises()

    await wrapper.vm.repair_ship()

    expect(wrapper.vm.shouldRepair).toBeTruthy()
  })

  test("reset_var ne peut remettre a zero les props utilisé a communiquer, si l'ennemi ne l'a pas appelé", async () => {
    const wrapper = await shallowMount(Mission)
    await flushPromises()

    wrapper.setData({
      enemyShouldAttack: true,
      playerShouldAttack: true,
      damageToPlayer: 300,
      damageToEnemy: 300,
      resetP: false,
      resetE: false
    })

    wrapper.vm.reset_vars(true)

    expect(wrapper.vm.resetP).toBeTruthy()
    expect(wrapper.vm.resetE).toBeFalsy()

    expect(wrapper.vm.enemyShouldAttack).toBeTruthy()
    expect(wrapper.vm.playerShouldAttack).toBeTruthy()
    expect(wrapper.vm.damageToPlayer).toBe(300)
    expect(wrapper.vm.damageToEnemy).toBe(300)
  })

  test("reset_var ne peut remettre a zero les props utilisé a communiquer, si le joueur ne l'a pas appelé", async () => {
    const wrapper = await shallowMount(Mission)
    await flushPromises()

    wrapper.setData({
      enemyShouldAttack: true,
      playerShouldAttack: true,
      damageToPlayer: 300,
      damageToEnemy: 300,
      resetP: false,
      resetE: false
    })

    wrapper.vm.reset_vars(false)

    expect(wrapper.vm.resetP).toBeFalsy()
    expect(wrapper.vm.resetE).toBeTruthy()

    expect(wrapper.vm.enemyShouldAttack).toBeTruthy()
    expect(wrapper.vm.playerShouldAttack).toBeTruthy()
    expect(wrapper.vm.damageToPlayer).toBe(300)
    expect(wrapper.vm.damageToEnemy).toBe(300)
  })

  test("reset_var ne peut remettre a zero les props utilisé a communiquer, si les deux combattants l'on appelé", async () => {
    const wrapper = await shallowMount(Mission)
    await flushPromises()

    wrapper.setData({
      enemyShouldAttack: true,
      playerShouldAttack: true,
      damageToPlayer: 300,
      damageToEnemy: 300,
      resetP: false,
      resetE: false
    })

    wrapper.vm.reset_vars(false)
    wrapper.vm.reset_vars(true)

    expect(wrapper.vm.resetP).toBeFalsy()
    expect(wrapper.vm.resetE).toBeFalsy()

    expect(wrapper.vm.enemyShouldAttack).toBeFalsy()
    expect(wrapper.vm.playerShouldAttack).toBeFalsy()
    expect(wrapper.vm.damageToPlayer).toBe(-1)
    expect(wrapper.vm.damageToEnemy).toBe(-1)
  })

  test('aCharacterWasKilled fait un appel sur gameover si le joueur est mort', async () => {
    const msgBoxOk = jest.fn()
    const pushMock = jest.fn()

    const wrapper = await shallowMount(Mission, {
      mocks: {
        $bvModal: {
          msgBoxOk: () => msgBoxOk()
        },
        $router: {
          push: () => pushMock()
        },
        $route: {
          params: {
            playerName: 'Jeffery Epstein'
          }
        }
      }
    })

    await flushPromises()

    await wrapper.vm.aCharacterWasKilled(true)

    expect(msgBoxOk).toHaveBeenCalled()
    expect(pushMock).toHaveBeenCalled()
  })

  test("aCharacterWasKilled donne une récompense au joueur si l'ennemi est mort", async () => {
    const EXPECTED_CREDIT = 50
    const wrapper = await shallowMount(Mission)

    await flushPromises()

    await wrapper.vm.aCharacterWasKilled(false, EXPECTED_CREDIT)

    expect(wrapper.vm.credit).toBe(EXPECTED_CREDIT)
  })

  test("Doit rester sur la page après l'abandon de quitter la page", async () => {
    const next = jest.fn()
    const msgBoxConfirm = jest.fn().mockResolvedValue(false)
    const wrapper = await shallowMount(Mission, {
      mocks: {
        $router: {
          push: () => {}
        },
        $bvModal: {
          msgBoxConfirm: () => msgBoxConfirm()
        }
      }
    })
    await Mission.beforeRouteLeave.call(wrapper.vm, undefined, undefined, next)

    expect(next).toHaveBeenCalledTimes(0)
    expect(msgBoxConfirm).toHaveBeenCalledTimes(1)
  })

  test('Doit quitter la page après avoir confirmé', async () => {
    const next = jest.fn()
    const msgBoxConfirm = jest.fn().mockResolvedValue(true)
    const wrapper = await shallowMount(Mission, {
      mocks: {
        $router: {
          push: () => {}
        },
        $bvModal: {
          msgBoxConfirm: () => msgBoxConfirm()
        }
      }
    })
    await Mission.beforeRouteLeave.call(wrapper.vm, undefined, undefined, next)

    expect(next).toHaveBeenCalled()
    expect(msgBoxConfirm).toHaveBeenCalledTimes(1)
  })
})
