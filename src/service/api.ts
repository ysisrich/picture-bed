
import request from "./axios";


/**
 * baseURL：https://api.github.com
 * 
 * Github API 调用权限认证3种方式
 * 1. Basic authentication 使用用户名 密码
 * 2. OAuth2 token github个人账号设置->开发者设置->个人token里：创建一个token
 * 3. OAuth2 key/secret github个人账号设置->开发者设置->创建自己的OAuth app，然后得到一对client_id和client_secret
 * 
 * tips: 部分查询操作可以不需要权限认证，但github api默认访问次数只有每小时60次，经过权限认证后访问次数提升至每小时5000次
 *       Response Header -> x-ratelimit-limit: 允许访问次数
 *       Response Header -> x-ratelimit-remaining: 剩余访问次数
 *       Response Header -> x-ratelimit-used: 用过访问次数
 */


// ================================== 不需要 auth认证 ==================================

/**
 * @author: yangs
 * @query: /users/{username}
 * @params {}
 * @description: 获取用户 GitHub 帐户的公开信息。
 */
 export const getUserGithubInfo = (params: undefined | object, query: any) => request.get(`/users/${query.username}`, params)

/**
 * @author: yangs
 * @query: /repos/{owner}/{repo}
 * @params {}
 * @description: 获取用户某个存储库的详细信息
 */
export const getUserRepositoryInfo = (params: undefined | object, query: any) => request.get(`/repos/${query.owner}/${query.repo}`, params)

/**
 * @author: yangs
 * @query: /users/{owner}/repos
 * @params {}
 * @description: 获取用户所有存储库的详细信息（公开的）
 */
 export const getUserAllRepositoryInfo = (params: undefined | object, query: any) => request.get(`/users/${query.owner}/repos`, params)





// ================================== 需要 auth认证 ==================================
/**
 * @author: yangs
 * @query: /user/repos
 * @params {}
 * @description: 列出经过身份验证的用户的存储库 (包括私有和公有仓库)
 */
 export const getAuthUserAllRepository = (params: undefined | object, query: any) => request.get(`/user/repos`, params)

 /**
 * @author: yangs
 * @query:  /repos/{owner}/{repo}/contents/{path}
 * @params {}
 * @description: 创建新文件或替换存储库中的现有文件
 */
  export const createNewFileOrUpdateFile = (params: undefined | object, query: any) => request.put(`/repos/${query.owner}/${query.repo}/contents/${query.path}`, params)




/**
 * baseURL：https://gitee.com/api/v5
 * 
 * Gitee API 调用权限认证2种方式
 * 1. 授权码模式
 *      A 应用通过 浏览器 或 Webview 将用户引导到码云三方认证页面上（ GET请求 ）
 *      B 用户对应用进行授权
 *      C 码云认证服务器通过回调地址{redirect_uri}将 用户授权码 传递给 应用服务器 或者直接在 Webview 中跳转到携带 用户授权码的回调地址上，Webview 直接获取code即可
 *      D 应用服务器 或 Webview 使用 access_token API 向 码云认证服务器发送post请求传入 用户授权码 以及 回调地址
 * 2. 密码模式
 *      A 用户向客户端提供邮箱地址和密码。客户端将邮箱地址和密码发给码云认证服务器，并向码云认证服务器请求令牌。
 *      B 码云认证服务器返回 access_token
 * 
 * 更多信息-> https://gitee.com/api/v5/oauth_doc#/
 * 
 */


// ================================== 不需要 auth认证 ==================================


 
 
 
 
 
 
 // ================================== 需要 auth认证 ==================================
 /**
  * @author: yangs
  * @query: /{owner}/{repo}/contents/{path}
  * @params {}
  * @description: 新建文件
  */
  export const _createNewFileOrUpdateFile = (params: undefined | object, query: any) => request.post(`/repos/${query.owner}/${query.repo}/contents/${query.path}`, params)
 