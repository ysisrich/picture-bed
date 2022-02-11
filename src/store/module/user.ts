/**
 * 用户登录信息 token auth
 */
//@ts-nocheck

import Cookie from "@/utils/Cookie";
import i18n from '@/lang/index'
import Api from "@/service/api";

import {Base64} from 'js-base64';
import Host from '../../../config/host'

import axios, { AxiosRequestConfig } from "axios";


// 当前环境 development production
const NODE_ENV:string = import.meta.env.VITE_NODE_ENV

const service = {}


if(NODE_ENV === 'development'){
  for (const key in Host) {
    service[key] = Host[key].dev
  }
}else if(NODE_ENV === 'production'){
  for (const key in Host) {
    service[key] = Host[key].build
  }
}

// btoa == Base64.encode 编码  atob == Base64.decode 解码

export default {
  id: "userGlobalState",
  // state: 返回对象的函数
  state: () => ({
    experienceNumber: Cookie.getCookie("experienceNumber") && Base64.decode(Cookie.getCookie("experienceNumber")) || 6,
    userType: Cookie.getCookie("token") ? 1 : 0, // 0 游客 1 账户
    repoType: Cookie.getCookie("repoType") || 'Github', // 仓库类型  默认Github  Gitee
    git:Cookie.getCookie("repoType") && service[Cookie.getCookie("repoType")],
  }),
  getters: {
    userInfo(){
      return this.git.userInfo || null
    }
  },
  actions: {
    // 游客上传调用
    visitorUpload() {
      if (this.experienceNumber) {
        --this.experienceNumber;
        Cookie.setCookie("experienceNumber", Base64.encode(this.experienceNumber),-1);
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

      if(repoType == 'Upyun'){
        Api.getUpyunToken(this.git.auth).then(res=>{
          console.log('upyun',res)
        })
      }

      if(repoType == 'OSS'){
        console.log('oss',this.git)
        this.git.oss_client.getACL('static')
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
    // 获取个人详情
    getUserInfo() {
      if(this.repoType === 'Github'){
        Api.getOauthUserInfo().then(res=>{
          if(res.status == 200){
            this.git.userInfo = res.data
          }
        })
      }

      if(this.repoType === 'Gitee'){
        Api.getOauthUserInfo().then(res=>{
          if(res.status == 200){
            this.git.userInfo = res.data
          }
        })
      }

    },

    // 判断是否登录
    getLocalstorageToken(){
      let token = Cookie.getCookie('token')
      if(token){
        this.git.token = Base64.decode(token.slice(0,token.length-1))
        this.getUserInfo()
      }
    },

    // 表单验证
    verify(params){
      const {loginType,token} = params
      if(loginType == 'token' && !token){
        window.$message.error(i18n.global.t('message.emptyToken'))
        return false
      }else{
        return true
      }
    },
    // 登录
    login(params) {
      return new Promise((resolve,reject)=>{
        const {loginType,repoType,expirationTime,token} = params
        if(this.verify(params)){
          if(loginType == 'token' && repoType == 'Github'){
            this.changeRepoType(repoType)
            this.git.token = token
            Api.getOauthUserInfo().then(res=>{
              console.log(res)
              if(res.status == 200){
                this.git.userInfo = res.data
                this.userType = 1
                Cookie.setCookie('token',Base64.encode(token) +'=',expirationTime || 36500 )
                window.$message.success(i18n.global.t('login.loginSuccess'))
                resolve(true)
              }
            })
          }

          if(loginType == 'token' && repoType == 'Gitee'){
            this.changeRepoType(repoType)
            this.git.token = token
            Api._getOauthUserInfo().then(res=>{
              console.log(res)
              if(res.status == 200){
                this.git.userInfo = res.data
                this.userType = 1
                Cookie.setCookie('token',Base64.encode(token) +'=',expirationTime || 36500 )
                window.$message.success(i18n.global.t('login.loginSuccess'))
                resolve(true)
              }
            })
          }
        }
      })
    },

    // 退出
    exit(){
      Cookie.clearCookie('token')
      this.userType = 0
      this.git.userInfo = {}
    }
  },
};
