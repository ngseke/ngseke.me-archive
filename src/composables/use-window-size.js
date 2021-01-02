import { ref, onBeforeUnmount } from '@vue/composition-api'
export default function () {
  const width = ref(null)

  const onResize = () => {
    width.value = document.documentElement.clientWidth || window.innerWidth
  }
  onResize()

  window.addEventListener('resize', onResize)
  onBeforeUnmount(() => window.removeEventListener('scroll', onResize))

  return {
    width
  }
}
