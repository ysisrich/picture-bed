/*
* oss 账号仓库信息
*
* 开发环境配置 - dev
*/

import OSS from 'ali-oss';


const API_BaseUrl:string = '/api_oss';

// token 令牌 
const token:string = '';

// 阿里云  与 AccessKey Secret 验证

const auth:object = {
    AccessKeyId: "",
    AccessKeySecret: "",
}
 // 登录用户信息
const userInfo:object = {}

// 仓库信息 或 云存储信息
const repoInfo:object = {
    owner: "",
    repo: "",
    path: "",
}


// const oss_client = new OSS({
//     // yourRegion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
//     region: 'oss-cn-shenzhen',
//     // 从STS服务获取的临时访问密钥（AccessKey ID和AccessKey Secret）。
//     accessKeyId: '',
//     accessKeySecret: '',
//     // 从STS服务获取的安全令牌（SecurityToken）。
//     stsToken: '',
//     secure:true,
//     refreshSTSToken: async () => {
//     // 向您搭建的STS服务获取临时访问凭证。
//       const info = await fetch('your_sts_server');
//       return {
//         accessKeyId: info.accessKeyId,
//         accessKeySecret: info.accessKeySecret,
//         stsToken: info.stsToken
//       }
//     },
//     // 刷新临时访问凭证的时间间隔，单位为毫秒。
//     refreshSTSTokenInterval: 300000,
//     // 填写Bucket名称。
//     bucket: 'yangs1'
// });




export default {
    API_BaseUrl,
    token,
    auth,
    userInfo,
    repoInfo,
    // oss_client
}

