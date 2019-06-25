<template lang="pug">
footer.text-center.py-5
  div
    | Designed by Huang Xingqiao © 2018 - 2019
    |
    a(href='https://x-q.me') x-q.me
</template>

<script>
import Jump from 'jump.js'
export default {
  name: 'Footer',
  methods:{ 
  }
}
</script>

<style scoped lang="sass">

@import "../assets/css/style.sass"

footer
  +py(1rem)
  font-size: .8rem

</style>
