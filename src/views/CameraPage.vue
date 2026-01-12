<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>📸 การเข้าถึงกล้องถ่ายรูป</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding ion-text-center">
      
      <ion-button expand="block" class="ion-margin-top" @click="takePhoto">
        เปิดกล้องถ่ายภาพ
      </ion-button>
      
      <ion-card v-if="photoData.webPath" class="ion-margin-top">
        <ion-card-header>
          <ion-card-title>รูปภาพที่ถ่ายล่าสุด</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <img :src="photoData.webPath" alt="Captured Photo" class="captured-image"/>
          <p class="ion-text-wrap ion-margin-top">
            **รูปแบบ URI:** {{ photoData.format }}
          </p>
        </ion-card-content>
      </ion-card>
      
      <ion-text color="medium" v-else class="ion-margin-top">
        <p>กดปุ่มเพื่อเปิดกล้องและบันทึกรูปภาพ</p>
      </ion-text>
      
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonText
} from '@ionic/vue';

// ตัวแปร Reactive สำหรับเก็บข้อมูลรูปภาพที่ถ่าย
const photoData = ref<Partial<Photo>>({});

// ฟังก์ชันเปิดกล้องถ่ายรูป
const takePhoto = async () => {
  try {
    // 1. เรียกใช้ Camera.getPhoto
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri, // ส่งคืนเป็น URI เพื่อแสดงผล
      source: CameraSource.Camera,    // เปิดกล้อง (แทนที่จะเลือกจาก Gallery)
      quality: 90,                    // คุณภาพรูปภาพ 0-100
    });
    
    // 2. บันทึกข้อมูลรูปภาพที่ได้
    photoData.value = photo;
    console.log('Photo captured:', photo.webPath);
  } catch (error) {
    console.error('Error taking photo:', error);
    alert('ไม่สามารถเข้าถึงกล้องได้: ' + error);
  }
};
</script>

<style scoped>
.captured-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>