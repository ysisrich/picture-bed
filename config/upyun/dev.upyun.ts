/*
* upyun 又拍云账号信息
*
* 开发环境配置 - dev
*/



const API_BaseUrl:string = '/upyun';

// token 令牌 
const token:string = 'icrDWTOpA4Xjg9d7A3QlyldclTsP3X3r';

// 账户 用户名密码
const auth:object = {
    username: "yangs",
    password: 'icrDWTOpA4Xjg9d7A3QlyldclTsP3X3r',
    code: "1111222",
    name: "token",
    scope: "global",
  }
 // 登录用户信息
const userInfo:object = {}

// 仓库信息 或 云存储信息
const repoInfo:object = {
    bucket: "yangs-image-bed",
    path: "",
  }

export default {
    API_BaseUrl,
    token,
    auth,
    userInfo,
    repoInfo,
  }