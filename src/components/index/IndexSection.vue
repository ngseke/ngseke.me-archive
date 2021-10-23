<template lang="pug">
section(
  ref='el'
  :id='id'
  :style='style'
)
  .row.justify-content-around.align-items-center
    .col-12.col-md-4.mb-3
      .img
        slot(name='img')
    .col-12.col-md-5
      .content
        slot(name='content')
</template>

<script>
import { computed } from '@vue/composition-api'

export default {
  name: 'IndexSection',
  props: {
    id: String,
    bg: String,
    isTile: Boolean,
  },
  setup (props) {
    const style = computed(() => ({ '--bg': `url('${props.bg}')` }))

    return {
      style,
    }
  },
}
</script>

<style scoped lang="sass">
section
  +py(3rem)
  background-size: cover
  background-image: var(--bg)
  transform-style: preserve-3d
  margin: 2rem
  border-radius: 1.5rem
  margin-bottom: 3rem
  box-shadow: 0 1rem 1.5rem rgba(#1e1e1e, 0.2)

  //- 手機版移除 tilt 效果
  @include media-breakpoint-down(sm)
    margin: 0
    border-radius: 0

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
