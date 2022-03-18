import Vue from 'vue'
import VueI18n from 'vue-i18n'

import zhTw from '@/locales/zh-tw.json'
import en from '@/locales/en.json'

Vue.use(VueI18n)

const messages = {
  'zh-tw': zhTw,
  en,
}

export default new VueI18n({
  locale: 'zh-tw',
  fallbackLocale: 'zh-tw',
  messages,
})
