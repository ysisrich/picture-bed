
import { RouteRecordRaw } from 'vue-router'

const Index = () => import('@/pages/Index.vue')
const Login = () => import('@/pages/Login.vue')
const User = () => import('@/pages/User.vue')


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
  {
    path: '/user',
    name: 'User',
    component: User,
    meta:{
      title:'个人资料 - 图床'
    }
  },
]

export default routes



