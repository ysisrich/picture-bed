/*
* gitee 账号仓库信息
*/


const API_BaseUrl:string = 'https://gitee.com/api/v5';

// token 令牌 
const token:string = '9a442e5a2baf17575d1948a7f0bb82d6';

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