<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>🏠 สินค้าทั้งหมด</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-list-header>รายการสินค้าแนะนำ</ion-list-header>
        
        <ion-item 
          v-for="product in products" 
          :key="product.id"
          :router-link="`/details/${product.id}`" 
          detail
        >
          <ion-label>
            <h2>{{ product.name }}</h2>
            <p>ราคา: {{ product.price.toLocaleString() }} บาท</p>
          </ion-label>
        </ion-item>
        
      </ion-list>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="goToAddPage">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
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
  IonFab,
  IonFabButton,
  IonIcon
} from '@ionic/vue';
import { add } from 'ionicons/icons';
import { useRouter } from 'vue-router';

// ข้อมูลสินค้าจำลอง
const products = [
  { id: 101, name: 'สมาร์ทโฟนรุ่น XYZ', price: 15900 },
  { id: 102, name: 'หูฟังบลูทูธ', price: 2500 },
  { id: 103, name: 'สายชาร์จเร็ว', price: 499 }
];

const router = useRouter();

// ฟังก์ชันนำทางแบบ Programmatic ไปยังหน้าเพิ่มสินค้า
const goToAddPage = () => {
  console.log('Navigating to Add Product page');
  router.push('/add');
};
</script>

<style scoped>
/* ใส่ CSS ตามต้องการ */
</style>