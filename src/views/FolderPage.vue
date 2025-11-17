<template>
<ion-header>
  <ion-toolbar style="--background: #000;">
    <ion-title style="color: #fff; text-shadow: 0 0 8px #fff;">LawaBux</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding" style="--background: #000; color: #fff;">
  <!-- Welcome Section -->
  <div style="text-align: center; margin-top: 30px;">
    <ion-icon name="happy-outline" size="large" style="color: #fff; text-shadow: 0 0 10px #fff;"></ion-icon>
    <h2 style="margin-top: 10px; color: #fff; text-shadow: 0 0 15px #fff;">ยินดีต้อนรับสู่ LawaBux</h2>
    <p style="color: #ccc; text-shadow: 0 0 6px #fff;">ไม่บอก</p>
  </div>

  <!-- Card Section -->
  <ion-card style="background: #111; border: 1px solid #fff; box-shadow: 0 0 20px #fff;">
    <ion-card-header>
      <ion-card-title style="color: #fff; text-shadow: 0 0 8px #fff;">แนะนำ Features</ion-card-title>
    </ion-card-header>
    <ion-card-content style="color: #ccc; text-shadow: 0 0 5px #fff;">
      <ul>
        <li>💡 ใช้งานง่ายและรวดเร็ว</li>
        <li>🎨 รองรับ Themes ขาว-ดำ</li>
        <li>⚡ ปรับแต่ง Components ได้ตามต้องการ</li>
      </ul>
    </ion-card-content>
  </ion-card>

  <!-- Button Section -->
  <div style="text-align: center; margin-top: 20px;">
    <ion-button style="--background: #fff; --color: #000; box-shadow: 0 0 15px #fff;" expand="block">
      เริ่มต้นใช้งาน
    </ion-button>
    <ion-button style="--border-color: #fff; --color: #fff; text-shadow: 0 0 8px #fff; box-shadow: 0 0 10px #fff;" expand="block" fill="outline">
      ดูตัวอย่าง Components
    </ion-button>
  </div>
</ion-content>

</template>

<script>
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import HelloUser from "../components/HelloUser.vue";

export default {
  components: {
    HelloUser,
  },
  data() {
    return {
      isDark: window.matchMedia("(prefers-color-scheme: dark)").matches,
    };
  },
  methods: {
    showAlert() {
      alert("กดทำไม");
    },
  },
};
</script>
<style scoped>
/* ===== COMMON ===== */
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 16px;
}

#container strong {
  font-size: 22px;
  line-height: 28px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  margin: 8px 0 16px 0;
}

#container a {
  text-decoration: none;
}

/* ปุ่ม gradient */
.my-button {
  --background: linear-gradient(45deg, #3880ff, #3dc2ff);
  --color: #ffffff;
  --border-radius: 12px;
  padding: 10px 20px;
  font-weight: bold;
  margin-top: 16px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: transform 0.2s, box-shadow 0.2s;
}

.my-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.25);
}

.my-button:active {
  transform: translateY(0);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* ===== LIGHT MODE ===== */
.light-mode {
  --ion-background-color: #f4f5f8;
  --ion-text-color: #222428;
}

.light-mode ion-toolbar {
  --background: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.light-mode ion-header[collapse] ion-toolbar {
  --background: #e0e0e0;
}

/* ===== DARK MODE ===== */
.dark-mode {
  --ion-background-color: #121212;
  --ion-text-color: #f1f1f1;
}

.dark-mode ion-toolbar {
  --background: #1e1e1e;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.dark-mode ion-header[collapse] ion-toolbar {
  --background: #2a2a2a;
}

/* ปรับ gradient ปุ่มตามธีม */
.dark-mode .my-button {
  --background: linear-gradient(45deg, #4a90e2, #50e3c2);
}
</style>
