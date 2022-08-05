import Store from '../store'

export default function useStore (module) {
    if (module) {
        return Store[module]
    }
    // se nao passar um 'module', retorna a store completa
    return Store
}