<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>➕ เพิ่มสินค้าใหม่</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <h2>ฟอร์มเพิ่มสินค้า</h2>
      <p>หน้านี้ถูกนำทางมาแบบ Programmatic จากปุ่ม FAB ในหน้าหลัก</p>
      
      <form @submit.prevent="saveProduct">
        <ion-item>
          <ion-input
            v-model="productName"
            label="ชื่อสินค้า"
            label-placement="floating"
            required
          ></ion-input>
        </ion-item>

        <ion-item>
          <ion-input
            v-model.number="productPrice"
            label="ราคา"
            label-placement="floating"
            type="number"
            required
            min="0"
          ></ion-input>
        </ion-item>

        <ion-button type="submit" expand="block" class="ion-margin-top">
          บันทึกสินค้า
        </ion-button>
      </form>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  ref 
} from 'vue';

import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonItem,
  IonInput,
  IonButton
} from '@ionic/vue';

import { useRouter } from 'vue-router';

// reactive data สำหรับเก็บค่าฟอร์ม
const productName = ref('');
const productPrice = ref<number | null>(null);

const router = useRouter();

const saveProduct = () => {
  if (!productName.value || productPrice.value === null || productPrice.value < 0) {
    alert('กรุณากรอกชื่อสินค้าและราคาที่ถูกต้อง');
    return;
  }

  // ตัวอย่าง: แสดงข้อมูลใน console (แทนการบันทึกจริง)
  console.log('บันทึกสินค้า:', {
    name: productName.value,
    price: productPrice.value
  });

  // สมมติบันทึกสำเร็จแล้วให้กลับไปหน้าแรก หรือหน้ารายการสินค้า
  router.push('/homepage');
};
</script>