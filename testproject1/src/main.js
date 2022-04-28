import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from "firebase"
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAQw1MKhv2R2oUPpeuuWnAyQc-73D9W0JQ",
  authDomain: "wohubideen.firebaseapp.com",
  projectId: "wohubideen",
  storageBucket: "wohubideen.appspot.com",
  messagingSenderId: "362055195657",
  appId: "1:362055195657:web:f5dc6b933f06d577096cd8",
  measurementId: "G-S21EN51H09"
};
firebase.initializeApp(firebaseConfig);
//export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
