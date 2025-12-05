<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>🏠 สินค้าทั้งหมด</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="toggleDarkMode">
            {{ isDarkMode ? 'ปิดโหมดมืด' : 'เปิดโหมดมืด' }}
          </ion-button>
          <ion-button router-link="/profile">
            โปรไฟล์
          </ion-button>
        </ion-buttons>
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

      <!-- FAB Button ไป Add Page -->
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="goToAddPage">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Preferences } from '@capacitor/preferences';
import { 
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, 
  IonLabel, IonListHeader, IonFab, IonFabButton, IonIcon, IonButton, IonButtons 
} from '@ionic/vue';
import { add } from 'ionicons/icons';

const router = useRouter();

// สินค้าจำลอง
const products = [
  { id: 101, name: 'สมาร์ทโฟนรุ่น XYZ', price: 15900 },
  { id: 102, name: 'หูฟังบลูทูธ', price: 2500 },
  { id: 103, name: 'สายชาร์จเร็ว', price: 499 }
];

// Dark Mode
const isDarkMode = ref(false);

const loadDarkMode = async () => {
  const { value } = await Preferences.get({ key: 'darkModeState' });
  isDarkMode.value = value === 'true';
  document.body.classList.toggle('dark', isDarkMode.value);
};

const toggleDarkMode = async () => {
  isDarkMode.value = !isDarkMode.value;
  document.body.classList.toggle('dark', isDarkMode.value);

  await Preferences.set({
    key: 'darkModeState',
    value: isDarkMode.value.toString(),
  });
};

const goToAddPage = () => {
  router.push('/add');
};

onMounted(loadDarkMode);
</script>