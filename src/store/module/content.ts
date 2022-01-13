//@ts-nocheck

/**
 * 上传成功 data
 */

export default {
  id: "contentGlobalState",
  state: () => ({
    content: "",
  }),
  getters: {
	  url(){
		  return this.content
	  },
	  html(){
		  return `<img src="${this.content}" />`
	  },
	  markdown(){
		  return `![](${this.content})`
	  },
    wxml(){
		  return `<image src="${this.content}" />`
	  }
  },
  actions: {
    setContent(params: {}) {
      // @ts-ignore
      this.content = params.content;
    },
  },
};
