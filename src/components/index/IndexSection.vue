<template lang="pug">
section(
  ref='el'
  :id='id'
  :class='{ active: intersectionRatio === 1 }'
  :style='style'
)
  .container
    .row.justify-content-around.align-items-center
      .col-12.col-md-5.mb-3
        .img
          slot(name='img')
      .col-12.col-md-5
        .content
          slot(name='content')
</template>

<script>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from '@vue/composition-api'
import VanillaTilt from 'vanilla-tilt'
import { useIntersectionObserver } from '@vueuse/core'

export default {
  name: 'IndexSection',
  props: {
    id: String,
    bg: String,
    isTile: Boolean
  },
  setup (props, { root }) {
    const el = ref()
    const setTilt = () => {
      VanillaTilt.init(el.value, {
        'max-glare': 0.1,
        glare: true,
        max: 1
      })
    }
    const removeTile = () => {
      const { vanillaTilt: tilt } = el.value
      if (tilt) tilt.destroy()
    }

    onMounted(setTilt)
    onBeforeUnmount(removeTile)

    watch(() => props.isTile, async (isTile) => {
      await nextTick()
      isTile.value ? setTilt() : removeTile()
    }, { immediate: true })

    const intersectionRatio = ref()
    useIntersectionObserver(
      el,
      ([entries]) => {
        intersectionRatio.value = entries.intersectionRatio
      }, { threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    const style = computed(() => ({ '--bg': `url('${props.bg}')` }))

    return {
      el,
      intersectionRatio,
      style
    }
  }
}
</script>

<style scoped lang="sass">
section
  +py(7rem)
  background-size: cover
  background-image: var(--bg)
  transform-style: preserve-3d
  margin: 2rem
  border-radius: 1rem
  margin-bottom: 3rem
  box-shadow: 0 1rem 1.5rem rgba(#1e1e1e, 0.2)
  .container
    transition: transform .6s
  &.active
    .container
      transform: translateZ(2rem)

  //- 手機版移除 tilt 效果
  @include media-breakpoint-down(sm)
    margin: 0
    border-radius: 0
    .container
      transform: none
    &.active
      .container
        transform: none

.img
  position: relative
  img.cover
    transition: all .4s
    display: inline-block
    @include media-breakpoint-down(sm)
      margin-bottom: 1rem

.content
  text-align: center
  .title, .subtitle
    text-shadow: 0 0 5px rgba(white, .8)
    line-height: 1.2
    color: $black
    &.text-light
      text-shadow: 0 0 5px rgba(black, .3), 0 0 10px rgba(black, .8)
  .title
    margin-bottom: .5rem
    font-size: 1.75rem
    font-weight: 600
    text-transform: uppercase
    letter-spacing: 3px
  .subtitle
    font-size: 1rem
    letter-spacing: .5rem
    font-weight: 200
    margin-bottom: 1.25rem
</style>
