/*
* oss 账号仓库信息
*
* 生产环境配置 - build
*/

const API_BaseUrl:string = '';

// token 令牌 
const token:string = '';

// 账户 用户名密码 阿里云 AccessKey ID 与 AccessKey Secret 验证
const auth:object = {
    username: "",
    password: "",
}
 // 登录用户信息
const userInfo:object = {}

// 仓库信息 或 云存储信息
const repoInfo:object = {
    bucketName: "",
    repo: "",
    path: "",
}




export default {
    API_BaseUrl,
    token,
    auth,
    userInfo,
    repoInfo,
}

