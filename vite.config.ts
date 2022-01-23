import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import viteCompression from 'vite-plugin-compression'

// const mode:string = import.meta.env.MODE
// const BaseUrl:string = import.meta.env.BASE_URL



export default defineConfig({
  base: './', //打包路径
  mode: '',
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
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/main.scss";'
      }
    }
  },

  // 运行代理和打包配置
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: false,
    https: false,
    proxy: {
      // 使用 proxy 实例
      '/api_github': {
        target: 'https://api.github.com', //目标接口域名
        secure: true, //false为http访问，true为https访问
        changeOrigin: true, //是否跨域
        rewrite: path => path.replace(/^\/api_github/, ''),
        configure: (proxy, options) => {
          // proxy 是 'http-proxy' 的实例
        },
      },

      '/api_gitee': {
        target: 'https://gitee.com/api/v5', //目标接口域名
        secure: true, //false为http访问，true为https访问
        changeOrigin: true, //是否跨域
        rewrite: path => path.replace(/^\/api_gitee/, ''),
        configure: (proxy, options) => {
          // proxy 是 'http-proxy' 的实例
        },
      },

      '/api_upyun': {
        target: 'https://v0.api.upyun.com', //目标接口域名
        secure: true, //false为http访问，true为https访问
        changeOrigin: true, //是否跨域
        rewrite: path => path.replace(/^\/api_upyun/, ''),
        configure: (proxy, options) => {
          // proxy 是 'http-proxy' 的实例
        },
      },

    }
  },
  // 生产环境去除 console debugger
  build: {
    target: 'modules',
    outDir: 'dist', //指定输出路径
    assetsDir: 'assets', // 指定生成静态资源的存放路径
    minify: 'terser', // 混淆器，terser构建后文件体积更小
    terserOptions: { // 去除console
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }



})
