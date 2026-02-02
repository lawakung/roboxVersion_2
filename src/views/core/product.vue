<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="header-bar">
        <!-- Back to Home -->
   <ion-buttons slot="start">
  <ion-button
    router-link="/home"
    fill="clear"
    class="back-btn"
  >
    ⬅ Home
  </ion-button>
</ion-buttons>

        <ion-title class="glow-text">🛒 สินค้า</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen class="ion-padding neon-background">
      <ion-grid>
        <ion-row>
          <ion-col
            size="6"
            v-for="product in products"
            :key="product.id"
          >
            <ion-card class="product-card neon">
              <ion-img :src="product.image" />

              <ion-card-content>
                <h3 class="name">{{ product.name }}</h3>
                <p class="price">฿{{ product.price }}</p>

                <ion-button
                  size="small"
                  expand="block"
                  class="neon-button"
                  @click="goToDetail(product.id)"
                >
                  ดูรายละเอียด
                </ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
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
  IonCardContent,
  IonButton,
  IonImg,
  IonButtons,
  IonBackButton
} from '@ionic/vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const products = [
  {
    id: 1,
    name: 'เมาส์เกมมิ่ง RGB',
    price: 590,
    image: 'https://image.made-in-china.com/202f0j00ocebFOkCpAqT/T-Wolf-G590-USB-Wired-Gaming-Mouse-RGB-Light-800-7200dpi-ABS-Computer-Laptop-Mice.webp'
  },
  {
    id: 2,
    name: 'คีย์บอร์ด Mechanical',
    price: 1250,
    image: 'https://ihcupload.s3.ap-southeast-1.amazonaws.com/article/173133334067320cdc73c0f.jpeg'
  },
  {
    id: 3,
    name: 'หูฟัง Marshall Monitor III A.N.C Black',
    price: 3200,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRkHnZdvRBDzRjFzqayBqP-bi6XwJzpyGwT4WIDEeY6B_VKsbFvF0R-NQXDexlAaM2jfy6uTe-JsbLC1x1x92-RJo0D2M9PDizPvQBQei5rRJRTdwkJicbVqA'
  },
  {
    id: 4,
    name: 'NVIDIA GeForce RTX 5090',
    price: 1290,
    image: 'https://images.droidsans.com/wp-content/uploads/2024/09/RTX5090-HERO-1-1536x799-1-1024x533.jpg'
  }
]

const goToDetail = (id: number) => {
  router.push(`/product/${id}`)
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

.glow-text {
  color: #00eaff;
  text-shadow: 0 0 12px #00eaff, 0 0 24px #00eaff;
  font-weight: bold;
}

/* Back button */
.back-btn {
  --color: #00eaff;
  text-shadow: 0 0 6px #00eaffaa;
}

/* Card */
.product-card {
  background: #111826;
  border-radius: 16px;
  overflow: hidden;
  transition: 0.25s;
}

.neon {
  box-shadow: 0 0 18px #00eaff40;
}

.product-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 0 30px #00eaff, 0 0 60px #00eaff80;
}

ion-img {
  height: 110px;
  object-fit: cover;
}

/* Text */
.name {
  font-size: 14px;
  font-weight: 600;
  color: #e5e7eb;
  margin-bottom: 4px;
}

.price {
  font-size: 14px;
  color: #00eaff;
  text-shadow: 0 0 6px #00eaff;
  margin-bottom: 8px;
}

/* Button */
.neon-button {
  --background: transparent;
  --color: #00eaff;
  border: 1px solid #00eaff;
  border-radius: 10px;
  text-shadow: 0 0 6px #00eaff;
  box-shadow: 0 0 12px #00eaff70;
}
</style>
