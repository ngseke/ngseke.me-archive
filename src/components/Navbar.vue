<template lang="pug">
nav.navbar.navbar-light(:class='{ shrink: isShrink }' :style='style')
  .px-0.px-sm-3.justify-content-start(:class='{ container: isShrink, "container-fluid": !isShrink }')
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
import { computed, ref, nextTick } from '@vue/composition-api'
import { useWindowScroll } from '@vueuse/core'

import Jump from 'jump.js'

export default {
  name: 'Navbar',
  setup (_props, { root }) {
    const { y: top } = useWindowScroll()

    const isShrink = ref(false)
    const navbarTop = ref(0)

    const style = computed(() => isShrink.value ? { top: `${navbarTop.value}px` } : {})

    const clickLogo = async () => {
      await nextTick()
      if (root.$route.name === 'Index') Jump('html')
    }

    return {
      isShrink,
      top,
      style,
      clickLogo
    }
  }
}
</script>

<style scoped lang="sass">
nav
  background-color: transparent
  position: absolute
  top: 0
  width: 100%
  z-index: 1000
  flex-flow: row nowrap
  justify-content: flex-start
  a.navbar-brand
    img
      height: 36px
  &.shrink
    position: fixed
    background-color: rgba(white, 0.95)
    backdrop-filter: blur(5px)
    +box-shadow

nav.light
  a.navbar-brand
    img
      filter: brightness(100)
  a.nav-link
    color: white
  &.shrink
    background-color: rgba(#1e1e1e, 0.95)

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
