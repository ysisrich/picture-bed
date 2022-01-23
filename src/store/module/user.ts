/**
 * 用户登录信息 token auth
 */
//@ts-nocheck

import Cookie from "@/utils/Cookie";
import i18n from '@/lang/index'
import Api from "@/service/api";


import Gitee from './gitee'
import Github from './github'
import upyun from './upyun'
import OSS from './oss'

const service = {
  Gitee,Github,upyun,OSS
}


export default {
  id: "userGlobalState",
  // state: 返回对象的函数
  state: () => ({
    experienceNumber: Cookie.getCookie("experienceNumber") || 6,
    userType: 0, // 0 游客 1 账户
    repoType: Cookie.getCookie("repoType") || 'Github', // 仓库类型  默认Github  Gitee
    git:Cookie.getCookie("repoType") && service[Cookie.getCookie("repoType")],
  }),
  getters: {},
  actions: {
    // 游客上传调用
    visitorUpload() {
      if (this.experienceNumber) {
        --this.experienceNumber;
        Cookie.setCookie("experienceNumber", this.experienceNumber,-1);
        window.$notification.success({
          title: i18n.global.t('message.uploadSuccess'),
          content: i18n.global.t('message.content', { time: this.experienceNumber }),
          duration: 10000,
        });
      }
    },
    // 切换仓库 gitee github 
    changeRepoType(repoType){
      Cookie.setCookie('repoType',repoType)
      this.git = service[repoType]
      this.repoType = repoType

      if(repoType == 'upyun'){
        
        Api.getUpyunToken(this.git.auth).then(res=>{
          console.log('upyun',res)
        })
      }
    },
    // 获取仓库详情
    async getUserRepositoryInfo() {
      return new Promise((resolve,reject)=>{
        Api.getUserRepositoryInfo({},this.git.repoInfo).then(res=>{
          if(res.status == 200){
            resolve(res)
          }else{
            reject(res)
          }
        })
      })
    },
    // 登录
    login(params) {
      console.log(params)
      const {loginType,repoType,expirationTime,token} = params
      if(loginType == 'token' && repoType == 'Github'){
        this.changeRepoType(repoType)
        this.git.token = token
        Api.getOauthUserInfo().then(res=>{
          console.log(res)
          if(res.status == 200){
            this.userType = 1
            this.git.userInfo = res.data
            Cookie.setCookie('token',token,expirationTime || 36500 )
            window.$message.success(i18n.global.t('login.loginSuccess'))
          }
        })
      }

      if(loginType == 'token' && repoType == 'Gitee'){
        this.changeRepoType(repoType)
        this.git.token = token
        Api._getOauthUserInfo().then(res=>{
          console.log(res)
          if(res.status == 200){
            this.userType = 1
            this.git.userInfo = res.data
            Cookie.setCookie('token',token,expirationTime || 36500 )
            window.$message.success(i18n.global.t('login.loginSuccess'))
          }
        })
      }
    },
  },
};
