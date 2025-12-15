<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>🌐 รายการโพสต์จาก API</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      
      <ion-toolbar v-if="isLoading">
        <ion-progress-bar type="indeterminate"></ion-progress-bar>
        <div class="ion-text-center ion-padding">กำลังโหลดข้อมูล...</div>
      </ion-toolbar>

      <ion-list v-if="posts.length > 0">
        <ion-list-header>แสดง {{ posts.length }} รายการ</ion-list-header>
        
        <ion-item v-for="post in posts" :key="post.id" lines="full">
          <ion-label>
            <h2>{{ post.title }}</h2>
            <p>{{ post.body.substring(0, 70) }}...</p>
          </ion-label>
          <ion-badge slot="end" color="primary">ID: {{ post.id }}</ion-badge>
        </ion-item>
        
      </ion-list>
      
      <ion-text color="danger" class="ion-padding" v-else-if="!isLoading && posts.length === 0">
        <p>⚠️ ไม่พบข้อมูล หรือเกิดข้อผิดพลาดในการเชื่อมต่อ API</p>
      </ion-text>
      
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
  IonBadge,
  IonProgressBar,
  IonText
} from '@ionic/vue';
import axios from 'axios'; // 1. Import Axios

// กำหนด Interface สำหรับโครงสร้างข้อมูลที่คาดหวัง
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// ตัวแปร Reactive สำหรับเก็บสถานะและข้อมูล
const posts = ref<Post[]>([]);
const isLoading = ref(false);
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// 2. ฟังก์ชันสำหรับเรียกข้อมูลจาก API
const fetchPosts = async () => {
    isLoading.value = true; // เริ่มโหลด
    try {
        // ใช้ axios.get เพื่อเรียก API
        const response = await axios.get<Post[]>(API_URL);
        
        // 3. นำข้อมูลที่ได้มาเก็บในตัวแปร posts
        posts.value = response.data;
        console.log('Data fetched successfully:', posts.value.length, 'posts');
        
    } catch (error) {
        // จัดการกับข้อผิดพลาดในการเรียก API
        console.error('Error fetching data from API:', error);
        alert('เกิดข้อผิดพลาดในการเชื่อมต่อ API');
    } finally {
        isLoading.value = false; // โหลดเสร็จสิ้น
    }
};

// 4. เรียกใช้ฟังก์ชัน fetchPosts เมื่อ Component ถูกสร้างขึ้น
onMounted(() => {
    fetchPosts();
});
</script>

<style scoped>
/* เพิ่ม style เล็กน้อยเพื่อความสวยงาม */
ion-list-header {
  margin-top: 15px;
}
</style>