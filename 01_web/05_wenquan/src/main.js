import Vue from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false

import './assets/css/common.styl'
Vue.use(VueAwesomeSwiper)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
