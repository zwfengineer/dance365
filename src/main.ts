import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./routers"
import pinia from './stores'
import request from "./util/request"
localStorage.setItem("token",import.meta.env.VITE_TOKEN)

request.get("/moment/moments/rec/default")

const app = createApp(App)
app.use(router).use(pinia).mount("#app")
