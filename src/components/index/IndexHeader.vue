<template lang="pug">
header.jumbotron.jumbotron-fluid.flex-vertical
  .container
    .row.justify-content-center
      .col-6.col-md-12.text-center.d-flex.flex-column.align-items-center
        .headline Xingqiao's Portfolio
      .col-12.d-flex.flex-column.align-items-center
        router-link.shortcut(to='about') { aboutMe }
        a.shortcut(href='#' @click.prevent='scrollToMain') { ...projects }
  .bg(:style='bgStyle')
</template>

<script>
import Jump from 'jump.js'

export default {
  name: 'IndexHeader',
  data () {
    return {
      intersectionRatio: 0
    }
  },
  mounted () {
    const observer = new IntersectionObserver(([entries]) => {
      this.intersectionRatio = entries.intersectionRatio
    }, {
      threshold: Array(1000).fill().map((_, i) => i * 0.001)
    })
    observer.observe(this.$el)
    this.$once('hook:beforeDestroy', () => observer.disconnect())
  },
  methods: {
    scrollToMain () {
      Jump('main')
    }
  },
  computed: {
    bgStyle () {
      const y = (this.intersectionRatio - 0.5) * 15
      return {
        transform: `scale(1.25) translateY(${y}%)`
      }
    }
  }
}
</script>

<style scoped lang="sass">
header.jumbotron
  position: relative
  height: 100vh
  background-size: cover
  margin: 0
  padding: 0
  overflow: hidden
  display: flex
  align-items: center
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
    background: linear-gradient(-45deg, darken($ngsek, 35%), $black)
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
