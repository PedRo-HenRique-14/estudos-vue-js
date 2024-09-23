<template>
  <HeaderNav>
    <template v-slot:title> <!-- Injetando <h1> no slot "title" em HeaderNav -->
      Home
    </template>
    <template v-slot:description> <!-- Injetando <p> no slot "title" em HeaderNav -->
      <p>slkjfdsklgjkldfjg</p>
    </template>
    Home - Contact - About
  </HeaderNav>

  <div>

  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue';
export default {
  name: 'App',
  components: {HeaderNav},
  data() {
    return {
      
    }
  },
  watch: {
    
  },
  computed: {
    
  },
  methods: {
    
  },
}
</script>

<style>
#app {
  color: #2c3e50;
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  justify-content: center;
  margin: 0px;
  -moz-osx-font-smoothing: grayscale;
  padding: 0px;
  -webkit-font-smoothing: antialiased;
}
</style>
