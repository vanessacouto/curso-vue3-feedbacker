import { reactive } from 'vue'

const userInitialState = {
  currentUser: {}
}

// estado do modulo (UserModule)
let state = reactive(userInitialState)

export default state

// reseta a store ao estado inicial
export function resetUserStore() {
  state = reactive(userInitialState)
}

// só pode alterar 'user' pelos metodo abaixo
export function cleanCurrentUser(user) {
  state.currentUser = {}
}

export function setCurrentUser(user) {
  state.currentUser = user
}

export function setApiKey(apiKey) {
  const currentUser = { ...state.currentUser, apiKey }
  state.currentUser = currentUser
}
