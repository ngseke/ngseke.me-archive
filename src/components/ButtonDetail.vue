<template lang="pug">
router-link.btn.btn-sm.btn-primary(:to='to')
  slot Detail
</template>

<script>
import { computed } from '@vue/composition-api'
export default {
  props: {
    name: {
      type: String,
      require: true,
    },
  },
  setup (props) {
    const to = computed(
      () => ({ path: `project/${props.name}` })
    )

    return {
      to,
    }
  },
}
</script>
