import Home from '.'
import { shallowMount } from '@vue/test-utils'
import { routes } from '../../router'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

describe('<Home />', () => {
    it('deve renderizar a Home corretamente', async () => {
        router.push('/')
        await router.isReady()

        // vai montar somente a Home, sem seus componentes (sem o contact e o customHeader)
        const wrapper = shallowMount(Home, {
            global: {
                plugins: [router]
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
    })
})