<template lang="pug">
a.btn.btn-sm.btn-github(:href='href' target='_blank')
  fa(:icon='[`fab`, `github-alt`]')
  |  Github
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      require: true
    }
  }
}
</script>

<style scoped lang="sass">
.btn-github
  background-color: #0e2635
  color: white
  &:hover
    color: white
    background-color: #0b1d28
</style>
