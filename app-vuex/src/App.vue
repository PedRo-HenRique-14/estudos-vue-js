<template>
  <AppProducts/>
  <div>
    <h2>Carrinho</h2>
    <h3>Custo total: R${{ $store.getters.totalCost }}</h3>
    <div
      v-for="product in $store.state.cart"
      :key="product.id"
    >
      {{ product.name }}
    </div>
  </div>
  <br><br>
  <button @click="saveUser">Save User</button>
</template>

<script>
import AppProducts from '@/components/products/AppProducts.vue'

export default {
  name: 'App',
  components: {
    AppProducts,
  },
  methods: {
    saveUser() {
      const newUser = {
        first_name: 'Henrique',
        last_name: 'Pedro',
        email: 'email@example.com',
      }
      this.$store.commit('storeUser', newUser) // Chama a função storeUser da camada mutation no index.js, passando como parametro a constante newUser
    },
  },
  data() {
    return {

    }
  },
  created() {
    //console.log(this.$store.state.user);
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
