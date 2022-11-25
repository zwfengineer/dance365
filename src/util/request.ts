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

const eig_nonce = "wsnbpxwrh42kjfn82pbnmf63jnybrxym"
const eig_timestamp = " 1669341596658"
const eig_signature = " f0c21815bb4547c05ebbebe4w1a18ca5487230ed18ec7a4b440ad0ca9f500f164c3f5522"
const eig_appid = "eig_pc"
const request = axios.create({
  baseURL: "/dev-api",
  timeout: 2000,
});

request.interceptors.request.use((config: any) => {
  if (localStorage.getItem("token")) {
    config.params = {
      access_token: localStorage.getItem("token"),
    };
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
