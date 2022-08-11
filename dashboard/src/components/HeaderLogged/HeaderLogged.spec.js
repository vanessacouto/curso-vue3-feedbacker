import { shallowMount } from '@vue/test-utils'
import HeaderLogged from '.'
import { routes } from '../../router'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

const mockStore = { currentUser: {} }
jest.mock('../../hooks/useStore', () => {
    return () => {
        return mockStore
    }
})

describe('<HeaderLogged />', () => {
  it('deve renderizar a HeaderLogged corretamente', async () => {
    router.push('/')
    await router.isReady()

    // vai montar somente a Home, sem seus componentes (sem o contact e o customHeader)
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('deve renderizar os tres pontos quando o usuario nao esta logado', async () => {
    router.push('/')
    await router.isReady()
    // vai montar somente a Home, sem seus componentes (sem o contact e o customHeader)
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    })

    const buttonLogout = wrapper.find('#logout-button')
    expect(buttonLogout.text()).toBe('...')
  })

  it('deve renderizar o nome do usuario quando o usuario esta logado', async () => {
    router.push('/')
    await router.isReady()
    mockStore.currentUser.name = 'Vanessa'
    // vai montar somente a Home, sem seus componentes (sem o contact e o customHeader)
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    })
    
    const buttonLogout = wrapper.find('#logout-button')
    expect(buttonLogout.text()).toBe('Vanessa (sair)')
  })
})
