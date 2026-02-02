<template>
  <ion-page>
    <!-- Header -->
    <ion-header>
      <ion-toolbar class="header-bar">

        <!-- ปุ่มกลับ Home -->
        <ion-buttons slot="start">
          <ion-button class="icon-btn" @click="goHome">
            ⬅ Home
          </ion-button>
        </ion-buttons>

        <ion-title class="glow-text">📸 กล้องถ่ายรูป</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Content -->
    <ion-content
      fullscreen
      class="ion-padding neon-background ion-text-center"
    >
      <!-- ปุ่มเปิดกล้อง -->
      <ion-button
        expand="block"
        class="neon-btn ion-margin-top"
        @click="takePhoto"
      >
        เปิดกล้องถ่ายภาพ
      </ion-button>

      <!-- แสดงรูป -->
      <ion-card
        v-if="photoData.webPath"
        class="neon-card ion-margin-top"
      >
        <ion-card-header>
          <ion-card-title class="card-title">
            รูปภาพที่ถ่ายล่าสุด
          </ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <img
            :src="photoData.webPath"
            alt="Captured Photo"
            class="captured-image"
          />

          <p class="ion-text-wrap ion-margin-top card-content">
            รูปแบบไฟล์: {{ photoData.format }}
          </p>

          <!-- ปุ่มลบรูป -->
          <ion-button
            expand="block"
            color="danger"
            fill="outline"
            class="ion-margin-top"
            @click="deletePhoto"
          >
            🗑️ ลบรูปภาพ
          </ion-button>
        </ion-card-content>
      </ion-card>

      <!-- ยังไม่มีรูป -->
      <ion-text v-else class="ion-margin-top">
        <p class="card-content">
          กดปุ่มเพื่อเปิดกล้องและบันทึกรูปภาพ
        </p>
      </ion-text>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo
} from '@capacitor/camera'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonText
} from '@ionic/vue'

/* Router */
const router = useRouter()
const goHome = () => {
  router.push('/home')
}

/* State */
const photoData = ref<Partial<Photo>>({})

/* Open camera */
const takePhoto = async () => {
  try {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 90
    })

    photoData.value = photo
  } catch (err) {
    console.error(err)
    alert('ไม่สามารถเปิดกล้องได้')
  }
}

/* Delete photo */
const deletePhoto = () => {
  photoData.value = {}
}
</script>

<style scoped>
/* Background */
.neon-background {
  --background: #0a0f1c;
}

/* Header */
.header-bar {
  --background: #0d1326;
  border-bottom: 1px solid #00eaff80;
}

/* Title */
.glow-text {
  color: #00eaff;
  font-weight: bold;
  text-shadow: 0 0 12px #00eaff, 0 0 24px #00eaff;
}

/* Icon Button */
.icon-btn {
  --color: #00eaff;
  font-size: 16px;
  text-shadow: 0 0 6px #00eaffaa;
}

/* Neon Button */
.neon-btn {
  --background: #00eaff;
  --color: #001018;
  font-weight: bold;
  box-shadow: 0 0 18px #00eaffaa;
}

/* Card */
.neon-card {
  background: #111826;
  border: 1px solid #00eaff70;
  border-radius: 16px;
  box-shadow: 0 0 18px #00eaff40;
}

/* Text */
.card-title {
  color: #00eaff;
  text-shadow: 0 0 8px #00eaffaa;
}

.card-content {
  color: #e5e7eb;
}

/* Image */
.captured-image {
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0 0 20px #00eaff80;
}
</style>