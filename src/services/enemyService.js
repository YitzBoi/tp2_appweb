import * as axios from 'axios'
import { API } from '@/shared/config'

async function getRandomCharactersList (listSize) {
  const { data } = await axios.get(`${API}/characters`)
  const listEnemy = []
  let currentEnemy
  for (let i = 0; i < listSize; i++) {
    console.log('e1')
    currentEnemy = data[Math.floor(Math.random() * data.length)]
    while (listEnemy.indexOf(this.currentEnemy) !== -1) {
      currentEnemy = data[Math.floor(Math.random() * data.length)]
      console.log('e2')
    }
    listEnemy.push(currentEnemy)
  }
  return listEnemy
}

export const enemyService = {
  getRandomCharactersList
}
