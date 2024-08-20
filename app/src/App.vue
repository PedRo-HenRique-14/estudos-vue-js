<template>
  <div class="container">
    <h1 :class="{ 'title': true, 'title-main': isMain }">The Ultimate ToDo List</h1>
    <p :class="pClass">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, eos quasi iste veritatis obcaecati, aspernatur quis laborum atque eaque cumque nam voluptate quaerat tempore sint id, provident eum! Animi, aperiam.
    </p>
    <p :style="pStyle">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eius porro et molestiae non omnis dolorum necessitatibus quasi repudiandae eligendi tempore minus magni beatae, tenetur saepe. At laudantium inventore tempora.
    </p>
    <div 
      v-for="(obj, index) in todos"
      :key="obj.id"
      class="todo-item"
    >
      <img 
        v-bind:src="obj.imgSrc" 
        :alt="obj.imgAlt"
        v-if="obj.imgSrc"
        >
      <span>{{ index + 1 }} - {{ obj.title }}</span>
      <span class="status" v-show="obj.completed">Finalizado</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isMain: true,
      classVar: "",
      pClass: ['text', 'title'],
      pStyle: {'color': 'brown', 'fontSize': '18px', textAlign: 'center'},
      todos: [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false,
          imgSrc: "https://placehold.co/50",
          imgAlt: "Essa com certeza é uma foto!",
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false,
          imgSrc: "https://placehold.co/50",
          imgAlt: "Essa com certeza é uma foto!",
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false,
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true,
          imgSrc: "https://placehold.co/50",
          imgAlt: "Essa com certeza é uma foto!",
        },
        {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false,
          imgSrc: "https://placehold.co/50",
          imgAlt: "Essa com certeza é uma foto!",
        }
      ],
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
.container {
  width: 50%;
}
.title-main {
  font-size: 50px;
}
.title {
  text-align: center;
}
.text {
  font-size: 18px
}
.todo-item{
  align-items: center;
  background-color: black;
  color: white;
  display: flex;
  gap: 20px;
  margin: 10px;
  padding: 15px;
}
.status {
  background-color: green;
  display: block;
  height: 20px;
  justify-self: flex-end;
  padding: 5px 10px;
}
</style>
