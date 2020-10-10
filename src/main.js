import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'


Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAnjplevzpi28Py9KW2C426PKmn_olR2mw",
  authDomain: "vue-calendar-f5426.firebaseapp.com",
  databaseURL: "https://vue-calendar-f5426.firebaseio.com",
  projectId: "vue-calendar-f5426",
  storageBucket: "vue-calendar-f5426.appspot.com",
  messagingSenderId: "462245867470",
  appId: "1:462245867470:web:6df99d0a1eab77dedfc59f"
})

export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
