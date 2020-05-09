<template lang="pug">
header
  .jumbotron.jumbotron-fluid.ngsek.flex-vertical
    .container
      .row.justify-content-center
        .col-6.col-md-12.text-center.d-flex.flex-column.align-items-center
          router-link.about-btn(to='about')
            .logo Xingqiao's Portfolio
          a.btn.btn-light.scroll-down-btn(href='#' @click.prevent='scrollToMain')
            fa(icon='angle-down')
</template>

<script>
import Jump from 'jump.js'

export default {
  name: 'IndexHeader',
  methods: {
    scrollToMain () {
      const offset = -$('#nav').outerHeight()
      Jump('main', { offset })
    },
  },
}
</script>

<style scoped lang="sass">
header
  height: 100vh
  .jumbotron
    background-image: url('~@/assets/img/bg/index-cover.jpg')
    background-size: cover
  .logo
    font-family: 'Pacifico', cursive
    font-size: 3rem
    
  .about-btn
    display: inline-block
    transition: transform .5s
    margin-bottom: 5rem
    position: relative
    &::after
      content: ''
      position: absolute
      width: 100%
      background-color: #1a1a1a
      height: 6px
      bottom: 5px
      left: 0
      border-radius: 100px
      transform: scaleX(0)
      transform-origin: left
      transition: transform .5s
    &:hover
      transform: scale(1.05)
      text-decoration: none
      @media (min-width: 768px)
        &::after
          transform: none
</style>
