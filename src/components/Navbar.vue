<template lang="pug">
nav#nav.navbar.navbar-expand-sm.navbar-light(:class='{ shrink: isShrink }' :style='style')
  .container
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
import $ from 'jquery'
import Jump from 'jump.js'

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
    return {
      isShrink: false,
      top: null,
      navbarTop: 0
    }
  },
  mounted () {
    this.setNavShrink()
  },
  methods: {
    setNavShrink () {
      const handler = () => {
        this.top = $(window).scrollTop()
      }
      $(window).scroll(handler)
      this.$once('hook:beforeDestroy', () => $(window).off('scroll', handler))
    },
    async clickLogo () {
      await this.$nextTick()
      if (this.$route.name === 'Index') Jump('html')
    },
    collapse () {
      $(this.$refs.content).collapse('hide')
    }
  },
  computed: {
    style () {
      return { top: `${this.navbarTop}px` }
    }
  },
  watch: {
    top (top, old) {
      const diff = top - old
      const min = -100
      this.isShrink = top > 500

      this.navbarTop -= diff

      if (this.navbarTop < min) this.navbarTop = min
      else if (this.navbarTop > 0) this.navbarTop = 0
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
