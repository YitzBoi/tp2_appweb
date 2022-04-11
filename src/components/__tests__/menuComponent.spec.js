import { shallowMount } from '@vue/test-utils'
import MenuComponent from '@/components/MenuComponent.vue'
import { shipsService } from '@/services/shipsService'
import { shipsJsonFake } from '@/../tests/data/shipsJsonFake.js'
import flushPromises from 'flush-promises'
import { resetAllWhenMocks } from 'jest-when'

jest.mock('@/services/shipsService')

let ships

beforeEach(() => {
  ships = [...shipsJsonFake]
  jest.clearAllMocks()
  resetAllWhenMocks()
  shipsService.getShips.mockResolvedValue(ships)
})

describe('MenuComponent.vue', () => {
  test('Dans le menu, une liste de vaisseaux doit être affichée', async () => {
    const wrapper = await shallowMount(MenuComponent)
    const shipsNames = []
    ships.forEach(ship => {
      shipsNames.push(ship.name)
    })

    await flushPromises()

    const shipList = wrapper
      .findAll('option')
      .wrappers.map(option => option.text())

    expect(shipList).toStrictEqual(shipsNames)
  })

  test('Dans le menu, un nom de joueur est affiché et modifiable', async () => {
    const playerName = 'FilouGamer'
    const wrapper = shallowMount(MenuComponent)

    await wrapper.find('input').setValue(playerName)

    expect(wrapper.vm.playerName).toBe(playerName)
  })

  test('Lors du clic du bouton, les données du joueur doivent être redirigées sur la page Mission', async () => {
    const routerPush = jest.fn()
    const wrapper = await shallowMount(MenuComponent, {
      mocks: {
        $router: {
          push: param => routerPush(param)
        }
      }
    })

    await flushPromises()

    await wrapper.find('.btn').trigger('click')

    expect(routerPush).toHaveBeenCalledWith({
      name: 'Mission',
      params: { playerName: '', ship: ships[0] }
    })
  })

  test('Par défaut, le premier vaisseau de la liste est affiché', async () => {
    const shipName = ships[0].name

    const wrapper = shallowMount(MenuComponent)

    await flushPromises()

    const option = wrapper.find('option')
    expect(option.element.selected).toBe(true)
    expect(option.text()).toBe(shipName)
  })
})
