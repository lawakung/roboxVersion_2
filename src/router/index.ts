import { createRouter, createWebHistory } from '@ionic/vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import PostsPage from '../views/PostsPage.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      // ✅ เปิดแอปมาเจอ DebugPage
      {
        path: '',
        redirect: '/debug'
      },

      // ✅ Debug Page (หน้าทดสอบ Bug)
      {
        path: 'debug',
        name: 'Debug',
        component: () => import('../views/DebugPage.vue')
      },

      // หน้า Posts
      {
        path: 'posts',
        name: 'Posts',
        component: PostsPage
      },

      // หน้าอื่น ๆ
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
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router