/*
* upyun 又拍云账号信息
*/
import Cookie from "@/utils/Cookie";

const baseUrl = 'https://v0.api.upyun.com'

export default {
	baseUrl,
    token: Cookie.getCookie('token') || "v41xH0QoXbVJU1STsvehNnBYV7EuWpdg",
    auth: {
      username: "yangs",
      password: 'v41xH0QoXbVJU1STsvehNnBYV7EuWpdg',
      code: "stringValue",
      name: "流量查询 token",
      scope: "global",
    },
    userInfo: {},
    repoInfo: {
      bucket: "yangs-image-bed",
      path: "",
    },
  }