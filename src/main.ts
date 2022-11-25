import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./routers"
import pinia from './stores'
import request from "./util/request"
import Header from "./components/Header/index.vue"
import element from "element-plus"
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import "element-plus/dist/index.css"
localStorage.setItem("token",import.meta.env.VITE_TOKEN)


request('/promotion/ads/search/findByPosition',{
    params:{
        position:"pc_mainpage"
    }
})

const app = createApp(App)
app.component("Header",Header)
app.use(router)
.use(element,{local:zhCn})
.use(pinia)
.mount("#app")
