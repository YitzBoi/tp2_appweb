import * as axios from 'axios'
import { API } from '@/shared/config'

async function getRandomCharactersList (listSize) {
  const { data } = await axios.get(`${API}/characters`)
  const listEnemy = []
  let currentEnemy
  for (let i = 0; i < listSize; i++) {
    currentEnemy = data[Math.floor(Math.random() * data.length)]
    while (
      listEnemy.map(object => object.name).indexOf(currentEnemy.name) !== -1
    ) {
      currentEnemy = data[Math.floor(Math.random() * data.length)]
    }
    listEnemy.push(currentEnemy)
  }
  return listEnemy
}

export const enemyService = {
  getRandomCharactersList
}
