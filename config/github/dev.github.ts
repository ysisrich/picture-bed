/*
* github 账号仓库信息
*
* 开发环境配置 - dev
*/

const API_BaseUrl:string = '/api_github';

// 登录方式1 token 令牌 上传需要header携带认证
const token:string = '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';

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

