// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './page/Home'
import router from './router'
import '../adapter.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
