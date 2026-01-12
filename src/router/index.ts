import { createRouter, createWebHistory, RouteRecordRaw } from '@ionic/vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

// Pages
import PostsPage from '../views/PostsPage.vue'
import CameraPage from '../views/CameraPage.vue'
import LocationPage from '../views/LocationPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainLayout,
    children: [
      // 👉 เปิดแอปมาเจอ CameraPage
      {
        path: '',
        redirect: '/camera'
      },

      // Camera Page
      {
        path: 'camera',
        name: 'Camera',
        component: CameraPage
      },

      // Location Page
      {
        path: 'location',
        name: 'Location',
        component: LocationPage
      },

      // Posts Page
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