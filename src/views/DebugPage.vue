<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>🐞 To-Do List (Debugging Lab)</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      
      <ion-item>
        <ion-input 
          label="เพิ่มรายการใหม่" 
          label-placement="floating" 
          v-model="newTaskName" 
          @keyup.enter="addTask"
        ></ion-input>
        <ion-button slot="end" @click="addTask">เพิ่ม</ion-button>
      </ion-item>
      
      <ion-list class="ion-margin-top">
        <ion-list-header>รายการที่ต้องทำทั้งหมด ({{ totalTasks }})</ion-list-header>
        
        <ion-item v-for="(task, index) in tasks" :key="index">
          <ion-label>{{ task.name }}</ion-label>
          <ion-checkbox 
            slot="start" 
            :checked="task.done" 
            @ionChange="toggleTaskStatus(index)"
          ></ion-checkbox>
        </ion-item>
        
      </ion-list>
      
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCheckbox,
  IonListHeader
} from '@ionic/vue';

interface Task {
    name: string;
    done: boolean;
}

const newTaskName = ref('');

// ✅ FIX BUG 1: เปลี่ยน tasks ให้เป็น Array
const tasks = ref<Task[]>([
  { name: 'Buy milk', done: false }
]);

// ✅ FIX BUG 2: แก้ Logic Computed Property
const totalTasks = computed(() => {
    return tasks.value.length; // ลบ +1 ออก
});

const addTask = () => {
    if (newTaskName.value.trim() === '') return;

    // ✅ เพิ่มรายการใน tasks (ตอนนี้เป็น Array แล้ว)
    tasks.value.push({ name: newTaskName.value, done: false });
    newTaskName.value = '';
};

const toggleTaskStatus = (index: number) => {
    // ✅ สลับสถานะ done ของรายการ
    tasks.value[index].done = !tasks.value[index].done;
};
</script>