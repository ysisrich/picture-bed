//@ts-nocheck


//axios.ts
import axios, { AxiosRequestConfig } from "axios";
// 导入 Store， 使用自己的路径
import { useUser } from "@/store/index";

// 设置请求头和请求路径
axios.defaults.baseURL = "https://api.github.com";
axios.defaults.timeout = 10000; // 设置超时时长
//@ts-ignore
axios.defaults.headers["Content-Type"] = "application/json;charset=UTF-8";
//@ts-ignore
axios.defaults.headers["Accept"] = "application/vnd.github.v3+json";

// 请求拦截
axios.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    const token: string = useUser().token;
    const auth: object = useUser().auth;

    if (token) {
      //@ts-ignore
      config.headers["Authorization"] = "token " + token;
    }

    // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
    // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
    // if(auth){
    //   console.log(auth)
    //   //@ts-ignore
    //   config.auth = auth
    // }
    return config;
  },
  (error) => {
    console.error(error);
    return error;
  }
);

const errorCode: object = {
  "304": "未做任何修改",
  "401": "对不起，您没有权限访问",
  "403": "禁止访问",
  "422": "验证失败",
  "404": "资源未找到",
  "409": "资源冲突",
};

// 响应拦截
axios.interceptors.response.use(
  (response) => {
    console.log("正确响应", response);
    // if (res.data.code === 111) {
    //   sessionStorage.setItem('token', '')
    //   // token过期操作
    // }else if (res.data.code === 401) {
    //   // console.log(res.message)
    // }

    return Promise.resolve(response);
  },
  (error) => {
    const status: number = error.response.status;
    if (status) {
      // @ts-ignore
      $message.error(errorCode[status]);
      console.log(error.response);
      return Promise.reject(error.response);
    }
  }
);

interface ResType<T> {
  code: number;
  data?: T;
  msg: string;
  err?: string;
}
interface Axios {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>;
  post<T>(url: string, params?: unknown): Promise<ResType<T>>;
  patch<T>(url: string, params?: unknown): Promise<ResType<T>>;
  put<T>(url: string, params?: unknown): Promise<ResType<T>>;
  delete<T>(url: string, params?: unknown): Promise<ResType<T>>;
}

const request: Axios = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      window.$loadingBar.start();
      axios
        .get(url, { params })
        .then((res) => {
          // @ts-ignore
          window.$loadingBar.finish();
          resolve(res);
        })
        .catch((err) => {
          // @ts-ignore
          window.$loadingBar.error();
          reject(err);
        });
    });
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      window.$loadingBar.start();
      axios
        .post(url, params)
        .then((res) => {
          // @ts-ignore
          window.$loadingBar.finish();
          resolve(res);
        })
        .catch((err) => {
          // @ts-ignore
          window.$loadingBar.error();
          resolve(err);
        });
    });
  },
  patch(url, params) {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      window.$loadingBar.start();
      axios
        .patch(url, params)
        .then((res) => {
          // @ts-ignore
          window.$loadingBar.finish();
          resolve(res);
        })
        .catch((err) => {
          // @ts-ignore
          window.$loadingBar.error();
          resolve(err);
        });
    });
  },
  put(url, params) {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      window.$loadingBar.start();
      axios
        .put(url, params)
        .then((res) => {
          // @ts-ignore
          window.$loadingBar.finish();
          resolve(res);
        })
        .catch((err) => {
          // @ts-ignore
          window.$loadingBar.error();
          resolve(err);
        });
    });
  },
  delete(url, params) {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      window.$loadingBar.start();
      axios
        .delete(url, { data: params })
        .then((res) => {
          // @ts-ignore
          window.$loadingBar.finish();
          resolve(res);
        })
        .catch((err) => {
          // @ts-ignore
          window.$loadingBar.error();
          resolve(err);
        });
    });
  },
};

export default request;
