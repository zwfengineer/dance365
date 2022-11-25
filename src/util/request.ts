import axios, { type AxiosResponse } from "axios";
// import pinia from '@/stores/index';
import { ElMessage, ElMessageBox } from "element-plus";

const deviceInfo =  {
  signOs: "pc",
  signAppVersion: "5.7.1",
  signAppId: "wudao",
  signDeviceCode: "454822bdf9f6bf0772961f7d261b6592",
  signDeviceBrand: "Firefox",
  signDeviceType: "108",
};

const eig_nonce = "hnm6criaphtdzjr8rz42456wte56j8wa"
const eig_timestamp = " 1669357111623"
const eig_signature = " 7024c470672b079f011fcf7168d2a6e7rz3a188154ecd86f4a57cc31dc4d8efee787b931"
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
export default request;
