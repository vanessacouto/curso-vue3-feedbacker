<template>
  <modal-factory />
  <router-view />
</template>

<script>
import { watch } from 'vue'
import ModalFactory from './components/ModalFactory'
import { useRouter, useRoute } from 'vue-router'
import services from './services'

export default {
  components: { ModalFactory },
  setup () {
    const router = useRouter() // realiza acoes na rota
    const route = useRoute() // tem todas as informacoes da rota

    // fica observando o 'route.path', quando ele muda, executa a funcao que esta no segundo parametro
    watch(
      () => route.path,
      async () => {
        // verifica se a rota precisa de autenticacao para ser acessada
        if (route.meta.hasAuth) { // esse 'hasAuth' está sendo setado no router/index.js
          const token = window.localStorage.getItem('token')
          if (!token) { // se não achou o token, redireciona para a Home
            router.push({ name: 'Home' })
            return
          }

          const { data } = await services.users.getMe()
          console.log('data', data)
        }
      }
    )
  }
}
</script>
