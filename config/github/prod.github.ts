/*
* github 账号仓库信息
*
* 生产环境配置 - build
*/


const API_BaseUrl:string = 'https://api.github.com';

// 登录方式1 token 令牌 上传需要header携带认证
const token:string = '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';

// 登录方式2 用户名密码
const account:object = {
    username: "",
    password: ""
}

// 登录方式3 应用授权 
const OAuth:object = {
    client_id: "c64ad48e25fedf796b32",
    client_secret: "c5f9959dd688e5ba8a6f07d9114a53e40028fc62"
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