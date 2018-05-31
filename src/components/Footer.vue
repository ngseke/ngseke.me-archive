<template lang="pug">
footer.text-center.py-5(@click="$Jump('body')")
  div
    | Designed by Huang Xingqiao © 2018
    a(href='http://x-q.me')  x-q.me
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="sass">
@import "../assets/css/style.sass"

footer
  +py(1rem)
  font-size: .8rem

</style>
