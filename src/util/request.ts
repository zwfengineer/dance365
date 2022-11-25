import axios, { type AxiosResponse } from "axios";
// import pinia from '@/stores/index';
import { ElMessage, ElMessageBox } from "element-plus";

import deviceInfo  from "./device.json"

const eig_nonce = "e4ysbe1hhbf6ef6zntrfbxhara13nr7w"
const eig_timestamp = "1669361353202"
const eig_signature = "6529da340721eb4b85a6d66ae1b6d9eb52f56ef92528e1xd43a1fd2ac53fabf874665146"
const eig_appid = "eig_pc"
const request = axios.create({
  baseURL: "/dev-api",
  timeout: 2000,
});

request.interceptors.request.use((config: any) => {
  console.log(config)
  if (localStorage.getItem("token")) {
    if(!config.params){
      config.params = {} 
      // 避免意外覆盖或缺失params 对象
    }
    config.params.access_token =  localStorage.getItem("token");
    config.headers.deviceInfo = JSON.stringify(deviceInfo)
    config.headers.eig_nonce = eig_nonce
    config.headers.eig_signature = eig_signature
    config.headers.eig_timestamp = eig_timestamp
    config.headers.eig_appid = eig_appid
    console.log(config);
  }
  return config;
});
request.interceptors.response.use(
  async (response: AxiosResponse<any>) => {
    // 对响应数据做点什么
    if (response.status !== 200) {
      /* 成功数据的code值为20000/200 */
      // 统一的错误提示
      ElMessage({
        message:"error 网络错误",
        type: "error",
        duration: 5 * 1000,
      });
    } else {
      return response.data;
    }
  },
  (error) => {
    console.log(error)
    return Promise.reject(error);
  }
);
export default request;
