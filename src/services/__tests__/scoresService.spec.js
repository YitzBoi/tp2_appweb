import axios from 'axios'
import { scoresJsonFake } from '@/../tests/data/scoresJsonFake'
import { scoresService } from '@/services/scoresService'
import MockAdapter from 'axios-mock-adapter'

var mockAxios = new MockAdapter(axios)

const API = process.env.VUE_APP_API
let scores

beforeEach(() => {
  scores = [...scoresJsonFake]

  mockAxios.reset()
})

describe('scoresService.js', () => {
  test("getScores doit retourner l'ensemble des scores", async () => {
    mockAxios.onGet(`${API}/ranking`).reply(200, scores)

    const response = await scoresService.getScores()

    expect(response).toStrictEqual(scores)
  })
})
