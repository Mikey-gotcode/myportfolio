import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/MainHome.vue'

const routes=[
  {
    path:'/',
    component:HomeView

  }
]


const router = createRouter({
  history: createWebHistory(),
  linkActiveClass:"active",
  routes
})

export default router
