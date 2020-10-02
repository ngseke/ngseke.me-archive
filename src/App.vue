<template lang="pug">
#app
  Navbar(ref='navbar')
  router-view
  Footer
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const title = 'Xingqiao\'s Portfolio'
const description = 'Huang Xingqiao\'s Portfolio. 「黃色的我」'

export default {
  name: 'App',
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  },
  components: {
    Navbar,
    Footer
  },
  metaInfo: {
    titleTemplate: (_) => _ ? `${_} | ${title}` : title,
    meta: [
      { property: 'og:title', vmid: 'og:title', content: title },
      { property: 'description', vmid: 'description', content: description },
      { property: 'og:description', vmid: 'og:description', content: description },
      { property: 'og:image', vmid: 'og:image', content: require('@/assets/img/index.png') }
    ]
  },
  watch: {
    $route (_) {
      this.$refs.navbar.collapse()
    }
  }
}
</script>

<style lang="sass">
// BS 樣板
@import "~bootswatch/dist/lux/variables"
@import "~bootstrap/scss/bootstrap"
@import "~bootswatch/dist/lux/bootswatch"
</style>
