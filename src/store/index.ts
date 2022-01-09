import { defineStore } from 'pinia'

export const useStore = defineStore({
  // id: 必须的，在所有 Store 中唯一
  id: 'myGlobalState',
  // state: 返回对象的函数
  state: () => ({
    token: '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',
    auth:{
      username: 'ysisrich',
      password: 'YANGSONG88347600'
    }
  }),
  getters: {
    
  },
  actions: {
    
    
  },
})

