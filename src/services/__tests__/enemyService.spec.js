import axios from 'axios'
import { enemyJsonFake } from '@/../tests/data/enemyJsonFake'
import { enemyService } from '@/services/enemyService'
import MockAdapter from 'axios-mock-adapter'

var mockAxios = new MockAdapter(axios)

const API = process.env.VUE_APP_API
let enemies
let count
beforeEach(() => {
  enemies = [...enemyJsonFake]

  mockAxios.reset()
})

describe('enemyService.js', () => {
  test('getRandomCharactersList doit retourner une liste de meme longeur que demande', async () => {
    mockAxios.onGet(`${API}/characters`).reply(200, enemies)

    const response = await enemyService.getRandomCharactersList(5)

    expect(response.length).toEqual(5)
  })

  test('getRandomCharactersList doit retourner une liste de ennemi unique', async () => {
    mockAxios.onGet(`${API}/characters`).reply(200, enemies)

    const response = await enemyService.getRandomCharactersList(5)
    count = 0
    response.forEach(element => {
      count = 0
      for (let i = 0; i < response.length; i++) {
        if (element.name === response[i].name) {
          count++
        }
      }
      expect(count).toEqual(1)
    })
  })
})
