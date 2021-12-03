<template lang="pug">
nav.navbar.navbar-light
  .container-fluid.px-0.px-sm-3.justify-content-start
    router-link.navbar-brand(to='/' @click.native='clickLogo')
      img.img-fluid(src='../../public/favicon.png' alt='Logo')
    .content(ref='content')
      ul.navbar-nav.mr-auto
        li.nav-item(v-for='{ name, to, href } in navbarLinks')
          router-link.nav-link(:to='to' v-if="to") {{ name }}
          a.nav-link(:href='href' target="_blank" v-else-if="href") {{ name }}
</template>

<script>
import { computed, nextTick } from '@vue/composition-api'
import { useWindowScroll } from '@vueuse/core'
import navbarLinks from '@/modules/navbar-links'
import Jump from 'jump.js'

export default {
  name: 'Navbar',
  setup (_props, { root }) {
    const { y: top } = useWindowScroll()

    const isIndex = computed(() => root.$route.name === 'Index')

    const clickLogo = async () => {
      await nextTick()
      if (isIndex.value) Jump('html')
    }

    return {
      top,
      isIndex,
      clickLogo,
      navbarLinks,
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

nav.light
  a.navbar-brand
    img
      filter: brightness(100)
  a.nav-link
    color: white

.navbar-light .navbar-toggler
  color: rgba($ngsek,6)
  border-color: rgba($ngsek,0)

.navbar-nav
  flex-direction: row
</style>
