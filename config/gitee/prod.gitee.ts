/*
* gitee 账号仓库信息
* 
* 生产环境配置 - build
*/


const API_BaseUrl:string = 'https://gitee.com/api/v5';

// 登录方式1 token 令牌 上传需要header携带认证
const token:string = '9a442e5a2baf17575d1948a7f0bb82d6';

// 登录方式2 用户名密码
const auth:object = {
    username: "",
    password: "",
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