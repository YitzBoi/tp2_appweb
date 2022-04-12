import * as axios from 'axios'
import { API } from '@/shared/config'

async function getShips () {
  const { data } = await axios.get(`${API}/ships`)
  return data
}

export const shipsService = {
  getShips
}
