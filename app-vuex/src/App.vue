<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <button @click="saveUser">Save User</button>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
