/*
* gitee 账号仓库信息
*/
import Cookie from "@/utils/Cookie";


export default {
    token: Cookie.getCookie('token') || "9a442e5a2baf17575d1948a7f0bb82d6",
    auth: {
      username: "YsisNo1",
      password: "***************",
    },
    userInfo: {},
    repoInfo: {
      owner: "YsisNo1",
      repo: "static",
      path: "",
    },
  }