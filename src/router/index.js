import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/task',
      name: 'task',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TaskView.vue')
    },
    {
      path: '/Wishlist',
      name: 'Wishlist',
      component: () => import('../views/WishlistView.vue')
    },
    {
      path: '/Work',
      name: 'Work',
      component: () => import('../views/WorkView.vue')
    },
    {
      path: '/College',
      name: 'College',
      component: () => import('../views/CollegeView.vue')
    },
    {
      path: '/Daily',
      name: 'Daily',
      component: () => import('../views/DailyView.vue')
    },
  ]
})

export default router
