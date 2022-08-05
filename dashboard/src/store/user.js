import { reactive } from 'vue'

// estado do modulo (UserModule)
const state = reactive({
  currentUser: {}
})

export default state

// só pode alterar 'user' pelos metodo abaixo
export function cleanCurrentUser (user) {
  state.currentUser = {}
}

export function setCurrentUser (user) {
  state.currentUser = user
}

export function setApiKey (apiKey) {
  const currentUser = { ...state.currentUser, apiKey }
  state.currentUser = currentUser
}
