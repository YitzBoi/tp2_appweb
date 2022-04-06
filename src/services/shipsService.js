import * as axios from 'axios'
import { API } from '@/shared/config'

async function getShips () {
  const response = await axios.get(`${API}/ships`)
  return response.data
}

export const shipsService = {
  getShips
}
