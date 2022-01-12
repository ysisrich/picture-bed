
/**
 * 用户登录信息 token auth 
 */
import Cookie from '@/hooks/Cookie'

export default {
  // id: 必须的，在所有 Store 中唯一
  id: 'userGlobalState',
  // state: 返回对象的函数
  state: () => ({
	experienceNumber:Cookie.getCookie('experienceNumber') || 3,
	userType:0, // 0 游客 1 登录
	token: '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',
	auth:{
	  username: 'ysisrich',
	  password: '***************'
	},
  }),
  getters: {
    
  },
  actions: {
	// 游客上传调用
	visitorUpload(){
		console.log('体验次数：',this.experienceNumber)
		if(this.experienceNumber){
			-- this.experienceNumber
			Cookie.setCookie('experienceNumber',this.experienceNumber)
		}
	},
    // 登录
	login(){
		
	}
  }
}