<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="header-bar">
        <ion-title class="glow-text">🌌 Products</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding neon-background">
      <ion-list class="product-list">
        <ion-item
          v-for="product in products"
          :key="product.id"
          class="product-item"
        >
          <ion-thumbnail slot="start" class="neon-thumbnail">
            <img :src="product.image" :alt="product.name" />
          </ion-thumbnail>

          <ion-label class="product-info">
            <h2 class="product-name">{{ product.name }}</h2>
            <p class="product-desc">{{ product.description }}</p>
            <p class="price">${{ product.price }}</p>
          </ion-label>

          <ion-button class="neon-button" slot="end" @click="buyProduct(product)">
            Buy
          </ion-button>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonThumbnail,
  IonButton
} from '@ionic/vue'

const products = ref([
  { id: 1, name: 'Product 1', description: 'Description 1', price: 29.99, image: 'https://via.placeholder.com/100' },
  { id: 2, name: 'Product 2', description: 'Description 2', price: 39.99, image: 'https://via.placeholder.com/100' },
  { id: 3, name: 'Product 3', description: 'Description 3', price: 49.99, image: 'https://via.placeholder.com/100' }
])

const buyProduct = (product) => {
  console.log('Purchased:', product.name)
}
</script>

<style scoped>

/* --------------------
   พื้นหลัง + Header
-------------------- */
.neon-background {
  --background: #0a0f1c;
}

.header-bar {
  --background: #0d1326;
  border-bottom: 1px solid #00eaff70;
}

.glow-text {
  color: #00eaff;
  text-shadow: 0 0 12px #00eaff, 0 0 22px #00eaff;
}

/* --------------------
   รายการสินค้า
-------------------- */
.product-list {
  background: transparent;
}

.product-item {
  --background: #111826;
  margin-bottom: 18px;
  border-radius: 14px;
  border: 1px solid #00eaff60;
  box-shadow: 0 0 12px #00eaff30;
  backdrop-filter: blur(6px);
  transition: 0.2s;
}

.product-item:hover {
  transform: scale(1.02);
  box-shadow: 0 0 18px #00eaff80;
}

/* --------------------
    Thumbnail Neon
-------------------- */
.neon-thumbnail img {
  border-radius: 8px;
  box-shadow: 0 0 10px #00eaffaa;
}

/* --------------------
    Text Styles
-------------------- */
.product-info {
  color: white;
}

.product-name {
  font-size: 1.3rem;
  font-weight: 600;
  color: #00eaff;
  text-shadow: 0 0 6px #00eaff90;
}

.product-desc {
  opacity: 0.7;
}

.price {
  font-weight: bold;
  color: #00eaff;
  text-shadow: 0 0 10px #00eaff;
  font-size: 1.2rem;
}

/* --------------------
   ปุ่มเรืองแสง (Neon)
-------------------- */
.neon-button {
  --background: #00eaff;
  --color: #000;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 0 0 15px #00eaff, 0 0 30px #00eaff80;
  transition: 0.25s;
}

.neon-button:hover {
  transform: scale(1.08);
  box-shadow: 0 0 25px #00eaff, 0 0 50px #00eaff;
}
</style>
