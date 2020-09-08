<template lang="pug">
nav#nav.navbar.navbar-expand-sm.navbar-light.fixed-top(:style='navbarStyle' :class='{ light: isLight, shrink: isShrink }')
  .container
    router-link.navbar-brand(to='/' @click.native='clickLogo')
      img.img-fluid(src='../../static/favicon.png' alt='Logo')
    button.navbar-toggler(type='button' data-toggle='collapse' data-target='#navbarContent')
      fa(icon='bars')
    #navbarContent.collapse.navbar-collapse
      ul.navbar-nav.mr-auto
        li.nav-item.dropdown
          a.nav-link.dropdown-toggle(href='#' data-toggle='dropdown' :class='{ active: this.$route.name === `Work` }')
            | Projects
          .dropdown-menu
            template(v-for=`(link, index) in links`)
              h6.dropdown-header.text-ngsek {{ link.category }}
              template(v-for=`work in link.works`)
                router-link.dropdown-item(:to='{ name: "Project", params: { name: work.name } }') {{ work.title }}
              .dropdown-divider(v-if=`index !== (links.length - 1)`)

        li.nav-item
          router-link.nav-link(to=`/about`) About
        li.nav-item
          a.nav-link(href='https://github.com/seanyellow' target='_blank')
            fa.mr-1(:icon='[`fab`, `github`]')
            | Github
</template>

<script>
import Jump from 'jump.js'
import { throttle } from 'throttle-debounce'

export default {
  name: 'Navbar',
  data () {
    this.links = [
      {
        category: 'Website',
        works: [
          { title: 'MCIP Official Website', name: 'mcip' },
          { title: 'MCIP CMS', name: 'mcip-cms' },
          { title: 'EM Optimization Lab', name: 'emo' },
          { title: 'Realtime Monitor', name: 'realtime' },
          { title: 'BOSS', name: 'boss' },
        ]
      },
      {
        category: 'Game',
        works: [
          { title: 'Gomoku', name: 'gomoku' },
          { title: 'Raise Your Red Flag', name: 'flag' },
          { title: 'Typing Typing!', name: 'typingtyping' },
        ]
      },
    ]
    return {
      windowHeight: 500,
      isShrink: false,
    }
  },
  mounted () {
    this.windowHeight = $(window).height()
    this.setNavShrink()
  },
  methods: {
    setNavShrink () {
      const throttled = throttle(250, () => {
        this.isShrink = $(window).scrollTop() > 50
      })
      $(window).scroll(throttled)
    },
    clickLogo () {
      this.$nextTick(() => {
        if (this.$route.name === `Index`) Jump(`html`)
      })
    }
  },
  computed:{
    navbarStyle () {
      return {
        maxHeight : (this.windowHeight - 50) + 'px'
      }
    },
    isLight () {
      return false && this.$route.name === `Index`
    },
  },
}
</script>

<style scoped lang="sass">
@import "~@/assets/css/style.sass"
#nav
  background-color: rgba(white, 0)
  transition: background-color .3s ease-out
  a.navbar-brand
    img
      height: 36px
  &.shrink
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

@media (max-width: 575.98px)
  #nav
    background-color: rgba(white, 0.97)
    +box-shadow
    +py(.5rem)
    &.shrink
      // background-color: rgba(white, 0.97)

.navbar-light .navbar-toggler
  color: rgba($ngsek,6)
  border-color: rgba($ngsek,0)
</style>
