import { defineStore } from 'pinia'

import Cookie from '@/hooks/Cookie'

export const useStore = defineStore({
  // id: 必须的，在所有 Store 中唯一
  id: 'myGlobalState',
  // state: 返回对象的函数
  state: () => ({
    token: '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',
    auth:{
      username: 'ysisrich',
      password: '***************'
    },
	websiteConfig:{
		theme:Cookie.getCookie('theme') || 'dark',
		language:Cookie.getCookie('language') || 'chinese'
	}
  }),
  getters: {
    
  },
  actions: {
	// 改变 网站主题 语言
    changeConfig(params:{key:'',value:''}){
		const {key='',value=''} = params
		if(key != null && key != ''){
			this.websiteConfig[key] = value 
			Cookie.setCookie(key,value)
		}
	},
	
	// 登录
	login(){
		
	}
    
  },
})

