<template lang="pug">
#app
  Navbar
  //- transition(enter-active-class="animated fadeInTop" leave-active-class="animated fadeOut")
  router-view
  Footer
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: { // 使用的元件
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
