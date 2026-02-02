<template>
  <ion-page>
    <!-- Header -->
    <ion-header>
      <ion-toolbar class="header-bar">
        <ion-buttons slot="start">
          <ion-back-button
            default-href="/notes"
            text=""
            class="back-btn"
          />
        </ion-buttons>
        <ion-title class="glow-text">➕ เพิ่มโน้ต</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Content -->
    <ion-content class="ion-padding neon-background">
      <ion-item class="neon-item">
        <ion-input
          v-model="title"
          placeholder="หัวข้อโน้ต"
          class="neon-input"
        />
      </ion-item>

      <ion-item class="neon-item ion-margin-top">
        <ion-textarea
          v-model="content"
          placeholder="เนื้อหา"
          rows="6"
          class="neon-input"
        />
      </ion-item>

      <ion-button
        expand="block"
        class="neon-button ion-margin-top"
        @click="saveNote"
      >
        💾 บันทึกโน้ต
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage, IonHeader, IonToolbar, IonTitle,
  IonContent, IonInput, IonTextarea,
  IonButton, IonButtons, IonBackButton, IonItem
} from '@ionic/vue'

import { Preferences } from '@capacitor/preferences'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const title = ref('')
const content = ref('')
const router = useRouter()

const saveNote = async () => {
  const { value } = await Preferences.get({ key: 'notes' })
  const notes = value ? JSON.parse(value) : []

  notes.push({
    id: Date.now(),
    title: title.value,
    content: content.value
  })

  await Preferences.set({
    key: 'notes',
    value: JSON.stringify(notes)
  })

  // 🔥 ใช้ replace กันกดย้อนหลายรอบ
  router.replace('/notes')
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
  text-shadow: 0 0 10px #00eaff, 0 0 20px #00eaff;
}

/* Back button */
.back-btn {
  --color: #00eaff;
  text-shadow: 0 0 6px #00eaffaa;
}

/* Input container */
.neon-item {
  --background: #111826;
  border-radius: 12px;
  border: 1px solid #00eaff60;
  box-shadow: 0 0 12px #00eaff40;
}

/* Input & textarea */
.neon-input {
  color: #e5faff;
}

.neon-input::placeholder {
  color: #7dd3fc;
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
  transform: scale(1.04);
  box-shadow: 0 0 30px #00eaff, 0 0 60px #00eaff;
}
</style>
