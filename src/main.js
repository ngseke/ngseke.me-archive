import Vue from 'vue'
import App from './App'
import router from './router'

import ScrollReveal from 'scrollreveal'
import Bootstrap from 'bootstrap'
import Parallax from 'jquery-parallax.js'
import { common } from './mixins/common.js'

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

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
library.add(fab)

Vue.component('fa', FontAwesomeIcon)
Vue.prototype.$titleName = `Xingqiao's Portfolio`

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