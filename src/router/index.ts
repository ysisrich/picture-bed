import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import routes from './router'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to,from,next) => {
  if(to.meta.title){
    const title:any = to.meta.title
    document.title = title
  }
  next()
})

export default router