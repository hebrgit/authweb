import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
/************************************* 路径配置 start ********************************/
import { resolve } from 'path' 


export default defineConfig({
  plugins: [vue()],
  
  server: {
    proxy: {
      '/path': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/path/, '')
      }
    }
  },
  

  // resolve: {  // ****************** 路径配置新增
  //   '@': path.resolve(__dirname, 'src') // ****************** 路径配置新增
  // }  
})
