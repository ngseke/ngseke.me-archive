// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//

import ScrollReveal from 'scrollreveal'
import Jump from 'jump.js'
import Bootstrap from 'bootstrap'
import Parallax from 'jquery-parallax.js'
//

Vue.prototype.$ScrollReveal = ScrollReveal
Vue.prototype.$Jump = Jump

//

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
