<template lang="pug">
#app
  TheNavbar(ref='navbar')
  .main
    router-view
  TheFooter
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import TheFooter from '@/components/TheFooter'

const title = 'Xingqiao\'s Portfolio'
const description = 'Huang Xingqiao\'s Portfolio. 「黃色的我」'

export default {
  name: 'App',
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  },
  components: {
    TheNavbar,
    TheFooter,
  },
  metaInfo: {
    titleTemplate: (_) => _ ? `${_} | ${title}` : title,
    meta: [
      { property: 'description', vmid: 'description', content: description },
      { property: 'og:description', vmid: 'og:description', content: description },
      { property: 'og:image', vmid: 'og:image', content: require('@/assets/img/index.png') },
    ],
  },
}
</script>

<style lang="sass">
@import "~@/assets/css/style.sass"

#app
  display: flex
  flex-direction: column
  min-height: 100vh
  .main
    flex: 1
</style>
