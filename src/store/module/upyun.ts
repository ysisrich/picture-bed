/*
* upyun 又拍云账号信息
*/
import Cookie from "@/utils/Cookie";
//MD5加密
import md5 from 'js-md5';

// icrDWTOpA4Xjg9d7A3QlyldclTsP3X3r
export default {
    token: Cookie.getCookie('token') || "icrDWTOpA4Xjg9d7A3QlyldclTsP3X3r",
    auth: {
      username: "yangs",
      password: 'icrDWTOpA4Xjg9d7A3QlyldclTsP3X3r',
      code: "1111222",
      name: "token",
      scope: "global",
    },
    userInfo: {},
    repoInfo: {
      bucket: "yangs-image-bed",
      path: "",
    },
  }