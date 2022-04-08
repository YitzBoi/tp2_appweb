import axios from 'axios'
import { shipsJsonFake } from '@/../tests/data/shipsJsonFake'
import { shipsService } from '@/services/shipsService'
import MockAdapter from 'axios-mock-adapter'

var mockAxios = new MockAdapter(axios)

const API = process.env.VUE_APP_API
let ships

beforeEach(() => {
  ships = [...shipsJsonFake]

  mockAxios.reset()
})

describe('shipsService.js', () => {
  test("getShips doit retourner l'ensemble des vaisseaux", async () => {
    mockAxios.onGet(`${API}/ships`).reply(200, ships)

    const response = await shipsService.getShips()

    expect(response).toStrictEqual(ships)
  })
})
