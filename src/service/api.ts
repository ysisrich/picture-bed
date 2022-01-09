
import request from "./axios";


/**
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