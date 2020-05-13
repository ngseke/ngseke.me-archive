import Vue from 'vue'
import App from './App'
import router from './router'

import ScrollReveal from 'scrollreveal'
import Bootstrap from 'bootstrap'
import { common } from './mixins/common.js'

import './fontawesome'

import VueMeta from 'vue-meta'
Vue.use(VueMeta)

Vue.prototype.$ScrollReveal = ScrollReveal
ScrollReveal({
  reset: false,
  duration: 1000,
  scale: 1,
})
Vue.config.productionTip = false
Vue.mixin(common)

const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  $('#navbarContent').collapse('hide')
  next()
})