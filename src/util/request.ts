import axios, { type AxiosResponse } from "axios";
// import pinia from '@/stores/index';
import { ElMessage, ElMessageBox } from "element-plus";

const request = axios.create({
  baseURL: "/dev-api",
  timeout: 2000,
});

request.interceptors.request.use((config: any) => {
  if(localStorage.getItem("token")){
    config.params.access_token = localStorage.getItem("token")
  }
  return config;
});
request.interceptors.response.use(
  async (response: AxiosResponse<any>) => {
    // 对响应数据做点什么
    const res = response.data;
    if (res.code !== 200) {
      /* 成功数据的code值为20000/200 */
      // 统一的错误提示
      ElMessage({
        message:
          (typeof res.data == "string" && res.data) || res.message || "Error",
        type: "error",
        duration: 5 * 1000,
      });
    } else {
      return res;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default request