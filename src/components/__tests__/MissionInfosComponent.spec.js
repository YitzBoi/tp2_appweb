import { shallowMount } from '@vue/test-utils'
import MissionInfosComponent from '@/components/MissionInfosComponent.vue'
import flushPromises from 'flush-promises'

describe('MissionInfosComponent.vue', () => {
  test('Par défaut, un nombre de progression des missions est affiché', async () => {
    const EXPECTED_ROUND_PROGRESSION = '1/5'
    const wrapper = await shallowMount(MissionInfosComponent)

    await flushPromises()

    const roundText = wrapper.find('p').text()

    expect(EXPECTED_ROUND_PROGRESSION).toBe(roundText)
  })

  test("Lors d'un changement de mission, le nombre de progression des missions est mis à jour", async () => {
    const EXPECTED_ROUND_PROGRESSION = '2/5'
    const wrapper = await shallowMount(MissionInfosComponent, {
      propsData: {
        roundNb: 2
      }
    })

    await flushPromises()

    const roundText = wrapper.find('p').text()

    expect(EXPECTED_ROUND_PROGRESSION).toBe(roundText)
  })
})
