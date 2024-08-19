<template>
  <HeaderNav v-if="showHeader" />
  
  <div v-show="showName">
    Nome: {{ firstName }} <br>
    Sobrenome: {{ lastName }}
  </div>

  <div v-if="accessLevel == 'admin'">Admin User</div>
  <div v-else-if="accessLevel == 'marketing'">Marketing User</div>
  <div v-else>Default User</div>

  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderNav from './components/HeaderNav.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    HeaderNav,
  },
  data() {
    return {
      showHeader: true,
      firstName: 'Pedro Henrique',
      lastName: 'Garcia Schuch',
      showName: false,
      accessLevel: 'admin',
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
