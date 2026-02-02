<template>
  <ion-page>
    <!-- Header -->
    <ion-header>
      <ion-toolbar class="header-bar">

        <!-- ปุ่มกลับ Home -->
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" class="icon-btn" />
        </ion-buttons>

        <ion-title class="glow-text">
          📍 ตำแหน่งปัจจุบัน
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Content -->
    <ion-content fullscreen class="ion-padding neon-background">

      <ion-button
        expand="block"
        class="neon-btn"
        @click="getCurrentLocation"
        :disabled="isLocating"
      >
        <ion-spinner v-if="isLocating" name="crescent" />
        <span v-else>ค้นหาตำแหน่งปัจจุบัน</span>
      </ion-button>
      
      <ion-card class="neon-card ion-margin-top">
        <ion-card-header>
          <ion-card-title class="card-title">
            พิกัดที่พบ
          </ion-card-title>
        </ion-card-header>

        <ion-card-content class="card-content">
          <ion-list lines="none">
            <ion-item class="neon-item">
              <ion-label>
                <h3>ละติจูด (Latitude)</h3>
                <p>{{ latitude ?? '---' }}</p>
              </ion-label>
            </ion-item>

            <ion-item class="neon-item">
              <ion-label>
                <h3>ลองจิจูด (Longitude)</h3>
                <p>{{ longitude ?? '---' }}</p>
              </ion-label>
            </ion-item>

            <ion-item class="neon-item">
              <ion-label>
                <h3>ความแม่นยำ (Accuracy)</h3>
                <p>{{ accuracy ? `${accuracy} เมตร` : '---' }}</p>
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
      
      <ion-text color="danger" v-if="error">
        <p>⚠️ {{ error }}</p>
      </ion-text>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Geolocation, Position } from '@capacitor/geolocation'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonList,
  IonSpinner,
  IonText
} from '@ionic/vue'

const latitude = ref<number | null>(null)
const longitude = ref<number | null>(null)
const accuracy = ref<number | null>(null)
const isLocating = ref(false)
const error = ref<string | null>(null)

const getCurrentLocation = async () => {
  isLocating.value = true
  error.value = null

  try {
    const permission = await Geolocation.checkPermissions()
    if (permission.location !== 'granted') {
      const req = await Geolocation.requestPermissions()
      if (req.location !== 'granted') {
        throw new Error('ไม่ได้รับอนุญาตให้เข้าถึงตำแหน่ง')
      }
    }

    const position: Position = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 10000
    })

    latitude.value = position.coords.latitude
    longitude.value = position.coords.longitude
    accuracy.value = position.coords.accuracy

  } catch (e) {
    error.value = (e as Error).message
  } finally {
    isLocating.value = false
  }
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

/* Icon */
.icon-btn {
  --color: #00eaff;
}

/* Button */
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

/* List item */
.neon-item {
  --background: transparent;
}

/* Text */
.card-title {
  color: #00eaff;
  text-shadow: 0 0 8px #00eaffaa;
}

.card-content {
  color: #e5e7eb;
}
</style>