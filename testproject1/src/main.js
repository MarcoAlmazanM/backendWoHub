import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from "firebase"
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCRGehwiNoJstTU3tjQZOU92em-LAq2lAU",
  authDomain: "fir-ideentest.firebaseapp.com",
  projectId: "fir-ideentest",
  storageBucket: "fir-ideentest.appspot.com",
  messagingSenderId: "743195041356",
  appId: "1:743195041356:web:4bb5c68e852e0836a0dee9",
  measurementId: "G-60G20YQW72"
};
firebase.initializeApp(firebaseConfig);
//export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
