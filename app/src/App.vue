<template>
  <div>
    {{ fullName }} <br><br>
    <h2>Todos incompletas</h2>
    <div
      v-for="todo in incompleteTodos"
      :key="todo.id"
    >
      <input 
        type="checkbox"
        v-model="todo.completed"
        >
      {{ todo.title }}
    </div>

    <h2>Todos completas</h2>
    <div
      v-for="todo in completeTodos"
      :key="todo.id"
    >
      <input 
        type="checkbox"
        v-model="todo.completed"
        >
      {{ todo.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: {
        firstName: 'Pedro',
        lastName: 'Henrique',
      },
      todos: [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true
        },
        {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false
        }
      ],
    }
  },
  /* Computed são funções cacheadas, as quais são recomputadas apenas quando houver alteração de valor das dependencias (ex: variável).
   * Diferentemente dos methods, onde toda vez que uma função é chamada ela é recomputada.
   */
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`
    },
    incompleteTodos() {
      return this.todos.filter(todo => !todo.completed)
    },
    completeTodos() {
      return this.todos.filter(todo => todo.completed)
    }
  },
  methods: {

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
