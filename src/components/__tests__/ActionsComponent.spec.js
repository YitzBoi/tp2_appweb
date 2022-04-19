import { shallowMount } from '@vue/test-utils'
import ActionsComponent from '@/components/ActionsComponent.vue'
import flushPromises from 'flush-promises'

describe('ActionsComponent.vue', () => {
  test("Lors d'un clic sur le bouton combattre, un emit launch_fight est lancé", async () => {
    const wrapper = await shallowMount(ActionsComponent)

    await flushPromises()

    await wrapper.find('#launch_fight').trigger('click')

    expect(wrapper.emitted('launch_fight')).toBeTruthy()
  })

  test("Lors d'un clic sur le bouton pour terminer la mission, un emit end_mission est lancé", async () => {
    const wrapper = await shallowMount(ActionsComponent)

    await flushPromises()

    await wrapper.find('#end_mission').trigger('click')

    expect(wrapper.emitted('end_mission')).toBeTruthy()
  })

  test("Lors d'un clic sur le bouton pour réparer le vaisseau et terminer la mission, un emit repair_ship est lancé", async () => {
    const wrapper = await shallowMount(ActionsComponent)

    await flushPromises()

    await wrapper.find('#repair_ship').trigger('click')

    expect(wrapper.emitted('repair_ship')).toBeTruthy()
  })
})
