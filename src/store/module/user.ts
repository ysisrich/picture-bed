/**
 * 用户登录信息 token auth
 */
//@ts-nocheck

import Cookie from "@/utils/Cookie";
import i18n from '@/lang/index'
import Api from "@/service/api";

import {Base64} from 'js-base64';
import Host from '../../../config/host'



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
  id: "user",
  // state: 返回对象的函数
  state: () => ({
    experienceNumber: Cookie.getCookie("experienceNumber") && Base64.decode(Cookie.getCookie("experienceNumber")) || 6,
    userType: Cookie.getCookie("token") ? 1 : 0, // 0 游客 1 账户
    repoType: Cookie.getCookie("repoType") || 'Github', // 仓库类型  默认Github  Gitee
    git:Cookie.getCookie("repoType") && service[Cookie.getCookie("repoType")],
    repoList:[]
  }),
  getters: {
    
  },
  actions: {
    // 上传
    upload(option){
      return new Promise((resolve,reject)=>{
        let query = {
          owner: this.git.repoInfo.owner,
          repo: this.git.repoInfo.repo,
          path: this.git.repoInfo.path ? this.git.repoInfo.path +'/' + option.path : option.path
        }
        let params = {
          message: 'Git图床提交',
          content: option.content
        }

        if(this.repoType === 'Github'){
          Api.createNewFileOrUpdateFile(params, query).then(res=>{
            if(res.status == 201){
              resolve(res)
            }
          })
        }
  
        if(this.repoType === 'Gitee'){
          Api._createNewFileOrUpdateFile(params, query).then(res=>{
            if(res.status == 201){
              resolve(res)
            }
          })
        }
      })
    },

    // 游客上传体验次数减少
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
    // 获取所有仓库信息
    getUserAllRepoInfo(){
      if(this.repoType === 'Github'){
        Api.getOauthAllRepo({type:'public'}).then(res=>{
          if(res.status == 200){
            this.repoList = res.data
          }
        })
      }

      if(this.repoType === 'Gitee'){
        Api._getOauthAllRepo({type:'public'}).then(res=>{
          if(res.status == 200){
            this.repoList = res.data
          }
        })
      }
    },

    // 确定上传仓库的路径
    handleRepoPath(option){
      let arr = option.split('/')
      const repoInfo :object = {
          owner: arr[0],
          repo: arr[1],
          path: arr.length > 2 && arr.splice(0, 2) && arr.join('/'),
      }
      console.log('repoInfo',repoInfo)

      this.git.repoInfo = repoInfo
    },
    // 获取仓库下的具体内容
    async getRepoContent(option){
      return new Promise((resolve)=>{
        let query = {
          owner: option.owner,
          repo: option.repo,
          path: option.path || '',
        }
        let params = {}
  
        if(this.repoType === 'Github'){
          Api.getOauthRepoDetailPathContent(params,query).then(res=>{
            if(res.status == 200){
              resolve(res)
            }
          })
        }
  
        if(this.repoType === 'Gitee'){
          Api._getOauthRepoDetailPathContent(params,query).then(res=>{
            if(res.status == 200){
              resolve(res)
            }
          })
        }
      })
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
        this.getUserAllRepoInfo()
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
                this.getUserAllRepoInfo()
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
                this.getUserAllRepoInfo()
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
