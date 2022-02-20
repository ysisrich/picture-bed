/*
* gitee 账号仓库信息
* 
* 生产环境配置 - build
*/


const API_BaseUrl:string = 'https://gitee.com/api/v5';

// 登录方式1 token 令牌 上传需要header携带认证
const token:string = '2f6d21f7e13d5c122d31f5b8b3c31430';

// 登录方式2 用户名密码
const account:object = {
    username: "",
    password: ""
}

// 登录方式3 应用授权 
const OAuth:object = {
    client_id: "19a8b20fda5d9ba3203394779338db41ffaacc94423144603a9b9e1570a48820",
    client_secret: "749011395aea7af84da73e297450061aa89d73292665d9e3d7f56201f725b581"
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
    account,
    OAuth,
    userInfo,
    repoInfo,
  }