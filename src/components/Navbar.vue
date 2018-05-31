<template lang="pug">
nav#nav.navbar.navbar-expand-sm.navbar-light.fixed-top(:style='navbarStyle')
  .container
    router-link.navbar-brand(to='/')
      img.img-fluid(src='../../static/favicon.png', alt='Logo')
    button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarContent')
      i.fas.fa-ellipsis-h
    #navbarContent.collapse.navbar-collapse
      ul.navbar-nav.mr-auto
        li.nav-item.dropdown
          a.nav-link.dropdown-toggle(href='#', data-toggle='dropdown')
            | Works
          .dropdown-menu
            h6.dropdown-header.text-ngsek Website
            a.dropdown-item(href='#emo') EM Optimization Lab
            a.dropdown-item(href='#boss') Boss
            .dropdown-divider
            h6.dropdown-header.text-ngsek Game
            a.dropdown-item(href='#typingtyping') Typing Typing!
            .dropdown-divider
            h6.dropdown-header.text-ngsek Art
            a.dropdown-item(href='#shanlinliang') Shanlinliang
            a.dropdown-item(href='#camp2017') Kuaichao Bujia La, Guozi Bujia Tang
            a.dropdown-item(href='#jingshixifu') Jingshi Xifu

        li.nav-item
          a.nav-link(href='#about') About
        li.nav-item
          a.nav-link(href='https://github.com/a92304a92304/x-q.me') Github
        li.nav-item
          router-link.nav-link(:to=`{ name: 'Detail', params: {} }`) Detail

      ul.navbar-nav
        li.nav-item.shrink-hidden
          a.nav-link(href='#' @click.prevent='SetRandomBg()')
            i.fas.fa-random
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      windowHeight: 500
    }
  },
  mounted () {
    this.windowHeight = $(window).height()
    this.SetNavShrink()
  },
  methods:{
    SetRandomBg () {
      var i = Math.floor((Math.random() * 1084) + 1)
      $('.ngsek').parallax('destroy').parallax({imageSrc: `https://picsum.photos/1280/720/?random=${i}`})
    },
    SetNavShrink () {
      $(function () {
        $(window).scroll(function () {
          var scrollVal = $(this).scrollTop()
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
</style>
