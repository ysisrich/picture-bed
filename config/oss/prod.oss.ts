/*
* oss 账号仓库信息
*
* 生产环境配置 - build
*/

const API_BaseUrl:string = 'http://oss-cn-shenzhen.aliyuncs.com';

// token 令牌 
const token:string = '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';

// 账户 用户名密码 阿里云 AccessKey ID 与 AccessKey Secret 验证
const auth:object = {
    username: "LTAI5t6cMZGgAvV2ogwcNwEA",
    password: "DIbLb3SI1t6KtLAYCIoGwivBfeAJsz",
}
 // 登录用户信息
const userInfo:object = {}

// 仓库信息 或 云存储信息
const repoInfo:object = {
    bucketName: "YsisNo1",
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

