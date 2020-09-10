<template lang="pug">
header.jumbotron.jumbotron-fluid.flex-vertical
  .container
    .row.justify-content-center
      .col-6.col-md-12.text-center.d-flex.flex-column.align-items-center
        .headline Xingqiao's Portfolio
        router-link.shortcut(to='about') { aboutMe }
        a.shortcut(href='#' @click.prevent='scrollToMain') { ...projects }
  .bg(:style='bgStyle')
</template>

<script>
import Jump from 'jump.js'
import { throttle } from 'throttle-debounce'

export default {
  name: 'IndexHeader',
  data () {
    return {
      intersectionRatio: 0,
    }
  },
  mounted () {
    const observer = new IntersectionObserver(([entries]) => {
      this.intersectionRatio = entries.intersectionRatio
    }, {
      threshold: Array(1000).fill().map((_, i) => i * .001)
    })
    observer.observe(this.$el)
    this.$once('hook:beforeDestroy', () => observer.disconnect())
  },
  methods: {
    scrollToMain () {
      const offset = -$('#nav').outerHeight()
      Jump('main', { offset })
    },
  },
  computed: {
    bgStyle () {
      const y = (this.intersectionRatio - .5) * 10
      return {
        transform: `scale(1.2) translateY(${y}%)`
      }
    },
  }
}
</script>

<style scoped lang="sass">
@import "~@/assets/css/color"

header.jumbotron
  position: relative
  height: 100vh
  background-size: cover
  margin: 0
  padding: 0
  overflow: hidden
  .bg
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-image: url('~@/assets/img/bg/index-cover.jpg')
    background-size: cover

  .headline
    padding: 1rem
    font-family: 'Pacifico', cursive
    font-size: 3rem
    color: transparent
    text-transform: none
    background: linear-gradient(-45deg, $black, darken($ngsek, 40%))
    -webkit-background-clip: text
    z-index: 1
    display: inline-block
    margin-bottom: 3rem
  .shortcut
    z-index: 1
    font-size: 1.5rem
    opacity: .9
    transition: transform .5s
    font-weight: bold
    font-family: monospace
    margin-bottom: .5rem
    &:hover
      text-decoration: none
      transform: scale(1.05)
</style>
