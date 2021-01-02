import { onBeforeUnmount, onMounted } from '@vue/composition-api'

export default function (observer, el) {
  onMounted(() => observer.observe(el.value))
  onBeforeUnmount(() => observer.disconnect())
}
