import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, "src"),
    },
    extensions: [".ts", ".vue", ".js", ".jsx", ".tsx"], // 导入时想要省略的扩展名列表。
  },
  server:{
    proxy:{
      '/dev-api':{
        target:"https://www.dance365.com/apis/",
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/dev-api/,'')
      },
    
    }
  }
})


