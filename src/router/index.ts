import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: () => HomePage
  },
  {
    path: '/newsDetail',
    name: 'newsDetail',
    component: () => import('../views/NewsDetail.vue')
  },
  {
    path: '/login',
    name: 'login',
    component : () => import('../views/LoginPage.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
