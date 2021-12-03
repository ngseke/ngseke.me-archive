<template lang="pug">
a.link.mr-3(:href='href' target='_blank' v-if='href')
  fa.mr-1(:icon="icon")
  slot
router-link.link.mr-3(:to='to' v-else-if='to')
  fa.mr-1(:icon="icon")
  slot
</template>

<script>
export default {
  props: {
    href: {
      type: String,
    },
    to: {
      type: String,
    },
    icon: {
      type: Array,
    },
  },
}
</script>

<style scoped lang="sass">
.link
  font-weight: bold
</style>
