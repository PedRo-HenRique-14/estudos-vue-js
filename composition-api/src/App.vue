<template>
  <AppProduct/>
  {{ name }}
  <img @click="changeName" alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AppProduct from '@/components/products/AppProduct.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    AppProduct,
  },
  setup() {
    /* 
     * Substitue as options data, methods, computed, etc..
     * Por padrão não é reativo
     */
    let name = 'Pedro'

    const changeName = () => {
      alert('Teste')
      name = 'Pedro Henrique'
    }

    return {
      name,
      changeName
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
