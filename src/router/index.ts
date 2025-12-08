import { createRouter, createWebHistory } from '@ionic/vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: 'home',
        component: () => import('../views/core/homepage.vue')
      },
      {
        path: 'product',
        component: () => import('../views/core/product.vue')
      },
      {
        path: 'contact',
        component: () => import('../views/core/contact.vue')
      }
    ]
  },
 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router