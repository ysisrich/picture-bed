/*
* github 账号仓库信息
*/

const API_BaseUrl:string = '/api_github';

// token 令牌 
const token:string = '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';

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

