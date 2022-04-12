import { shallowMount } from '@vue/test-utils'
import LeaderboardComponent from '@/components/LeaderboardComponent.vue'
import { scoresService } from '@/services/scoresService.js'
import { scoresJsonFake } from '@/../tests/data/scoresJsonFake.js'
import flushPromises from 'flush-promises'
import { resetAllWhenMocks } from 'jest-when'

jest.mock('@/services/scoresService.js')

let scores

beforeEach(() => {
  scores = [...scoresJsonFake]
  jest.clearAllMocks()
  resetAllWhenMocks()
  scoresService.getScores.mockResolvedValue(scores)
})

describe('LeaderboardComponent.vue', () => {
  test('Dans le menu, une liste de joueurs ayant gagné doit être affichée', async () => {
    const wrapper = await shallowMount(LeaderboardComponent)
    const scoreNames = []
    scores.forEach(score => {
      scoreNames.push(score.name + ' - ' + score.score + ' CG')
    })

    await flushPromises()

    const scoreList = wrapper.findAll('li').wrappers.map(li => li.text())

    expect(scoreList).toStrictEqual(scoreNames)
  })
})
