<template lang="pug">
nav#nav.navbar.navbar-expand-sm.navbar-light(:class='{ shrink: isShrink }' :style='style')
  div(:class='{ container: isShrink, "container-fluid": !isShrink }')
    router-link.navbar-brand(to='/' @click.native='clickLogo')
      img.img-fluid(src='../../public/favicon.png' alt='Logo')
    button.navbar-toggler(type='button' data-toggle='collapse' data-target='#navbarContent')
      fa(icon='bars')
    #navbarContent.collapse.navbar-collapse(ref='content')
      ul.navbar-nav.mr-auto
        li.nav-item.dropdown
          a.nav-link.dropdown-toggle(href='#' data-toggle='dropdown' :class='{ active: this.$route.name === `Project` }')
            | Projects
          .dropdown-menu
            template(v-for='(link, index) in links')
              h6.dropdown-header.text-ngsek {{ link.category }}
              template(v-for='work in link.works')
                router-link.dropdown-item(:to='{ name: "Project", params: { name: work.name } }') {{ work.title }}
              .dropdown-divider(v-if='index !== (links.length - 1)')

        li.nav-item
          router-link.nav-link(to=`/about`) About
        li.nav-item
          a.nav-link(href='https://github.com/ngseke' target='_blank')
            fa.mr-1(:icon='[`fab`, `github`]')
            | GitHub
</template>

<script>
import { computed, ref, watch } from '@vue/composition-api'
import useScrollTop from '@/composables/use-scroll-top'

import $ from 'jquery'
import Jump from 'jump.js'

export default {
  name: 'Navbar',
  setup (_props, { root }) {
    const links = [
      {
        category: 'Website',
        works: [
          { title: 'MCIP Official Website', name: 'mcip' },
          { title: 'MCIP CMS', name: 'mcip-cms' },
          { title: 'EM Optimization Lab', name: 'emo' },
          { title: 'Realtime Monitor', name: 'realtime' },
          { title: 'BOSS', name: 'boss' }
        ]
      },
      {
        category: 'Game',
        works: [
          { title: 'Gomoku', name: 'gomoku' },
          { title: 'Raise Your Red Flag', name: 'flag' },
          { title: 'Typing Typing!', name: 'typingtyping' }
        ]
      }
    ]

    const { top } = useScrollTop()

    const isShrink = ref(false)
    const navbarTop = ref(0)

    const style = computed(() => isShrink ? { top: `${navbarTop.value}px` } : {})

    watch(top, (top, old) => {
      const diff = top - old
      const min = -100
      isShrink.value = top > 500
      navbarTop.value -= diff

      if (navbarTop.value < min) navbarTop.value = min
      else if (navbarTop.value > 0) navbarTop.value = 0
    })

    const clickLogo = async () => {
      await root.$nextTick()
      if (root.$route.name === 'Index') Jump('html')
    }

    const content = ref(null)
    const collapse = () => $(content.value).collapse('hide')

    return {
      links,
      isShrink,
      top,
      style,
      clickLogo,
      content,
      collapse
    }
  }
}
</script>

<style scoped lang="sass">
#nav
  background-color: transparent
  position: absolute
  top: 0
  width: 100%
  z-index: 1000
  a.navbar-brand
    img
      height: 36px
  &.shrink
    position: fixed
    background-color: rgba(white, 0.95)
    backdrop-filter: blur(5px)
    +box-shadow

#nav.light
  a.navbar-brand
    img
      filter: brightness(100)
  a.nav-link
    color: white
  &.shrink
    background-color: rgba(#1e1e1e, 0.95)

@include media-breakpoint-down(sm)
  #nav
    background-color: rgba(white, 0.97)
    +box-shadow
    +py(.5rem)

.navbar-light .navbar-toggler
  color: rgba($ngsek,6)
  border-color: rgba($ngsek,0)
</style>
