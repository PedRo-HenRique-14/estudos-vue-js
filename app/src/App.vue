<template>
  <div>
    <button @click="onClick">Enviar</button>
    <br>
    <div @mouseover="mouseOver" @mouseout="mouseOut">
      Mouse over
    </div>
    <br><br>
    <form 
      action="https://google.com"
      @submit.prevent="submitForm"
    >
      <input type="text" @keyup="onKeyUp">
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  methods: {
    onClick(evt) {
      console.log('Olha o click!', evt)
    },
    mouseOver(evt) {
      console.log('Mouse over!!!', evt)
    },
    mouseOut(evt) {
      console.log('Mouse out!!!', evt)
    },
    submitForm(evt) {
      console.log('Form Enviado!!!', evt)
    },
    onKeyUp(evt) {
      console.log( `${evt.key} key up!!!`, evt)
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
