/*
* gitee 账号仓库信息
*
* 开发环境配置 - dev
*/

const API_BaseUrl:string = '/api_gitee';

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

 // 用户gitee信息
const userInfo:object = {}

// 仓库信息 上传的具体仓库和文件路径
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