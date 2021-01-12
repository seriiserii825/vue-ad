import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUserSecret, faUser, faLock} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import VueSplide from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import GridDirective from '@/directives/grid'
import ImageHeightDirective from '@/directives/image-height'
import ImageMediaHeightDirective from '@/directives/image-media-query-height'
import color from '@/directives/color'
import background from '@/directives/background'
import firebase from 'firebase/app'
import 'firebase/auth'

library.add(faUserSecret)
library.add(faUser)
library.add(faLock)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Vuelidate)
Vue.use(VueSplide)
Vue.directive('grid-columns', GridDirective)
Vue.directive('image-height', ImageHeightDirective)
Vue.directive('image-media-height', ImageMediaHeightDirective)
Vue.directive('color', color)
Vue.directive('background-color', background)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCF1zWfHm92OQ9KHJtb9woHEqvSWd_1lto',
      authDomain: 'vue-ad-b88d4.firebaseapp.com',
      projectId: 'vue-ad-b88d4',
      storageBucket: 'vue-ad-b88d4.appspot.com',
      messagingSenderId: '374075210103',
      appId: '1:374075210103:web:12384b00b14360baa18972'
    })
  },
  render: h => h(App)
}).$mount('#app')
