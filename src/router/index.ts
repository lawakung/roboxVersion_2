import { createRouter, createWebHistory } from '@ionic/vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import PostsPage from '../views/PostsPage.vue' // ✅ เพิ่ม import

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        redirect: '/posts' // ✅ ให้เปิดแอปมาเจอหน้า Posts ก่อน
      },
      {
        path: 'posts',
        name: 'Posts',
        component: PostsPage
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
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
