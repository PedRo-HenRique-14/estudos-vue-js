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

    products: [
      {
        id: 1,
        name: 'Bola',
        price: 100,
      },
      {
        id: 2,
        name: 'Chuteira',
        price: 250,
      },
      {
        id: 3,
        name: 'Meião',
        price: 75,
      }
    ], // É possível inserir arrays no state

    cart: [],
  },
  mutations: {
    /*
     * Camada mutation atualiza os dados armazenados na camada state. Isso é feito atraves de funções
     */

    addToCart(state, data) {
      state.cart.push(data)
    },
    removeFromCart(state, id) {
      const idx = state.cart.findIndex(obj => obj.id === id)
      state.cart.splice(idx, 1)
    },
  },
  getters: {
    /*
     * Funciona semelhante ao computed. Se a dependencia se alterar, a função é recomputada
     */

    totalCost(state) {
      //dependencia
      // retorna um valor
      return state.cart.reduce((totalCost, item) => totalCost += item.price, 0)
    },
  },
  actions: {
  },
})
