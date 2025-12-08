<template>
  <ion-split-pane content-id="main-content">
    <!-- Side Menu -->
    <ion-menu content-id="main-content" type="overlay">
      <ion-content>
        <ion-list>
          <ion-list-header>My App</ion-list-header>

          <ion-menu-toggle
            v-for="(page, i) in appPages"
            :key="i"
            auto-hide="false"
          >
            <ion-item
              :router-link="page.url"
              router-direction="root"
              :class="{ selected: route.path === page.url }"
              lines="none"
            >
              <ion-icon slot="start" :icon="page.icon" />
              <ion-label>{{ page.title }}</ion-label>
            </ion-item>
          </ion-menu-toggle>
        </ion-list>
      </ion-content>
    </ion-menu>

    <!-- Main Content -->
    <ion-router-outlet id="main-content" />
  </ion-split-pane>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonSplitPane
} from '@ionic/vue'

import { homeOutline, cubeOutline } from 'ionicons/icons'
import { useRoute } from 'vue-router'

const route = useRoute()

const appPages = [
  {
    title: 'Home',
    url: '/home',
    icon: homeOutline,
  },
  {
    title: 'Product',
    url: '/product',
    icon: cubeOutline,
  },
  {
    title: 'Cantact',
    url: '/Contact',
    icon: cubeOutline,
  }
]
</script>

<style scoped>
ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.15);
  --color: var(--ion-color-primary);
}
</style>