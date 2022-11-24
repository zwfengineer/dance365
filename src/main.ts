import { createApp } from "vue";
import "./style.css";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./routers";
import pinia from "./stores";
const app = createApp(App);
app
  .use(router)
  .use(pinia)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .mount("#app");
