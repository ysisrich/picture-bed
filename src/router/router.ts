
import { RouteRecordRaw } from 'vue-router'

const Index = () => import('@/pages/Index.vue')


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta:{
      title:'图床'
    }
  },
]

export default routes



