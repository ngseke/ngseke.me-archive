import Vue from 'vue'
import VueI18n from 'vue-i18n'

import zhTw from '@/locales/zh-tw.json'
import en from '@/locales/en.json'

Vue.use(VueI18n)

const messages = {
  'zh-tw': zhTw,
  en,
}

let browserLanguage = window.navigator.language

if (/zh/g.test(browserLanguage.toLowerCase())) {
  browserLanguage = 'zh-tw'
} else {
  browserLanguage = 'en'
}

export default new VueI18n({
  locale: browserLanguage,
  fallbackLocale: browserLanguage,
  messages,
})
