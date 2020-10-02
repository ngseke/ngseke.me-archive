import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta'

import 'bootstrap/js/dist/collapse.js'
import 'bootstrap/js/dist/tooltip.js'
import 'bootstrap/js/dist/dropdown.js'
import './fontawesome'

Vue.use(VueMeta)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
