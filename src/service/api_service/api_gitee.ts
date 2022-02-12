
import request from "../axios";



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
  const _createNewFileOrUpdateFile = (params: undefined | object, query: any) => request.post(`/repos/${query.owner}/${query.repo}/contents/${query.path}`, params)
 
/**
  * @author: yangs
  * @query: /user
  * @params {}
  * @description: 获取授权用户的资料
  */
 const _getOauthUserInfo = (params: undefined | object, query: any) => request.get(`/user`, params)

 /**
  * @author: yangs
  * @query: /email
  * @params {}
  * @description: 获取授权用户的全部邮箱
  */
  const _getOauthUserEmail = (params: undefined | object, query: any) => request.get(`/email`, params)

  /**
  * @author: yangs
  * @query: /repos/{owner}/{repo}/contents(/{path})
  * @params {}
  * @description: 获取仓库具体路径下的内容
  */
   const _getOauthRepoDetailPathContent = (params: undefined | object, query: any) => request.get(`/repos/${query.owner}/${query.repo}/contents/${query.path}`, params)

  /**
  * @author: yangs
  * @query: /user/repos
  * @params {}
  * @description: 创建一个仓库
  */
  const _createOauthRepo = (params: undefined | object, query: any) => request.get(`/user/repos`, params)

  /**
  * @author: yangs
  * @query: /user/repos
  * @params {}
  * @description: 列出授权用户的所有仓库
  */
  const _getOauthAllRepo = (params: undefined | object, query: any) => request.get(`/user/repos`, params)

  /**
  * @author: yangs
  * @query: /repos/{owner}/{repo}/clear
  * @params {}
  * @description: 清空一个仓库
  */
    const _putOauthClearRepo = (params: undefined | object, query: any) => request.put(`/repos/${query.owner}/${query.repo}/clear`, params)

 
 
 export default {
    _createNewFileOrUpdateFile,
    _getOauthUserInfo,
    _getOauthUserEmail,
    _getOauthRepoDetailPathContent,
    _getOauthAllRepo,
    _putOauthClearRepo,
    _createOauthRepo
  }