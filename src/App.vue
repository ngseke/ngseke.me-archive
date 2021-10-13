<template lang="pug">
#app
  Navbar(ref='navbar')
  .main
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
@import "~bootstrap/scss/bootstrap"

#app
  display: flex
  flex-direction: column
  min-height: 100vh
  .main
    flex: 1
</style>
