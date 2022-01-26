//@ts-nocheck


//axios.ts
import axios, { AxiosRequestConfig } from "axios";
// 导入 Store
import { useUser } from "@/store/index";
import i18n from '@/lang/index'
import Cookie from "@/utils/Cookie";
import Host from '../../config/host';
const { Gitee, Github, Upyun, OSS } = Host
Cookie.getCookie('repoType') || Cookie.setCookie('repoType','Github')




// 当前环境 development production
const NODE_ENV:string = import.meta.env.VITE_NODE_ENV

const setBaseUrl =  () => {
  const type:string = Cookie.getCookie('repoType') || Cookie.setCookie('repoType','Github') || 'Github'
  let API = type == 'Github' ? Github : type == 'Gitee' ? Gitee : 
    type == 'OSS' ? OSS : type == 'Upyun' ? Upyun : ''

  if(NODE_ENV === 'development'){
    axios.defaults.baseURL = API.dev.API_BaseUrl
  }else if(NODE_ENV === 'production'){
    axios.defaults.baseURL = API.build.API_BaseUrl
  }else{
    axios.defaults.baseURL = 'test'
  }
}

axios.defaults.timeout = 10000; // 设置超时时长
//@ts-ignore
axios.defaults.headers["Content-Type"] = "application/json;charset=UTF-8";
//@ts-ignore
axios.defaults.headers["Accept"] = "application/vnd.github.v3+json";

// 请求拦截
axios.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    console.log('git变化',useUser().git)
    const token: string = useUser().git.token;
    const auth: object = useUser().git.auth;


    // oss
    if(token && Cookie.getCookie('repoType') == 'OSS'){
      // config.headers["Authorization"] = token;
      return config
    }

    // 又拍云
    if(token && Cookie.getCookie('repoType') == 'Upyun'){
      // config.headers["Authorization"] = token;
      return config
    }

    // Github Gitee
    if (token && Cookie.getCookie('repoType') === 'Github' || Cookie.getCookie('repoType') === 'Gitee') {
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
  "304": i18n.global.t('errorResponse.304'),
  "401": i18n.global.t('errorResponse.401'),
  "403": i18n.global.t('errorResponse.403'),
  "422": i18n.global.t('errorResponse.422'),
  "404": i18n.global.t('errorResponse.404'),
  "409": i18n.global.t('errorResponse.409'),
  "400": i18n.global.t('errorResponse.400'),

  "1011":i18n.global.t('errorResponse.1011'),
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
	  console.log(error)
	if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1 ) {
		// eslint-disable-next-line
		$message.error(errorCode['1011']);
		return Promise.reject('请检查网络再重新连接')
	}
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
      setBaseUrl()
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
      setBaseUrl()
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
      setBaseUrl()
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
      setBaseUrl()
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
      setBaseUrl()
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
