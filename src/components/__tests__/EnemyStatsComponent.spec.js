import { shallowMount, mount } from '@vue/test-utils'
import EnemyComponent from '@/components/EnemyStatsComponent.vue'
import flushPromises from 'flush-promises'
import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
Vue.use(BootstrapVue)

describe('EnemyStatsComponent.vue', () => {
  test("Les informations de l'ennemi doivent apparaitre", async () => {
    const wrapper = await shallowMount(EnemyComponent)
    await wrapper.setData({
      enemy: {
        id: 0,
        name: 'Enemy Name',
        credit: 11,
        experience: 2,
        ship: {
          id: 1,
          name: 'Ship Name',
          vitality: 100
        }
      },
      rank: 'Banane'
    })

    await flushPromises()

    // nom
    expect(wrapper.text()).toContain('Enemy Name')
    // nom vaisseau
    expect(wrapper.text()).toContain('Ship Name')
    // rank
    expect(wrapper.text()).toContain('Banane')
    // credit
    expect(wrapper.text()).toContain('11 CG')
  })

  test("Le rank 'Beginner' doit afficher correctement", async () => {
    const wrapper = await shallowMount(EnemyComponent)

    wrapper.setProps({
      currentEnemy: {
        id: 0,
        name: 'Enemy Name',
        credit: 11,
        experience: 1,
        ship: {
          id: 1,
          name: 'Ship Name',
          vitality: 100
        }
      }
    })

    await flushPromises()

    wrapper.vm.changeEnemy()
    // rank
    expect(wrapper.text()).toContain('Beginner')
  })

  test("Le rank 'Novice' doit afficher correctement", async () => {
    const wrapper = await shallowMount(EnemyComponent)

    wrapper.setProps({
      currentEnemy: {
        id: 0,
        name: 'Enemy Name',
        credit: 11,
        experience: 2,
        ship: {
          id: 1,
          name: 'Ship Name',
          vitality: 100
        }
      }
    })

    await flushPromises()

    wrapper.vm.changeEnemy()
    // rank
    expect(wrapper.text()).toContain('Novice')
  })

  test("Le rank 'Experienced' doit afficher correctement", async () => {
    const wrapper = await shallowMount(EnemyComponent)

    wrapper.setProps({
      currentEnemy: {
        id: 0,
        name: 'Enemy Name',
        credit: 11,
        experience: 3,
        ship: {
          id: 1,
          name: 'Ship Name',
          vitality: 100
        }
      }
    })

    await flushPromises()

    wrapper.vm.changeEnemy()
    // rank
    expect(wrapper.text()).toContain('Experienced')
  })

  test("Le rank 'Master' doit afficher correctement", async () => {
    const wrapper = await shallowMount(EnemyComponent)

    wrapper.setProps({
      currentEnemy: {
        id: 0,
        name: 'Enemy Name',
        credit: 11,
        experience: 4,
        ship: {
          id: 1,
          name: 'Ship Name',
          vitality: 100
        }
      }
    })

    await flushPromises()

    wrapper.vm.changeEnemy()
    // rank
    expect(wrapper.text()).toContain('Master')
  })

  test("La vie de l'ennemi doit exister et etre a 100% au debut", async () => {
    const wrapper = await mount(EnemyComponent)

    await wrapper.setData({
      enemy: {
        id: 0,
        name: 'Enemy Name',
        credit: 11,
        experience: 2,
        ship: {
          id: 1,
          name: 'Ship Name',
          vitality: 100
        }
      },
      rank: 'Banane'
    })

    await flushPromises()

    const lifeBar = wrapper.vm.currentHealth
    // credit
    expect(lifeBar).toBe(100)
  })

  // shits qui update et methode
  test("La vie de l'ennemi doit pouvoir changer en fonction de degat recus", async () => {
    const wrapper = await mount(EnemyComponent)

    await wrapper.setData({
      enemy: {
        id: 0,
        name: 'Enemy Name',
        credit: 11,
        experience: 2,
        ship: {
          id: 1,
          name: 'Ship Name',
          vitality: 100
        }
      },
      rank: 'Banane'
    })

    await flushPromises()

    wrapper.vm.was_attacked(10)

    const lifeBar = wrapper.vm.currentHealth
    // credit
    expect(lifeBar).toBe(90)
  })

  test("La vie de l'ennemi doit pouvoir changer plusieur fois en fonction des degats recus", async () => {
    const wrapper = await mount(EnemyComponent, {
      mocks: {
        $router: {
          push: () => {}
        },
        $route: {
          params: {
            playerName: 'nom',
            ship: {
              id: 9030,
              name: 'Executor',
              attackpower: 95
            }
          }
        }
      }
    })

    await flushPromises()

    wrapper.vm.was_attacked(10)
    wrapper.vm.was_attacked(10)

    const lifeBar = wrapper.vm.currentHealth
    // credit
    expect(lifeBar).toBe(80)
  })

  // emits

  test("L'ennemi doit pouvoir partager son attaque au parent", async () => {
    const wrapper = await shallowMount(EnemyComponent, {
      mocks: {
        $router: {
          push: () => {}
        },
        $route: {
          params: {
            playerName: 'nom',
            ship: {
              id: 9030,
              name: 'Executor',
              attackpower: 95
            }
          }
        }
      }
    })

    await wrapper.setProps({
      doAttack: true
    })

    await flushPromises()
    const value = wrapper.emitted('enemy-attack')[0]

    expect(wrapper.emitted('enemy-attack')).toBeTruthy()
    expect(value[0]).toBeGreaterThanOrEqual(0)
    expect(value[0]).toBeLessThanOrEqual(6)
  })

  test("L'ennemi doit pouvoir partager son intention de reset ses props (et finir son tour) au parent", async () => {
    const wrapper = await shallowMount(EnemyComponent, {
      mocks: {
        $router: {
          push: () => {}
        },
        $route: {
          params: {
            playerName: 'nom',
            ship: {
              id: 9030,
              name: 'Executor',
              attackpower: 95
            }
          }
        }
      }
    })

    await wrapper.setProps({
      damage: 1
    })

    await flushPromises()
    const value = wrapper.emitted('reset-vars')[0]

    expect(wrapper.emitted('reset-vars')).toBeTruthy()
    expect(value[0]).toBeFalsy()
  })

  test("L'ennemi doit pouvoir partager qu'il est mort au parent", async () => {
    const wrapper = await shallowMount(EnemyComponent, {
      mocks: {
        $router: {
          push: () => {}
        },
        $route: {
          params: {
            playerName: 'nom',
            ship: {
              id: 9030,
              name: 'Executor',
              attackpower: 95
            }
          }
        }
      }
    })

    await wrapper.setProps({
      damage: 1000
    })

    await flushPromises()
    const value = wrapper.emitted('died')[0]

    expect(wrapper.emitted('died')).toBeTruthy()
    expect(value[0]).toBeFalsy()
  })
})
