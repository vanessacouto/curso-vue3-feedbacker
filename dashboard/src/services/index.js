import axios from 'axios'
import router from '../router'
import { setGlobalLoading } from '../store/global'
import AuthService from './auth'
import UsersService from './users'
import FeedbacksService from './feedbacks'

const API_ENVS = {
  production: '',
  development: '',
  local: 'http://localhost:3000'
}

const httpClient = axios.create({
  baseURL: API_ENVS.local
})

// intercepta as requisicoes enviadas para conseguirmos enviar o token junto
httpClient.interceptors.request.use(config => {
  setGlobalLoading(true)
  const token = window.localStorage.getItem('token')

  if (token) {
    config.headers.common.Authorization = `Bearer ${token}`
  }

  return config
})

// cai no catch do erro só se forem esses erros, pois os demais estamos tratando (erros 404, 401 e 400)
httpClient.interceptors.response.use((response) => {
  setGlobalLoading(false)
  return response
}, (error) => {
  const canThrowAnError = error.request.status === 0 ||
  error.request.status === 500

  if (canThrowAnError) {
    setGlobalLoading(false)
    throw new Error(error.message)
  }

  // se o token nao for valido, vai retornar 401
  if (error.response.status === 401) {
    router.push({ name: 'Home' })
  }

  setGlobalLoading(false)
  return error
})

export default {
  auth: AuthService(httpClient),
  users: UsersService(httpClient),
  feedbacks: FeedbacksService(httpClient)
}
