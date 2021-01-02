import { ref, onBeforeUnmount } from '@vue/composition-api'

export default function () {
  const top = ref(null)

  const onScroll = () => {
    top.value = document.documentElement.scrollTop || window.pageYOffset || 0
  }
  window.addEventListener('scroll', onScroll)
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

  return {
    top
  }
}
