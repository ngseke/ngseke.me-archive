import Vue from 'vue'
import App from './App'
import router from './router'

import ScrollReveal from 'scrollreveal'
import Bootstrap from 'bootstrap'
import Parallax from 'jquery-parallax.js'
import { common } from './mixins/common.js'

Vue.prototype.$ScrollReveal = ScrollReveal
Vue.config.productionTip = false
Vue.mixin(common)

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
library.add(fab)

Vue.component('fa', FontAwesomeIcon)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
