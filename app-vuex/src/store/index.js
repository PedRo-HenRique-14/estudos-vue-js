import { createStore } from 'vuex'

export default createStore({
  state: {
    /* 
     * Aqui é onde se guarda os dados
     */

    user: {
      first_name: 'Pedro',
      last_name: 'Henrique',
      email: 'example@email.com',
    },

    products: [], // É possível inserir arrays no state
  },
  mutations: {
    /*
     * Camada mutation atualiza os dados armazenados na camada state. Isso é feito atraves de funções
     */

    storeUser(state, data) {
      state.user = data
    },
  },
  actions: {
  },
  getters: {
  },
})
