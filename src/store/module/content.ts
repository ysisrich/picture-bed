/**
 * 上传成功 data
 */
export default {
  id: "contentGlobalState",
  state: () => ({
    content: "",
  }),
  getters: {},
  actions: {
    setContent(params: {}) {
      // @ts-ignore
      this.content = params.content;
    },
  },
};
