<template>
  <ion-page>
    <!-- Header -->
    <ion-header>
      <ion-toolbar class="header-bar">
        <ion-buttons slot="start">
          <ion-button class="home-btn" @click="goHome">
           ⬅ Home
          </ion-button>
        </ion-buttons>

        <ion-title class="glow-text">📝 โน้ต</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Content -->
    <ion-content class="ion-padding neon-background">
      <!-- มีโน้ต -->
      <ion-list v-if="notes.length">
        <ion-item
          v-for="note in notes"
          :key="note.id"
          class="neon-item"
        >
          <ion-label>
            <h2 class="note-title">{{ note.title }}</h2>
            <p class="note-content">{{ note.content }}</p>
          </ion-label>

          <!-- ปุ่มแก้ไข -->
          <ion-button
            fill="clear"
            color="warning"
            slot="end"
            @click="editNote(note)"
          >
            ✏️
          </ion-button>

          <!-- ปุ่มลบ -->
          <ion-button
            fill="clear"
            color="danger"
            slot="end"
            @click="deleteNote(note.id)"
          >
            🗑️
          </ion-button>
        </ion-item>
      </ion-list>

      <!-- ไม่มีโน้ต -->
      <p v-else class="empty-text">
        ยังไม่มีโน้ต 📭
      </p>
    </ion-content>

    <!-- ปุ่ม + -->
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button class="fab-neon" @click="goAddNote">
        <ion-icon :icon="add" />
      </ion-fab-button>
    </ion-fab>
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
  IonLabel,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButton,
  IonButtons,
  onIonViewWillEnter
} from '@ionic/vue'

import { Preferences } from '@capacitor/preferences'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { add } from 'ionicons/icons'

const router = useRouter()
const notes = ref([])

/* โหลดโน้ต */
const loadNotes = async () => {
  const { value } = await Preferences.get({ key: 'notes' })
  notes.value = value ? JSON.parse(value) : []
}

/* ลบโน้ต */
const deleteNote = async (id) => {
  notes.value = notes.value.filter(n => n.id !== id)
  await Preferences.set({
    key: 'notes',
    value: JSON.stringify(notes.value)
  })
}

/* ✏️ แก้ไขโน้ต */
const editNote = async (note) => {
  const newTitle = prompt('แก้ไขหัวข้อโน้ต', note.title)
  if (newTitle === null) return

  const newContent = prompt('แก้ไขเนื้อหาโน้ต', note.content)
  if (newContent === null) return

  const index = notes.value.findIndex(n => n.id === note.id)
  if (index !== -1) {
    notes.value[index].title = newTitle
    notes.value[index].content = newContent

    await Preferences.set({
      key: 'notes',
      value: JSON.stringify(notes.value)
    })
  }
}

/* ไปหน้าเพิ่มโน้ต */
const goAddNote = () => {
  router.push('/add-note')
}

/* กลับ Home */
const goHome = () => {
  router.push('/home')
}

onIonViewWillEnter(loadNotes)
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
  text-shadow: 0 0 10px #00eaff, 0 0 24px #00eaff;
}

/* Home button */
.home-btn {
  --color: #00eaff;
  text-shadow: 0 0 6px #00eaffaa;
}

/* List item */
.neon-item {
  --background: #111826;
  border-radius: 14px;
  margin-bottom: 10px;
  border: 1px solid #00eaff60;
}

/* Note title */
.note-title {
  color: #00eaff;
  font-weight: bold;
}

/* Note content */
.note-content {
  color: #d0f7ff;
}

/* Empty text */
.empty-text {
  text-align: center;
  opacity: 0.6;
  color: #ffffffaa;
}

/* FAB */
.fab-neon {
  --background: #00eaff;
  box-shadow: 0 0 20px #00eaff;
}
</style>
