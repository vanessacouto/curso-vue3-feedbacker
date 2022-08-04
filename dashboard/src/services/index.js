import axios from 'axios'
import AuthService from './auth'

const API_ENVS = {
  production: '',
  development: '',
  local: 'http://localhost:3000'
}

const httpClient = axios.create({
  baseURL: API_ENVS.local
})

// cai no catch do erro só se forem esses erros, pois os demais estamos tratando (erros 404, 401 e 400)
httpClient.interceptors.response.use((response) => response, (error) => {
  const canThrowAnError = error.request.status === 0 ||
  error.request.status === 500

  if (canThrowAnError) {
    throw new Error(error.message)
  }
  return error
})

export default {
  auth: AuthService(httpClient)
}
