import { onBeforeUnmount, onMounted } from '@vue/composition-api'
import { jarallax } from 'jarallax'

export default function (el, bg, options) {
  onMounted(() => jarallax(el.value, {
    speed: 0.3,
    imgElement: bg.value,
    ...options,
  }))

  onBeforeUnmount(() => jarallax(el.value, 'destroy'))
}
