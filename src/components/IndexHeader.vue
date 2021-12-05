<template lang="pug">
header.flex-vertical(ref='el')
  .container
    .row.justify-content-center
      .col-6.col-md-12.text-center.d-flex.flex-column.align-items-center
        .headline Xingqiao's Portfolio
      .col-12.d-flex.flex-column.align-items-center
        router-link.shortcut(to='about') About
        router-link.shortcut(to='project') ...Projects
  .bg(ref='bg')
</template>

<script>
import { ref } from '@vue/composition-api'
import useJarallax from '@/composables/useJarallax'

export default {
  name: 'IndexHeader',
  setup () {
    const el = ref()
    const bg = ref()

    useJarallax(el, bg)

    return {
      el,
      bg,
    }
  },
}
</script>

<style scoped lang="sass">
header
  position: relative
  height: 100vh
  background-size: cover
  overflow: hidden
  display: flex
  align-items: center
  .bg
    +wh(100%)
    position: absolute
    top: 0
    left: 0
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
    &:before, &:after
      display: inline-block
      transition: all .3s
      color: #14213d
    $bracket-distance: .75rem
    &:before
      content: '{'
      padding-right: $bracket-distance
    &:after
      content: '}'
      padding-left: $bracket-distance
    &:hover
      text-decoration: none
      &:before
        transform: translateX(-.5rem)
      &:after
        transform: translateX(.5rem)
</style>
