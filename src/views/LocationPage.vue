<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>📍 ตำแหน่งปัจจุบัน (Geolocation)</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">

      <ion-button expand="block" @click="getCurrentLocation" :disabled="isLocating">
        <ion-spinner v-if="isLocating" name="crescent"></ion-spinner>
        {{ isLocating ? 'กำลังค้นหา...' : 'ค้นหาตำแหน่งปัจจุบัน' }}
      </ion-button>
      
      <ion-card class="ion-margin-top">
        <ion-card-header>
          <ion-card-title>พิกัดที่พบ</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list lines="none">
            <ion-item>
              <ion-label>
                <h3>ละติจูด (Latitude):</h3>
                <p>**{{ latitude || '---' }}**</p>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                <h3>ลองจิจูด (Longitude):</h3>
                <p>**{{ longitude || '---' }}**</p>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                <h3>ความแม่นยำ (Accuracy):</h3>
                <p>{{ accuracy ? `${accuracy} เมตร` : '---' }}</p>
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
      
      <ion-text color="warning" class="ion-padding" v-if="error">
        <p>⚠️ **ข้อผิดพลาด:** {{ error }}</p>
      </ion-text>
      
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Geolocation, Position } from '@capacitor/geolocation';
import { Capacitor } from '@capacitor/core';

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
  IonItem,
  IonLabel,
  IonList,
  IonSpinner,
  IonText
} from '@ionic/vue';

const latitude = ref<number | null>(null);
const longitude = ref<number | null>(null);
const accuracy = ref<number | null>(null);
const isLocating = ref(false);
const error = ref<string | null>(null);

const getCurrentLocation = async () => {
  isLocating.value = true;
  error.value = null;

  try {
    if (Capacitor.getPlatform() === 'web') {
      // ใช้ Web API บนเว็บ
      navigator.geolocation.getCurrentPosition(
        (position) => {
          latitude.value = position.coords.latitude;
          longitude.value = position.coords.longitude;
          accuracy.value = position.coords.accuracy;
          isLocating.value = false;
        },
        (err) => {
          error.value = err.message;
          isLocating.value = false;
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    } else {
      // ใช้ Capacitor Geolocation บนมือถือ
      const permission = await Geolocation.checkPermissions();
      if (permission.location !== 'granted') {
        const request = await Geolocation.requestPermissions();
        if (request.location !== 'granted') {
          throw new Error("ไม่ได้รับอนุญาตให้เข้าถึงตำแหน่ง (Permission Denied)");
        }
      }

      const position: Position = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 10000,
      });

      latitude.value = position.coords.latitude;
      longitude.value = position.coords.longitude;
      accuracy.value = position.coords.accuracy;
    }
  } catch (err: any) {
    console.error('Geolocation Error:', err);
    error.value = err.message || 'ไม่สามารถดึงตำแหน่งได้';
    isLocating.value = false;
  }
};
</script>