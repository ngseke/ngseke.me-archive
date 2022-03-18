import { computed } from '@vue/composition-api'

export default function useLocale (root) {
  const isZhTw = computed(() => root.$i18n.locale === 'zh-tw')

  const getLink = (path) => {
    return isZhTw.value
      ? path
      : '/en' + path
  }

  return {
    isZhTw,
    getLink,
  }
}
