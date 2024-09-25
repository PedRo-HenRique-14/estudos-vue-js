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
  },
  actions: {
  },
  getters: {
  },
})
