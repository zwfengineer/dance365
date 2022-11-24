import { RouteRecordRaw } from "vue-router";

export const staticRouters: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error/404.vue"),
    meta: {
      hidden: true,
    },
  },
  {
    path: "/:pathMatch(.*)",
    name: "Any",
    redirect: "/404",
    meta: {
      hidden: true,
    },
  },
];
