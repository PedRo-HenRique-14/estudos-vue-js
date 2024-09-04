<template>
  <div>
    <input 
      v-model="name"
      type="text"
    > <br>
    {{ name }}

    <br><br><br>

    <input 
      v-model="user.firstName"
      type="text"
    > <br>
    <input 
      v-model="user.lastName"
      type="text"
    > <br>
    {{ user.firstName }} {{ user.lastName }}

    <br><br><br>

    <select v-model="pageCount">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select> <br><br>
    {{ pageCount }}

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: "",
      pageCount: 5,
      user: {
        firstName: '',
        lastName: '',
      },
    }
  },
  watch: {
    /* Observa os parâmetros que contem o mesmo nome da função */
    name(newValue, oldValue) {
      console.log(newValue + " / " + oldValue);
    },
    pageCount() {
      this.changePage();
    },

    /*user() {
       * O objeto user está sendo observado, isso significa que para essa função ser disparada é necessário
       * que o objeto seja alterado, não o seus campos (firstName e lastName). Se apenas os campos forem
       * alterados, esta função não será executada.
       *
      console.log('User alterado');
    },*/

    user: {
      /* Quando ouver alteração no objeto user, a função handler será executada */
      handler() {
        console.log("User alterado");
      },
      /* Deep torna possível uma observação profunda, ou seja, agora os campos do objeto
       * estão sendo observados. É necessário ter a função handler
       */
      deep: true
    },
  },

  /* Computed são funções cacheadas, as quais são recomputadas apenas quando houver alteração de valor das dependencias (ex: variável).
   * Diferentemente dos methods, onde toda vez que uma função é chamada ela é recomputada.
   */
  computed: {
    
  },
  methods: {
    changePage() {
      console.log("Ajax change page");
    },
  },
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
