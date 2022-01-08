import { defineConfig,loadEnv  } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import viteCompression from 'vite-plugin-compression'

// const mode:string = import.meta.env.MODE
// const BaseUrl:string = import.meta.env.BASE_URL


// https://vitejs.dev/config/
export default defineConfig({
  base: './', //打包路径
  mode:'',
  plugins: [
    vue(),
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  // 配置别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // 全局样式文件全局注入到项目中
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@import "@/assets/style/main.scss";'
      }
    }
  },

  // 运行代理和打包配置
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    https: false,
    proxy: {}
  },
  // 生产环境去除 console debugger
  build:{
    terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
    }
  }
  

})
