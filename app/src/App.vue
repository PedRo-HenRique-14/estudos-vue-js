<template>
  <div>
    <div>
      Two-Way data binding <br>
      v-model -> formulários <br><br>
      <div>
        <label for="">Nome:</label>
        <input type="text" v-model="name"> <br>
        {{ name }}
      </div> <br><br>
      <div>
        <label for="">Esportes:</label>
        <select v-model="sports">
          <option value="">Selecione</option>
          <option value="Futebol">Futebol</option>
          <option value="Vôlei">Vôlei</option>
          <option value="Ping-Pong">Ping-Pong</option>
        </select><br>
        {{ sports }}
      </div> <br>
      <div>
        <label for="">Newsletter</label><br>
        <input v-model="newsletter" type="radio" value="Sim">Sim <br>
        <input v-model="newsletter" type="radio" value="Não">Não <br>
        {{ newsletter }}
      </div>
      <br><br>
      <div>
        <label for="">Termos de serviço</label><br>
        <input v-model="terms" type="checkbox">Concordo com tudo :D <br>
        {{ terms }}
      </div>
      <br><br>
      <div>
        <label for="">Cores que você mais gosta</label><br>
        <input v-model="colors" type="checkbox" value="Roxo">Roxo <br>
        <input v-model="colors" type="checkbox" value="Rosa">Rosa <br>
        <input v-model="colors" type="checkbox" value="Azul">Azul <br>
        <input v-model="colors" type="checkbox" value="Amarelo">Amarelo <br>
        {{ colors }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name:'Pedro Henrique',
      sports: '',
      newsletter: 'Sim',
      terms: true,
      colors: [],
    }
  }
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
