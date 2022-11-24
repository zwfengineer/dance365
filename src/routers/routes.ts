import { RouteRecordRaw } from "vue-router";

export const  staticRouters:Array<RouteRecordRaw>=[
    {
        path:"/home",
        name:"home",
        component:()=>import("@/views/home/index.vue")
    },{
        path:"/",
        redirect:"/home"
    }
]