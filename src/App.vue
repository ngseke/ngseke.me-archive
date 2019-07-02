<template lang="pug">
#app
  Navbar
  router-view
  Footer
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
}
</script>

<style lang="sass">
// BS 樣板
@import "~bootswatch/dist/lux/variables"
@import "~bootstrap/scss/bootstrap"
@import "~bootswatch/dist/lux/bootswatch"

// animate.css
@import "~animate.css/source/_base"

// 自訂樣式
@import "./assets/css/style.sass"
</style>
