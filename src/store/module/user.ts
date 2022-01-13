/**
 * 用户登录信息 token auth
 */
      //@ts-nocheck

import Cookie from "@/hooks/Cookie";
import { getUserRepositoryInfo } from "@/service/api";

import github from './github'
import gitee from './gitee'


export default {
  id: "userGlobalState",
  // state: 返回对象的函数
  state: () => ({
    experienceNumber: Cookie.getCookie("experienceNumber") || 3,
    userType: 0, // 0 游客 1 账户
    // token: "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",
    // auth: {
    //   username: "YsisNo1",
    //   password: "***************",
    // },
    // userInfo: {},
    // repoInfo: {
    //   owner: "YsisNo1",
    //   repo: "static",
    //   path: "",
    // },
	repoType:0, // 仓库类型 0 github 1 gitee
	git:github
  }),
  getters: {},
  actions: {
    // 游客上传调用
    visitorUpload() {
      if (this.experienceNumber) {
        --this.experienceNumber;
        Cookie.setCookie("experienceNumber", this.experienceNumber);
        window.$notification.success({
          title: "上传成功！",
          content: `你当前还有${this.experienceNumber}次体验上传图片！！！`,
          duration: 10000,
        });
      }
    },
	// 切换仓库 gitee github 
	changeRepoType(){
		if(this.repoType == 0){
			this.git = gitee
		}else{
			this.git = github
		}
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
