import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./routers"
import pinia from './stores'
const app = createApp(App)
app.use(router).use(pinia).mount("#app")
