import { shallowMount } from '@vue/test-utils'
import Mission from '@/views/Mission.vue'
import flushPromises from 'flush-promises'

describe('Mission.vue', () => {
  // Methods
  test("Launch_fight doit changer le prop d'attaque de player a True.", async () => {
    const wrapper = await shallowMount(Mission)
    await flushPromises()
  })

  test("Launch_fight doit changer le prop d'attaque de l'enemy a True.", async () => {
    const wrapper = await shallowMount(Mission)
    await flushPromises()
  })

  test('attack_enemy doit changer le prop damageToEnemy.', async () => {
    const wrapper = await shallowMount(Mission)
    await flushPromises()
  })

  test('attack_player doit changer le prop damageToPlayer.', async () => {
    const wrapper = await shallowMount(Mission)
    await flushPromises()
  })

  test('End_mission doit incrementer le nombre de rounds.', async () => {
    const wrapper = await shallowMount(Mission)
    await flushPromises()
  })

  test('End_mission doit finir la partie quand il atteint le nombre maximum de rounds.', async () => {
    const wrapper = await shallowMount(Mission)
    await flushPromises()
  })

  test('Game_over doit finir la partie et afficher une boite de texte.', async () => {
    const wrapper = await shallowMount(Mission)
    await flushPromises()
  })

  test('Game_ended doit finir la partie et afficher une boite de texte et appeler le service pour sauvegarder le score du joueur.', async () => {
    const wrapper = await shallowMount(Mission)
    await flushPromises()
  })

  test("repair_ship doit appeler playerComponent pour qu'il se reparer", async () => {
    const wrapper = await shallowMount(Mission)
    await flushPromises()
  })

  test("reset_var ne peut remettre a zero les props utilisé a communiquer, si l'ennemi ne l'a pas appelé", async () => {
    const wrapper = await shallowMount(Mission)
    await flushPromises()
  })

  test("reset_var ne peut remettre a zero les props utilisé a communiquer, si le joueur ne l'a pas appelé", async () => {
    const wrapper = await shallowMount(Mission)
    await flushPromises()
  })

  test("reset_var ne peut remettre a zero les props utilisé a communiquer, si les deux combattants l'on appelé", async () => {
    const wrapper = await shallowMount(Mission)
    await flushPromises()
  })

  test('aCharacterWasKilled appele gameover si le joueur est mort', async () => {
    const wrapper = await shallowMount(Mission)
    await flushPromises()
  })

  test("aCharacterWasKilled donne une récompense au joueur si l'ennemi est mort", async () => {
    const wrapper = await shallowMount(Mission)
    await flushPromises()
  })

  test('beforeRouteLeave can', async () => {
    const wrapper = await shallowMount(Mission)
    await flushPromises()
  })
})
