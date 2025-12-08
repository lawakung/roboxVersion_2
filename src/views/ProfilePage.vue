<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>

        <!-- ปุ่มกลับหน้า Home -->
        <ion-buttons slot="start">
          <ion-button @click="goHome">
            <ion-icon name="home-outline"></ion-icon>
            กลับหน้าแรก
          </ion-button>
        </ion-buttons>

        <ion-title>⚙️ การตั้งค่าและข้อมูลส่วนตัว</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <h2>ข้อมูลผู้ใช้งาน (Preferences Storage)</h2>

      <!-- ฟอร์มบันทึกชื่อ -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>ชื่อผู้ใช้งาน</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-input 
              label="กรอกชื่อของคุณ" 
              label-placement="floating" 
              v-model="userNameInput"
            ></ion-input>
          </ion-item>
          <ion-button expand="block" class="ion-margin-top" @click="saveUserName">
            บันทึกชื่อ
          </ion-button>
        </ion-card-content>
      </ion-card>

      <!-- การตั้งค่าแอป -->
      <ion-card class="ion-margin-top">
        <ion-card-header>
          <ion-card-title>การตั้งค่าแอป</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label>โหมดมืด (Dark Mode)</ion-label>
            <ion-toggle :checked="isDarkMode" @ionChange="toggleDarkMode"></ion-toggle>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <!-- แสดงสถานะปัจจุบัน -->
      <ion-list class="ion-margin-top">
        <ion-list-header>สถานะปัจจุบัน</ion-list-header>

        <ion-item>
          <ion-label>
            <h3>ชื่อผู้ใช้ที่บันทึกไว้:</h3>
            <p><strong>{{ savedUserName || 'ไม่มีข้อมูล' }}</strong></p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-label>
            <h3>สถานะ Dark Mode:</h3>
            <p><strong>{{ isDarkMode ? 'เปิด' : 'ปิด' }}</strong></p>
          </ion-label>
        </ion-item>
      </ion-list>

      <ion-button color="danger" expand="block" class="ion-margin-top" @click="clearAllData">
        ล้างข้อมูลทั้งหมด
      </ion-button>

    </ion-content>
  </ion-page>
</template>



<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Preferences } from '@capacitor/preferences';
import { useRouter } from 'vue-router';

import { 
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonItem, IonInput, IonButton, IonToggle, IonLabel,
  IonList, IonListHeader, IonButtons, IonIcon
} from '@ionic/vue';


// Router สำหรับปุ่มกลับหน้า Home
const router = useRouter();
const goHome = () => {
  router.push('/home'); // ← แก้ path ตามโครงสร้างโปรเจกต์ของคุณ
};


// ตัวแปร
const userNameInput = ref('');
const savedUserName = ref('');
const isDarkMode = ref(false);


// ฟังก์ชันบันทึกชื่อ
const saveUserName = async () => {
  if (!userNameInput.value) return;

  await Preferences.set({
    key: 'userName',
    value: userNameInput.value,
  });

  savedUserName.value = userNameInput.value;
  console.log('User Name Saved:', userNameInput.value);
};


// ฟังก์ชันเปิด/ปิด Dark Mode
const toggleDarkMode = async (event: CustomEvent) => {
  const isChecked = event.detail.checked;
  isDarkMode.value = isChecked;

  await Preferences.set({
    key: 'darkModeState',
    value: isChecked.toString(),
  });

  document.body.classList.toggle('dark', isChecked);

  console.log('Dark Mode Toggled:', isChecked);
};


// โหลดค่าที่เคยตั้งไว้
const loadPreferences = async () => {
  const { value: storedName } = await Preferences.get({ key: 'userName' });
  if (storedName) {
    savedUserName.value = storedName;
    userNameInput.value = storedName;
  }

  const { value: storedMode } = await Preferences.get({ key: 'darkModeState' });
  isDarkMode.value = storedMode === 'true';

  document.body.classList.toggle('dark', isDarkMode.value);
};


// ฟังก์ชันล้างข้อมูลทั้งหมด
const clearAllData = async () => {
  await Preferences.clear();

  savedUserName.value = '';
  userNameInput.value = '';
  isDarkMode.value = false;

  document.body.classList.remove('dark');

  console.log('All Preferences Cleared');
};


// ทำงานตอนเปิดหน้า
onMounted(loadPreferences);
</script>