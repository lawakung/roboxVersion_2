<template>
  <ion-page class="dark-bg">
    <ion-header>
      <ion-toolbar class="toolbar">
        <ion-title class="title">สินค้า</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen class="ion-padding">

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
                  class="btn-neon"
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
  IonImg
} from '@ionic/vue';

import { useRouter } from 'vue-router';

const router = useRouter();

const products = [
  { id: 1, name: 'หูฟัง X100', price: 1590, image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f' },
  { id: 2, name: 'เมาส์ RGB', price: 890, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3' },
  { id: 3, name: 'คีย์บอร์ด', price: 1990, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8' },
  { id: 4, name: 'ลำโพง', price: 1290, image: 'https://images.unsplash.com/photo-1585386959984-a4155228f1a2' }
];

const goToDetail = (id: number) => {
  router.push(`/product/${id}`);
};
</script>

<style scoped>
/* พื้นหลังดำสนิท */
.dark-bg {
  --background: #000000;
}

/* Toolbar */
.toolbar {
  --background: #000000;
  border-bottom: 1px solid #0ff;
}

.title {
  color: #38bdf8;
  text-shadow: 0 0 8px #38bdf8;
  font-weight: bold;
}

/* Card Neon */
.product-card {
  background: #020617;
  border-radius: 14px;
  overflow: hidden;
}

.neon {
  box-shadow:
    0 0 8px rgba(56,189,248,0.6),
    0 0 20px rgba(56,189,248,0.4);
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
  color: #38bdf8;
  text-shadow: 0 0 6px #38bdf8;
  margin-bottom: 8px;
}

/* Neon Button */
.btn-neon {
  --background: transparent;
  --color: #38bdf8;
  border: 1px solid #38bdf8;
  border-radius: 10px;
  text-shadow: 0 0 6px #38bdf8;
  box-shadow: 0 0 10px rgba(56,189,248,0.6);
}
</style>
