import * as axios from 'axios'
import { API } from '@/shared/config'

async function getScores () {
  const { data } = await axios.get(`${API}/ranking`)
  data.sort((a, b) => b.score - a.score)
  return data
}

export const scoresService = {
  getScores
}
