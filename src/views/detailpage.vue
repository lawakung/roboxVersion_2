<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>📝 รายละเอียดสินค้า</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      
      <h2>รายละเอียดสำหรับสินค้า ID: **{{ productId }}**</h2>
      <p>นี่คือข้อมูลรายละเอียดของสินค้าที่ถูกเรียกผ่าน Dynamic Route Parameter</p>
      
      <ion-card>
        <ion-card-header>
          <ion-card-title>Product ID</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          **{{ productId }}**
        </ion-card-content>
      </ion-card>
      
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
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/vue';
import { useRoute } from 'vue-router'; // ใช้งานเพื่อเข้าถึง Route Parameter

const route = useRoute();
const productId = route.params.id;
</script>
