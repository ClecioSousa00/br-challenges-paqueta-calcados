import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://api.brchallenges.com/api/paqueta/shoes',
})
