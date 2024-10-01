<template>

  {{ name }}
  {{ user.first_name }} {{ user.last_name }}

  <img @click="changeName" alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  setup() {
    /* 
     * Substitue as options data, methods, computed, etc..
     * Por padrão não é reativo
     */

    // Objeto reativo
    const user = ref({
      first_name: 'Pedro',
      last_name: 'Henrique'
    })

    let name = 'Pedro' // Não reativo

    const changeName = () => {
      alert('Teste')
      name = 'Pedro Henrique'
      user.value.first_name = 'Henrique'
      user.value.last_name = 'Pedro'
    }

    return {
      user,
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
