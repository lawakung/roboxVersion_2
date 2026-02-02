import { createRouter, createWebHistory } from '@ionic/vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', redirect: '/home' },

      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/core/homepage.vue')
      },

      {
        path: 'product',
        name: 'Product',
        component: () => import('@/views/core/product.vue')
      },

      {
        path: 'product/:id',
        name: 'ProductDetail',
        component: () => import('@/views/core/detailpage.vue'),
        props: true
      },

      {
        path: 'notes',
        name: 'Notes',
        component: () => import('@/views/NotePage.vue')
      },

      {
        path: 'add-note',
        name: 'AddNote',
        component: () => import('@/views/AddNotePage.vue')
      },

      {
        path: 'camera',
        name: 'Camera',
        component: () => import('@/views/CameraPage.vue')
      },

      {
        path: 'location',
        name: 'Location',
        component: () => import('@/views/LocationPage.vue')
      },

      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/views/core/contact.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
