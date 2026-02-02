<template>
  <ion-page>
    <!-- Header -->
    <ion-header>
      <ion-toolbar class="header-bar">
        <ion-buttons slot="start">
          <ion-back-button default-href="/product" />
        </ion-buttons>
        <ion-title class="glow-text">รายละเอียดสินค้า</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Content -->
    <ion-content class="ion-padding neon-background" v-if="product">
      <ion-card class="neon-card">
        <img :src="product.image" />

        <ion-card-header>
          <ion-card-title class="product-title">
            {{ product.name }}
          </ion-card-title>
          <ion-card-subtitle class="price">
            {{ product.price }} บาท
          </ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <p class="description">{{ product.description }}</p>

          <ion-button expand="block" class="neon-button">
            🛒 เพิ่มลงตะกร้า
          </ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>

    <ion-content v-else class="ion-padding neon-background">
      <p class="not-found">ไม่พบสินค้า</p>
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
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton
} from '@ionic/vue'

import { useRoute } from 'vue-router'
import { computed } from 'vue'

// 🔹 ข้อมูลสินค้า (4 ชิ้น)
const products = [
  {
    id: 1,
    name: 'เมาส์เกมมิ่ง RGB',
    price: 590,
    image: 'https://image.made-in-china.com/202f0j00ocebFOkCpAqT/T-Wolf-G590-USB-Wired-Gaming-Mouse-RGB-Light-800-7200dpi-ABS-Computer-Laptop-Mice.webp',
    description: 'เมาส์เกมมิ่ง RGB ปรับ DPI ได้ คลิกแม่น เหมาะสำหรับสายเกม'
  },
  {
    id: 2,
    name: 'คีย์บอร์ด Mechanical',
    price: 1290,
    image: 'https://ihcupload.s3.ap-southeast-1.amazonaws.com/article/173133334067320cdc73c0f.jpeg',
    description: 'คีย์บอร์ด Mechanical ไฟ RGB สวิตช์แน่น พิมพ์มันสะใจ'
  },
  {
    id: 3,
    name: 'หูฟัง Marshall Monitor III A.N.C Black',
    price: 890,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRkHnZdvRBDzRjFzqayBqP-bi6XwJzpyGwT4WIDEeY6B_VKsbFvF0R-NQXDexlAaM2jfy6uTe-JsbLC1x1x92-RJo0D2M9PDizPvQBQei5rRJRTdwkJicbVqA',
    description: 'หูฟังเกมมิ่ง เสียงรอบทิศ ไมค์ชัด ใส่สบาย'
  },
  {
    id: 4,
    name: 'NVIDIA GeForce RTX 5090',
    price: 350,
    image: 'https://images.droidsans.com/wp-content/uploads/2024/09/RTX5090-HERO-1-1536x799-1-1024x533.jpg',
    description: 'แผ่นรองเมาส์ขนาดใหญ่ ผิวลื่น คุมเมาส์ได้ดี'
  }
]

const route = useRoute()

// ⭐ ใช้ == เพื่อกัน string/number
const product = computed(() =>
  products.find(p => p.id == route.params.id)
)
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
  text-shadow: 0 0 12px #00eaff, 0 0 24px #00eaff80;
  font-weight: bold;
}

/* Card */
.neon-card {
  background: #0d1326;
  border: 1px solid #00eaff80;
  border-radius: 18px;
  box-shadow: 0 0 25px #00eaff40;
  color: #e5faff;
}

/* Product title */
.product-title {
  color: #00eaff;
  font-size: 22px;
  text-shadow: 0 0 10px #00eaff, 0 0 25px #00eaff80;
}

/* Price */
.price {
  color: #38bdf8;
  font-size: 18px;
  text-shadow: 0 0 8px #38bdf8aa;
}

/* Description */
.description {
  color: #c7f3ff;
  text-shadow: 0 0 6px #00eaff55;
  line-height: 1.6;
  margin-bottom: 16px;
}

/* Button */
.neon-button {
  --background: #00eaff;
  --color: #000;
  font-weight: bold;
  border-radius: 14px;
  box-shadow: 0 0 15px #00eaff, 0 0 40px #00eaff80;
  transition: 0.25s;
}

.neon-button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px #00eaff, 0 0 60px #00eaff;
}

/* Image */
img {
  width: 100%;
  object-fit: cover;
  border-bottom: 1px solid #00eaff70;
}

/* Not found */
.not-found {
  color: #00eaff;
  text-align: center;
  text-shadow: 0 0 10px #00eaff;
}
</style>
