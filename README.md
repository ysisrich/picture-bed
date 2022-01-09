## 搭建 Github 或 npm 图床网站

## 一、使用 Github

### 前言

1. 存储图片服务器平台 Github 或 NPM
2. 加速 cdn `jsDeliver`工具
3. 网站站点 `gitee` `github` 个人服务器

### 技术选型

- [vue3](https://v3.cn.vuejs.org/) + [typescript](https://www.tslang.cn/index.html) + [vite](https://vitejs.cn/)
- [axios](http://www.axios-js.com/)
- [naive ui](https://www.naiveui.com)
- [vue-router](https://next.router.vuejs.org/zh/)
- [pinia](https://pinia.vuejs.org/)

### 上传图片配置需求

1. 配置 github 访问 token，即 Personal access tokens，后期才能调用 github 相应 API
2. 创建 github 仓库，名字随意，一定要设置为公开仓库

### 网站界面需求

- [ ] 明暗主题切换、语言切换（中英切换）
- [ ] 适配响应式设计（考虑 pc 和移动端之间）
- [ ] 配置按钮（access_token，用户名，仓库名）
- [ ] 图片上传框
- [ ] 链接访问框

<br/>

### 功能 API 需求

- [ ] 获取 github 个人信息
- [ ] 获取全部仓库列表
- [ ] 获取具体仓库信息
- [ ] 获取具体仓库下文件列表
- [ ] 向具体仓库上传文件
- [ ] 更新仓库具体文件
- [ ] 删除仓库具体文件
