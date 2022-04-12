import * as axios from 'axios'
import { API } from '@/shared/config'

async function getRandomCharacter () {
  const { data } = await axios.get(`${API}/characters`)
  return data[Math.floor(Math.random() * data.length)]
}

export const enemyService = {
  getRandomCharacter
}
