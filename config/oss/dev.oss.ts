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

// AccessKey ID
// LTAI5tCd6hHbnTNmeVra58cC
// AccessKey Secret
// JcnEhilKjBDow3cNjfzz7XBKydTp96

// AccessKey ID
// LTAI5t6cMZGgAvV2ogwcNwEA
// AccessKey Secret
// DIbLb3SI1t6KtLAYCIoGwivBfeAJsz

// AccessKey ID
// LTAI5tAKCJQ1JKyiUfRXPy4K
// AccessKey Secret
// irk5uch1SzYavZx5cl7U121JHzqxxB

// LTAI5t8ACBUENvTU5Jrk2cej
// Jo63towpIpgaJif7Jy0AQeLfG0Lr72

const auth:object = {
    AccessKeyId: "LTAI5t8ACBUENvTU5Jrk2cej",
    AccessKeySecret: "Jo63towpIpgaJif7Jy0AQeLfG0Lr72",
}
 // 登录用户信息
const userInfo:object = {}

// 仓库信息 或 云存储信息
const repoInfo:object = {
    owner: "",
    repo: "",
    path: "",
}


const oss_client = new OSS({
    // yourRegion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
    region: 'oss-cn-shenzhen',
    // 从STS服务获取的临时访问密钥（AccessKey ID和AccessKey Secret）。
    accessKeyId: 'LTAI5tAKCJQ1JKyiUfRXPy4K',
    accessKeySecret: 'irk5uch1SzYavZx5cl7U121JHzqxxB',
    // 从STS服务获取的安全令牌（SecurityToken）。
    stsToken: 'acs:ram::1821935163069864:role/aliyunosstokengeneratorrole',
    secure:true,
    refreshSTSToken: async () => {
    // 向您搭建的STS服务获取临时访问凭证。
      const info = await fetch('your_sts_server');
      return {
        accessKeyId: info.accessKeyId,
        accessKeySecret: info.accessKeySecret,
        stsToken: info.stsToken
      }
    },
    // 刷新临时访问凭证的时间间隔，单位为毫秒。
    refreshSTSTokenInterval: 300000,
    // 填写Bucket名称。
    bucket: 'yangs1'
});




export default {
    API_BaseUrl,
    token,
    auth,
    userInfo,
    repoInfo,
    oss_client
}

