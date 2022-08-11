import useStore from '../hooks/useStore'
import { resetUserStore, setApiKey, setCurrentUser, cleanCurrentUser } from './user'

describe('UserStore', () => {
  afterEach(() => {
    resetUserStore()
  })

  it('deve setar o current user', () => {
    const store = useStore()
    setCurrentUser({ name: 'Carlos' })
    expect(store.User.currentUser.name).toBe('Carlos')
  })

  it('deve setar a apiKey do current user', () => {
    const store = useStore()
    setApiKey('123')
    expect(store.User.currentUser.apiKey).toBe('123')
  })

  it('deve limpar o current user', () => {
    const store = useStore()
    setCurrentUser({ name: 'Carlos' })
    expect(store.User.currentUser.name).toBe('Carlos')
    cleanCurrentUser()

    expect(store.User.currentUser.name).toBeFalsy()
  })
})
