<template>
  <ion-page>
    <!-- Header -->
    <ion-header>
      <ion-toolbar class="header-bar">
        <!-- ชื่อ -->
        <ion-title class="glow-text">🔥LAWA IT SHOP</ion-title>

        <!-- Camera + Location -->
        <ion-buttons slot="end">
          <ion-button class="icon-btn" @click="goCamera">
            📷
          </ion-button>
          <ion-button class="icon-btn" @click="goLocation">
            📍
          </ion-button>
        </ion-buttons>

      </ion-toolbar>
    </ion-header>

    <!-- Content -->
    <ion-content class="ion-padding neon-background">

      <!-- Welcome -->
      <div class="welcome">
        <h2 class="welcome-title">LAWA IT SHOP🖥️</h2>
        <p class="welcome-sub">อุปกรณ์คอมพิวเตอร์ต่างๆ ✨</p>
      </div>

      <!-- Menu Cards -->
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-card button router-link="/product" class="neon-card">
              <ion-card-header>
                <ion-card-title class="card-title">🛒 สินค้า</ion-card-title>
              </ion-card-header>
              <ion-card-content class="card-content">
                เลือกดูสินค้า
              </ion-card-content>
            </ion-card>
          </ion-col>

          <ion-col size="6">
            <ion-card button router-link="/notes" class="neon-card">
              <ion-card-header>
                <ion-card-title class="card-title">📝 โน้ต</ion-card-title>
              </ion-card-header>
              <ion-card-content class="card-content">
                เขียนโน๊ตแจ้งปัญหา
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="12">
            <ion-card button router-link="/contact" class="neon-card">
              <ion-card-header>
                <ion-card-title class="card-title">📩 ติดต่อเรา</ion-card-title>
              </ion-card-header>
              <ion-card-content class="card-content">
                ติดต่อสอบถาม
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>

    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButtons,
  IonButton
} from '@ionic/vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const goCamera = () => {
  router.push('/camera')
}

const goLocation = () => {
  router.push('/location')
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

/* Logo */
.logo {
  height: 34px;
  margin-left: 8px;
}

/* Title */
.glow-text {
  color: #00eaff;
  font-weight: bold;
  text-shadow: 0 0 12px #00eaff, 0 0 24px #00eaff;
}

/* Icon buttons */
.icon-btn {
  --color: #00eaff;
  font-size: 18px;
  text-shadow: 0 0 6px #00eaffaa;
}

/* Welcome */
.welcome {
  text-align: center;
  margin-bottom: 24px;
}

.welcome-title {
  color: #00eaff;
  text-shadow: 0 0 12px #00eaffaa;
}

.welcome-sub {
  color: #c7d2fe;
}

/* Cards */
.neon-card {
  background: #111826;
  border: 1px solid #00eaff70;
  border-radius: 16px;
  box-shadow: 0 0 18px #00eaff40;
  transition: 0.25s;
  cursor: pointer;
}

.neon-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 0 30px #00eaff, 0 0 60px #00eaff80;
}

.card-title {
  color: #00eaff;
  text-shadow: 0 0 8px #00eaffaa;
}

.card-content {
  color: #e5e7eb;
}
</style>
