import {createRouter,createWebHistory} from "vue-router"
import { staticRouters } from "./routes"
 const  router = createRouter({
    history:createWebHistory(),
    routes:staticRouters,
    scrollBehavior:()=>{
        return {top:0,left:0}
    }
})

export default router