
import { RouteRecordRaw } from 'vue-router'

const Index = () => import('@/pages/Index.vue')
const Login = () => import('@/pages/Login.vue')


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta:{
      title:'图床'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      title:'登录 - 图床'
    }
  },
]

export default routes



