<template lang="pug">
a.btn.btn-sm.btn-primary(:href='href' target='_blank')
  slot Demo
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
