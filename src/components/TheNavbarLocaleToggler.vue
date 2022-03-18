<template lang="pug">
.navbar-nav
  router-link.nav-link(:to='to') {{ text }}
</template>

<script>
import { computed } from '@vue/composition-api'

export default {
  setup (_props, { root }) {
    const text = computed(
      () => root.$i18n.locale === 'zh-tw' ? 'EN' : '中'
    )

    const to = computed(() => {
      const isZhTw = root.$i18n.locale === 'zh-tw'
      return isZhTw
        ? '/en' + root.$route.path
        : root.$route.path.replace(/\/en/g, '')
    })

    return {
      text,
      to,
    }
  },
}
</script>
