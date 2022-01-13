/**
 * 用户登录信息 token auth
 */
//@ts-nocheck

import Cookie from "@/hooks/Cookie";
import { getUserRepositoryInfo } from "@/service/api";

import Gitee from './gitee'
import Github from './github'


export default {
  id: "userGlobalState",
  // state: 返回对象的函数
  state: () => ({
    experienceNumber: Cookie.getCookie("experienceNumber") || 6,
    userType: 0, // 0 游客 1 账户
    repoType: Cookie.getCookie("repoType") || 'Github', // 仓库类型  默认Github  Gitee
    git:Cookie.getCookie("repoType") == 'Github' ? Github : Gitee
  }),
  getters: {},
  actions: {
    // 游客上传调用
    visitorUpload() {
      if (this.experienceNumber) {
        --this.experienceNumber;
        Cookie.setCookie("experienceNumber", this.experienceNumber,-1);
        window.$notification.success({
          title: "上传成功！",
          content: `你今日还有${this.experienceNumber}次体验上传图片！！！`,
          duration: 10000,
        });
      }
    },
    // 切换仓库 gitee github 
    changeRepoType(){
      Cookie.setCookie('repoType',Cookie.getCookie('repoType') == 'Github' ? 'Gitee' :'Github')
      this.git = Cookie.getCookie("repoType") == 'Github' ? Github : Gitee
      this.repoType = Cookie.getCookie("repoType")
    },
    // 登录
    login() {},
    // 获取仓库详情
    async getUserRepositoryInfo() {
      return new Promise((resolve,reject)=>{
        getUserRepositoryInfo({},this.git.repoInfo).then(res=>{
          if(res.status == 200){
            resolve(res)
          }else{
            reject(res)
          }
        })
      })
    },
  },
};
