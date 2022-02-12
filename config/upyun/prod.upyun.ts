/*
* upyun 又拍云账号信息
*
* 生产环境配置 - build
*/



const API_BaseUrl:string = 'https://v0.api.upyun.com';

// token 令牌 
const token:string = '';

// 账户 用户名密码
const auth:object = {
    username: "",
    password: '',
    code: "",
    name: "",
    scope: "",
  }
 // 登录用户信息
const userInfo:object = {}

// 仓库信息 或 云存储信息
const repoInfo:object = {
    bucket: "",
    path: "",
  }

export default {
    API_BaseUrl,
    token,
    auth,
    userInfo,
    repoInfo,
  }