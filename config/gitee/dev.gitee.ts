/*
* gitee 账号仓库信息
*
* 开发环境配置 - dev
*/

const API_BaseUrl:string = '/api_gitee';

// 登录方式1 token 令牌 上传需要header携带认证
const token:string = '9a442e5a2baf17575d1948a7f0bb82d6';

// 登录方式2 用户名密码
const auth:object = {
    username: "",
    password: ""
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
    auth,
    userInfo,
    repoInfo,
  }