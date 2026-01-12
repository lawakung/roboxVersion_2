<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="header-bar">
        <ion-title class="glow-text">📩 ติดต่อเรา</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding neon-background">
      <div class="contact-container">
        <h2 class="contact-title">เรารอการติดต่อจากคุณ 💙</h2>

        <ion-card class="neon-card">
          <ion-card-content>
            <form @submit.prevent="submitForm">
              
              <ion-item class="neon-input">
                <ion-label position="floating">ชื่อของคุณ</ion-label>
                <ion-input v-model="form.name" type="text"></ion-input>
              </ion-item>

              <ion-item class="neon-input">
                <ion-label position="floating">อีเมล</ion-label>
                <ion-input v-model="form.email" type="email"></ion-input>
              </ion-item>

              <ion-item class="neon-input">
                <ion-label position="floating">หัวข้อ</ion-label>
                <ion-input v-model="form.subject" type="text"></ion-input>
              </ion-item>

              <ion-item class="neon-input">
                <ion-label position="floating">ข้อความ</ion-label>
                <ion-textarea v-model="form.message" rows="5"></ion-textarea>
              </ion-item>

              <ion-button expand="block" type="submit" class="neon-button ion-margin-top">
                ส่งข้อความ ✨
              </ion-button>
            </form>
          </ion-card-content>
        </ion-card>

      </div>
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
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton
} from '@ionic/vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  console.log('Form submitted:', form.value)
}
</script>

<style scoped>
.neon-background {
  --background: #0a0f1c;
}

.header-bar {
  --background: #0d1326;
  border-bottom: 1px solid #00eaff80;
}

.glow-text {
  color: #00eaff;
  text-shadow: 0 0 12px #00eaff, 0 0 24px #00eaff;
}
.contact-container {
  max-width: 600px;
  margin: 0 auto;
}

.contact-title {
  text-align: center;
  color: #00eaff;
  margin-bottom: 2rem;
  text-shadow: 0 0 12px #00eaffaa;
}
.neon-card {
  background: #111826;
  border: 1px solid #00eaff70;
  border-radius: 16px;
  box-shadow: 0 0 18px #00eaff40;
  backdrop-filter: blur(6px);
}
.neon-input {
  --background: transparent;
  color: white;
  border-bottom: 1px solid #00eaff50;
}

.neon-input ion-label {
  color: #00eaff;
  text-shadow: 0 0 6px #00eaff88;
}

.neon-input ion-input,
.neon-input ion-textarea {
  color: #fff;
}

.neon-input ion-input:focus,
.neon-input ion-textarea:focus {
  outline: none;
}
.neon-button {
  --background: #00eaff;
  --color: #000;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 0 0 15px #00eaff, 0 0 40px #00eaff80;
  transition: 0.25s;
}

.neon-button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px #00eaff, 0 0 60px #00eaff;
}
</style>