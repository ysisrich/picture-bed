/*
* upyun 又拍云账号信息
*
* 开发环境配置 - dev
*/



const API_BaseUrl:string = '/upyun';

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