<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="header-bar">
        <ion-title class="glow-text">🏠 Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding neon-background">

      <h2 class="section-title">✨ Products</h2>

      <ion-list class="product-list">
        <ion-item 
          v-for="product in products" 
          :key="product.id" 
          class="product-item"
        >
          <ion-label class="product-text">
            {{ product.name }}  
            <strong class="price">$ {{ product.price }}</strong>
          </ion-label>
        </ion-item>
      </ion-list>

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
  IonList,
  IonItem,
  IonLabel
} from '@ionic/vue'

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 }
]
</script>

<style scoped>

/* ----------------------------------------------------
   พื้นหลังแบบดำ + แสงสีฟ้า
---------------------------------------------------- */
.neon-background {
  --background: #0a0f1c;
}

/* ----------------------------------------------------
   Header เรืองแสงฟ้า
---------------------------------------------------- */
.header-bar {
  --background: #0d1326;
  border-bottom: 1px solid #00eaff80;
}

.glow-text {
  color: #00eaff;
  text-shadow: 0 0 15px #00eaff, 0 0 25px #00eaff;
}

/* ----------------------------------------------------
   Section Title
---------------------------------------------------- */
.section-title {
  color: #00eaff;
  text-shadow: 0 0 10px #00eaffaa;
  margin-bottom: 15px;
}

/* ----------------------------------------------------
   List Neon Style
---------------------------------------------------- */
.product-list {
  background: transparent;
}

.product-item {
  --background: #111826;
  border: 1px solid #00eaff60;
  border-radius: 12px;
  margin-bottom: 12px;
  box-shadow: 0 0 12px #00eaff40;
  transition: 0.2s;
}

.product-item:hover {
  transform: scale(1.02);
  box-shadow: 0 0 18px #00eaff90;
}

/* ----------------------------------------------------
   Text Inside Item
---------------------------------------------------- */
.product-text {
  color: white;
  font-size: 1.1rem;
}

.price {
  color: #00eaff;
  text-shadow: 0 0 10px #00eaff;
  margin-left: 8px;
}
</style>
