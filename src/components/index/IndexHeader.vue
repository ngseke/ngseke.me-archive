<template lang="pug">
header.jumbotron.jumbotron-fluid.flex-vertical
  .container
    .row.justify-content-center
      .col-6.col-md-12.text-center.d-flex.flex-column.align-items-center
        router-link.about-btn(to='about')
          h1.logo Xingqiao's Portfolio
</template>

<script>
export default {
  name: 'IndexHeader',
}
</script>

<style scoped lang="sass">
@import "~@/assets/css/color"
  
header.jumbotron
  height: 100vh
  background-image: url('~@/assets/img/bg/index-cover.jpg')
  background-size: cover
  background-color: transparent

  margin: 0
  padding: 0
  
  .logo
    padding: 1rem
    font-family: 'Pacifico', cursive
    font-size: 3rem
    color: transparent
    text-transform: none
    background: linear-gradient(-45deg, $black, darken($ngsek, 40%))
    -webkit-background-clip: text
    
  .about-btn
    display: inline-block
    transition: transform .5s
    margin-bottom: 3rem
    &:hover
      transform: scale(1.05)
      text-decoration: none
      @media (min-width: 768px)
        &::after
          transform: none
</style>
