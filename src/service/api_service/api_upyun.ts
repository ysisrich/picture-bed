

import request from "../axios";

/**
 * baseURL：http://v0.api.upyun.com
 * 
 *
 */


// ================================== 不需要 auth认证 ==================================

/**
 * @author: yangs
 * @query: /oauth/tokens
 * @params {}
 * @description: 创建 TOKEN
 */
 const getUpyunToken = (params: undefined | object, query: any) => request.post(`/oauth/tokens`, params)



// ================================== 需要 auth认证 ==================================
/**
 * @author: yangs
 * @query: /<bucket>/<path> 
 * @params {}
 * @description: 把文件上传至又拍云存储
 */
 const createUpyunImageFile = (params: undefined | object, query: any) => request.put(`/${query.bucket}/${query.path}`, params)


 export default {
   getUpyunToken,
   createUpyunImageFile
 }