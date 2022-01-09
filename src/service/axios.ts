//axios.ts
import axios, { AxiosRequestConfig } from 'axios'
import NProgress from 'nprogress'

// 导入 Store， 使用自己的路径
import { useStore } from "@/store/index";

const store = useStore()



// 设置请求头和请求路径
axios.defaults.baseURL = 'https://api.github.com'
axios.defaults.timeout = 5000 // 设置5s超时
//@ts-ignore
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'
//@ts-ignore
axios.defaults.headers['Accept'] = 'application/vnd.github.v3+json'

// 请求拦截
axios.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    const token:string = store.token
    const auth:object = store.auth

    if (token) {
      //@ts-ignore
      config.headers['Authorization'] ="token " +  token
    }

    // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
    // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
    // if(auth){
    //   console.log(auth)
    //   //@ts-ignore
    //   config.auth = auth
    // }
    return config
  },
  (error) => {
    console.error(error)
    return error
  }
)


const errorCode:object = {
  '304': '未做任何修改',
  '401': '对不起，您没有权限访问',
  '403': '禁止访问',
  '422': '验证失败',
  '404': '资源未找到'
}

// 响应拦截
axios.interceptors.response.use(
  (response) => {
    console.log('正确响应',response)
    // if (res.data.code === 111) {
    //   sessionStorage.setItem('token', '')
    //   // token过期操作
    // }else if (res.data.code === 401) {
    //   // console.log(res.message)
    // }

    return response
  }
  ,
  (error) => {
    const status:number = error.response.status; 
    if(status){
      // @ts-ignore
      $message.error(errorCode[status])
      return error.response
    }
  }
)

interface ResType<T> {
  code: number
  data?: T
  msg: string
  err?: string
}
interface Axios {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>
  post<T>(url: string, params?: unknown): Promise<ResType<T>>
  patch<T>(url: string, params?: unknown): Promise<ResType<T>>
  put<T>(url: string, params?: unknown): Promise<ResType<T>>
  delete<T>(url: string, params?: unknown): Promise<ResType<T>>
}

const request: Axios = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .get(url, { params })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, params)
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  patch(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, params)
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  put(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, params)
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  delete(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .delete(url, {data:params})
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  }
}

export default request

