
/**
 * 网站设置 主题 语言
 */
import Cookie from '@/utils/Cookie'

export default {
  id: 'websiteSetting',
  // state: 返回对象的函数
  state: () => ({
      theme:Cookie.getCookie('theme') || 'dark',
      language:Cookie.getCookie('language') || 'zh'
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