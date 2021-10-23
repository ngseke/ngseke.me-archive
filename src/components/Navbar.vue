<template lang="pug">
nav.navbar.navbar-light
  .container-fluid.px-0.px-sm-3.justify-content-start
    router-link.navbar-brand(to='/' @click.native='clickLogo')
      img.img-fluid(src='../../public/favicon.png' alt='Logo')
    div(ref='content')
      ul.navbar-nav.mr-auto
        li.nav-item
          router-link.nav-link(to=`/project`) Projects
        li.nav-item
          router-link.nav-link(to=`/about`) About
</template>

<script>
import { nextTick } from '@vue/composition-api'
import { useWindowScroll } from '@vueuse/core'

import Jump from 'jump.js'

export default {
  name: 'Navbar',
  setup (_props, { root }) {
    const { y: top } = useWindowScroll()

    const clickLogo = async () => {
      await nextTick()
      if (root.$route.name === 'Index') Jump('html')
    }

    return {
      top,
      clickLogo,
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
  flex-flow: row nowrap
  justify-content: flex-start
  a.navbar-brand
    img
      height: 36px
nav.light
  a.navbar-brand
    img
      filter: brightness(100)
  a.nav-link
    color: white

@include media-breakpoint-down(sm)
  nav
    background-color: rgba(white, 0.97)
    +box-shadow
    +py(.5rem)

.navbar-light .navbar-toggler
  color: rgba($ngsek,6)
  border-color: rgba($ngsek,0)

.navbar-nav
  flex-direction: row
</style>
