/*
* gitee 账号仓库信息
*
* 开发环境配置 - dev
*/

const API_BaseUrl:string = '/api_gitee';

// token 令牌 
const token:string = '9a442e5a2baf17575d1948a7f0bb82d6'; // f73855df5573e23982abc132abae79d2

// 账户 用户名密码
const auth:object = {
    username: "YsisNo1",
    password: "***************",
}
 // 登录用户信息
const userInfo:object = {}

// 仓库信息 或 云存储信息
const repoInfo:object = {
    owner: "YsisNo1",
    repo: "static",
    path: "",
}

export default {
    API_BaseUrl,
    token,
    auth,
    userInfo,
    repoInfo,
  }