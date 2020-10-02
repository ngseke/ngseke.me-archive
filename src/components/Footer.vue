<template lang="pug">
footer.footer: .container
  | © 2018-{{ year }}
  |
  router-link(to='/') Xingqiao's Portfolio
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    year: () => new Date().getFullYear()
  }
}
</script>

<style scoped lang="sass">
.footer
  +py(3rem)
  font-size: .8rem
  text-align: center
</style>
