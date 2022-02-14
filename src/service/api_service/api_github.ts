
import request from "../axios";

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
 const getUserGithubInfo = (params: undefined | object, query: any) => request.get(`/users/${query.username}`, params)

/**
 * @author: yangs
 * @query: /repos/{owner}/{repo}
 * @params {}
 * @description: 获取用户某个存储库的详细信息
 */
const getUserRepositoryInfo = (params: undefined | object, query: any) => request.get(`/repos/${query.owner}/${query.repo}`, params)

/**
 * @author: yangs
 * @query: /users/{owner}/repos
 * @params {}
 * @description: 获取用户所有存储库的详细信息（公开的）
 */
 const getUserAllRepositoryInfo = (params: undefined | object, query: any) => request.get(`/users/${query.owner}/repos`, params)





// ================================== 需要 auth认证 ==================================
/**
 * @author: yangs
 * @query: /user/repos
 * @params {}
 * @description: 列出经过身份验证的用户的存储库 (包括私有和公有仓库)
 */
 const getOauthAllRepo = (params: undefined | object, query: any) => request.get(`/user/repos`, params)

 /**
 * @author: yangs
 * @query: /user/repos
 * @params {}
 * @description: 为经过身份验证的用户创建存储库
 */
  const createOauthRepo = (params: undefined | object, query: any) => request.post(`/user/repos`, params)

 /** 
 * @author: yangs
 * @query: /repos/{owner}/{repo}
 * @params {}
 * @description: 删除存储库
 */
 const deleteRepo = (params: undefined | object, query: any) => request.delete(`/repos/${query.owner}/${query.repo}`, params)

 /**
 * @author: yangs
 * @query:  /repos/{owner}/{repo}/contents/{path}
 * @params {}
 * @description: 创建新文件或替换存储库中的现有文件
 */
  const createNewFileOrUpdateFile = (params: undefined | object, query: any) => request.put(`/repos/${query.owner}/${query.repo}/contents/${query.path}`, params)

  /**
 * @author: yangs
 * @query:  /repos/{owner}/{repo}/contents/{path}
 * @params {}
 * @description: 删除存储库中的文件
 */
   const deleteFile = (params: undefined | object, query: any) => request.delete(`/repos/${query.owner}/${query.repo}/contents/${query.path}`, params)

  /**
 * @author: yangs
 * @query:  /repos/{owner}/{repo}/contents/{path} 
 * @params {}
 * @description: 获取存储库中文件或目录的内容
 */
  const getOauthRepoDetailPathContent = (params: undefined | object, query: any) => request.get(`/repos/${query.owner}/${query.repo}/contents/${query.path}`, params)

/**
  * @author: yangs
  * @query: /user
  * @params {}
  * @description: 获取授权用户的资料
  */
 const getOauthUserInfo = (params: undefined | object, query: any) => request.get(`/user`, params)
 




 export default {
    getUserGithubInfo,
    getUserRepositoryInfo,
    getUserAllRepositoryInfo,
    getOauthAllRepo,
    createNewFileOrUpdateFile,
    getOauthUserInfo,
    createOauthRepo,
    getOauthRepoDetailPathContent
 }