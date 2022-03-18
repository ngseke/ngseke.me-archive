<template lang="pug">
nav.navbar.navbar-light
  .container-fluid.px-0.px-sm-3.justify-content-start
    router-link.navbar-brand(:to='getLink("/")' @click.native='clickLogo')
      img.img-fluid(src='../../public/favicon.png' alt='Logo')

    ul.navbar-nav.mr-auto
      li.nav-item(v-for='{ name, to, href } in navbarLinks')
        router-link.nav-link(:to='getLink(to)' v-if="to") {{ name }}
        a.nav-link(:href='href' target="_blank" v-else-if="href") {{ name }}
    TheNavbarLocaleToggler
</template>

<script>
import { computed, nextTick } from '@vue/composition-api'
import { useWindowScroll } from '@vueuse/core'
import navbarLinks from '@/modules/navbar-links'
import TheNavbarLocaleToggler from '@/components/TheNavbarLocaleToggler'
import Jump from 'jump.js'

import useLocale from '@/composables/useLocale'

export default {
  name: 'Navbar',
  components: {
    TheNavbarLocaleToggler,
  },
  setup (_props, { root }) {
    const { y: top } = useWindowScroll()

    const isIndex = computed(() => root.$route.name === 'Index')

    const clickLogo = async () => {
      await nextTick()
      if (isIndex.value) Jump('html')
    }

    const { getLink } = useLocale(root)

    return {
      top,
      isIndex,
      clickLogo,
      navbarLinks,
      getLink,
    }
  },
}
</script>

<style scoped lang="sass">
nav
  background-color: transparent
  position: absolute
  width: 100%
  z-index: 1000
  .navbar-brand
    img
      height: 36px
  @include media-breakpoint-down(sm)
    +py(.5rem)

.navbar-nav
  flex-direction: row
</style>
