import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import routes from './router'


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router