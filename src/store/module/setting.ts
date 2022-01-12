
/**
 * 网站设置 主题 语言
 */
import Cookie from '@/hooks/Cookie'

export default {
  // id: 必须的，在所有 Store 中唯一
  id: 'websiteSettingGlobalState',
  // state: 返回对象的函数
  state: () => ({
	theme:Cookie.getCookie('theme') || 'dark',
	language:Cookie.getCookie('language') || 'chinese'
  }),
  getters: {
    
  },
  actions: {
	// 改变 网站主题 语言
    changeConfig(params:{key:'',value:''}){
		const {key='',value=''} = params
		if(key != null && key != ''){
      // @ts-ignore
			this[key] = value 
			Cookie.setCookie(key,value)
		}
	},
  }
}