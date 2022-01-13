/*
* gitee 仓库信息
*/
import Cookie from "@/hooks/Cookie";

const baseUrl = 'https://gitee.com/api/v5'
Cookie.setCookie('baseUrl',baseUrl)

export default {
	baseUrl,
    token: "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",
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