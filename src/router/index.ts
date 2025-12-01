import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

// Import ต้องตรงกับชื่อไฟล์จริง (case-sensitive)
import HomePage from '../views/homepage.vue';
import DetailPage from '../views/detailpage.vue';
import AddPage from '../views/addpage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home' // เส้นทางหลัก redirect ไป /home
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
  }
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;