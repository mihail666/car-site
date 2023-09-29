import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/styles/index.scss'

import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBCHg01emRD9LcPf7TUILQX2zrF5KSVKXM',
  authDomain: 'car-vue.firebaseapp.com',
  projectId: 'car-vue',
  storageBucket: 'car-vue.appspot.com',
  messagingSenderId: '1018262149480',
  appId: '1:1018262149480:web:994d8a78fd245d747c9edd',
  measurementId: 'G-ESPSH8K0CE'
}

initializeApp(firebaseConfig)

createApp(App).use(store).use(router).mount('#app')
