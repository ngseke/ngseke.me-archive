<template lang="pug">
nav#nav.navbar.navbar-expand-sm.navbar-light.fixed-top(:style='navbarStyle')
  .container
    router-link.navbar-brand(to='/')
      img.img-fluid(src='../../static/favicon.png', alt='Logo')
    button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarContent')
      fa(icon='ellipsis-h')
    #navbarContent.collapse.navbar-collapse
      ul.navbar-nav.mr-auto
        li.nav-item.dropdown
          a.nav-link.dropdown-toggle(href='#' data-toggle='dropdown' :class='{active: this.$route.name==`Work`}')
            | Works
          .dropdown-menu
            template(v-for=`(link, link_index) in links`)
              h6.dropdown-header.text-ngsek {{ link.category }}
              template(v-for=`work in link.works`)
                router-link.dropdown-item(:to=`work.link`) {{ work.name }}
              .dropdown-divider(v-if=`link_index != (links.length-1)`)
        li.nav-item.dropdown(hidden)
          a.nav-link.dropdown-toggle(href='#' data-toggle='dropdown')
            | Apps
          .dropdown-menu
            h6.dropdown-header.text-ngsek Game
            a.dropdown-item(href='https://flag.x-q.me') Raise Your Red Flag
            //- .dropdown-divider
            //- h6.dropdown-header.text-ngsek Other
            //- a.dropdown-item(href='https://dodo.x-q.me') Dodo

        li.nav-item
          router-link.nav-link(to=`/about`) About
        li.nav-item
          a.nav-link(href='https://github.com/a92304a92304/x-q.me' target='_blank') Github
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      windowHeight: 500,
      links: [
        {
          category: 'Website',
          works: [
            { name: 'EM Optimization Lab', link: '/work/emo' },
            { name: 'Boss', link: '/work/boss' },
          ]
        },
        {
          category: 'Game',
          works: [
            { name: 'Typing Typing!', link: '/work/typingtyping' },
            { name: 'Raise Your Red Flag', link: '/work/flag' },
          ]
        },
        {
          category: 'Art',
          works: [
            { name: 'Shanlinliang', link: '/work/shanlinliang' },
            { name: 'Kuaichao Bujia La, Guozi Bujia Tang', link: '/work/camp2017' },
            { name: 'Jingshi Xifu', link: '/work/jingshixifu' },
          ]
        },
      ]
    }
  },
  mounted () {
    this.windowHeight = $(window).height()
    this.SetNavShrink()
  },
  methods:{
    SetRandomBg () {
      const i = Math.floor((Math.random() * 1084) + 1)
      $('.ngsek').parallax('destroy').parallax({imageSrc: `https://picsum.photos/1280/720/?random=${i}`})
    },
    SetNavShrink () {
      $(function () {
        $(window).scroll(function () {
          let scrollVal = $(this).scrollTop()
          if(scrollVal > 20)
            $('#nav').addClass('shrink')
          else
            $('#nav').removeClass('shrink')
        })
      })
    },
  },
  computed:{
    navbarStyle () {
      return {
        maxHeight : (this.windowHeight - 50) + 'px'
      }
    }
  }
}
</script>

<style scoped lang="sass">
@import "../assets/css/style.sass"
#nav
  background-color: rgba(white, 0)
  transition: background-color .3s ease-out
  a.navbar-brand
    img
      height: 36px
  &.shrink
    background-color: rgba(white, 0.95)
    backdrop-filter: blur(20px)
    +box-shadow

@media (max-width: 575.98px)
  #nav
    background-color: rgba(white, 0.97)
    +box-shadow
    +py(.5rem)
    &.shrink
      background-color: rgba(white, 0.97)

.navbar-light .navbar-toggler
  color: rgba($ngsek,6)
  border-color: rgba($ngsek,0)

</style>
