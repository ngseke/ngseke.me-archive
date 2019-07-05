<template lang="pug">
- const 년 = new Date().getFullYear()
footer.text-center.py-5
  div
    | Designed by Huang Xingqiao © 2018-#[=년]
    | 
    |
    a(href='https://x-q.me') x-q.me
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped lang="sass">
@import "../assets/css/style.sass"

footer
  +py(1rem)
  font-size: .8rem
</style>
