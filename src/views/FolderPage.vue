<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>dfgdfgdf</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">dfgdfgdf</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <HelloUser />
        <strong class="capitalize">Hello</strong>
      </div>
      <ion-button @click="showAlert">คลิกที่นี่</ion-button>
    </ion-content>
  </ion-page>
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
    return {};
  },
  methods: {
    showAlert() {
      alert("สวัสดีจาก Vue.js!");
    },
  },
};
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>