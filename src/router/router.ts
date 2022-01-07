
import { RouteRecordRaw } from 'vue-router'

const Index = () => import('@/pages/Index.vue')



const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: Index, // 注意这里要带上 文件后缀.vue
  },
]

export default routes



