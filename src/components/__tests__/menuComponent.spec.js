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
  shipsService.getShips().mockResolvedValue(ships)
})

describe('MenuComponent.vue', () => {
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
      params: { playerName: this.playerName, ship: this.ship }
    })
  })
})
