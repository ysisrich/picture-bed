

import request from "../axios";

/**
 * baseURL：http://oss-cn-shenzhen.aliyuncs.com
 * 
 *
 */


// ================================== 不需要 auth认证 ==================================

/**
 * @author: yangs
 * @query: /oauth/tokens
 * @params {}
 * @description: 获取请求者拥有的所有Bucket
 */
 const getBucketList = (params: undefined | object, query: any) => request.get('', params)



// ================================== 需要 auth认证 ==================================
/**
 * @author: yangs
 * @query: /<bucket>/<path> 
 * @params {}
 * @description: 把文件上传至OSS
 */
 const createUpyunImageFile = (params: undefined | object, query: any) => request.put(`/${query.bucket}/${query.path}`, params)


 export default {
    getBucketList,
   createUpyunImageFile
 }