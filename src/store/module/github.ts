/*
* github 账号仓库信息
*/
import Cookie from "@/utils/Cookie";


export default {
    token: Cookie.getCookie('token') || "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",
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