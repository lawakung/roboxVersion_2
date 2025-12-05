import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

// Import View Components
import HomePage from '../views/homepage.vue';
import DetailPage from '../views/detailpage.vue';
import AddPage from '../views/addpage.vue';
import ProfilePage from '../views/ProfilePage.vue'; // ✅ เพิ่ม Import

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/profile'  // ✅ ตั้งให้เริ่มต้นที่หน้าโปรไฟล์
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/details/:id',
    name: 'details',
    component: DetailPage
  },
  {
    path: '/add',
    name: 'add',
    component: AddPage
  },
  {
    path: '/profile',       // ✅ เพิ่มหน้า ProfilePage
    name: 'profile',
    component: ProfilePage
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;