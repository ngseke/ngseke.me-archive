import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta'
import VueLazyload from 'vue-lazyload'
import VueCompositionAPI from '@vue/composition-api'
import i18n from './i18n'
import './fontawesome'

Vue.use(VueMeta)
Vue.use(VueLazyload)
Vue.use(VueCompositionAPI)
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
