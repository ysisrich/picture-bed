import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import viteCompression from 'vite-plugin-compression'

import Host from './config/host'
const {Github, Gitee, OSS, Upyun} = Host


export default (({mode})=>{
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };


  return {
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
        [Github.dev.API_BaseUrl]: {
          target: Github.build.API_BaseUrl, //目标接口域名
          secure: true, //false为http访问，true为https访问
          changeOrigin: true, //是否跨域
          rewrite: path => {
            let reg = new RegExp(`^\\${[Github.dev.API_BaseUrl]}`, 'g')
            return path.replace(reg, '')
          },
          configure: (proxy, options) => {
            // proxy 是 'http-proxy' 的实例
          },
        },
  
        [Gitee.dev.API_BaseUrl]: {
          target: Gitee.build.API_BaseUrl, //目标接口域名
          secure: true, //false为http访问，true为https访问
          changeOrigin: true, //是否跨域
          rewrite:  path => {
            let reg = new RegExp(`^\\${[Gitee.dev.API_BaseUrl]}`, 'g')
            return path.replace(reg, '')
          },
          configure: (proxy, options) => {
            // proxy 是 'http-proxy' 的实例
          },
        },
  
        [Upyun.dev.API_BaseUrl]: {
          target: Upyun.build.API_BaseUrl, //目标接口域名
          secure: true, //false为http访问，true为https访问
          changeOrigin: true, //是否跨域
          rewrite:  path => {
            let reg = new RegExp(`^\\${[Upyun.dev.API_BaseUrl]}`, 'g')
            return path.replace(reg, '')
          },
          configure: (proxy, options) => {
            // proxy 是 'http-proxy' 的实例
          },
        },

        [OSS.dev.API_BaseUrl]: {
          target: OSS.build.API_BaseUrl, //目标接口域名
          secure: true, //false为http访问，true为https访问
          changeOrigin: true, //是否跨域
          rewrite:  path => {
            let reg = new RegExp(`^\\${[OSS.dev.API_BaseUrl]}`, 'g')
            return path.replace(reg, '')
          },
          configure: (proxy, options) => {
            // proxy 是 'http-proxy' 的实例
          },
        },
  
      }
    },
    // 生产环境去除 console debugger
    build: {
      target: 'modules',
      outDir: './dist', //指定输出路径
      assetsDir: 'assets', // 指定生成静态资源的存放路径
      minify: 'terser', // 混淆器，terser构建后文件体积更小
      terserOptions: { // 去除console
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  
  
  
  }
})
