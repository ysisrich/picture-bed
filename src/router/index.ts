import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import routes from './router'
import { useContent } from '@/store/index'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to,from,next) => {
  if(to.meta.title){
    const title:any = to.meta.title
    document.title = title
  }
  useContent().clear()
  next()
})

export default router