import { createApp } from 'vue'
import App from './App.vue'
//import '@/assets/css/style.css'

// Atribui uma instância do App na variável global window.app 
window.app = createApp(App).mount('#app')
