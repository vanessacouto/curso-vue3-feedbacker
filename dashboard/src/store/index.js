import { readonly } from 'vue'
// todos os imports dos nossos modulos estarao aqui
import UserModule from './user'
import GlobalModule from './global'

export default readonly({
  User: UserModule,
  Global: GlobalModule
})
