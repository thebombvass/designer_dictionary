import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import router from './router'

import {config} from './helpers/firebaseConfig'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

firebase.initializeApp(config);

new Vue({
  router,
  created() {
    let currentUID;
    function onAuthStateChanged(user) {
        if (user) {
            currentUID = user.uid;
            console.log("User is signed in");
            router.push('/success')

        } else {
            // Set currentUID to null.
            currentUID = null;
            console.log("User is not signed")
            router.push('/auth')

        }
    }
    firebase.auth().onAuthStateChanged(onAuthStateChanged);
},
  render: h => h(App),
}).$mount('#app')
  