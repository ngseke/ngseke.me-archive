<template lang="pug">
.sticky-title
  .img(:style='{ backgroundImage: `url(${cover})` }')
  h2 {{ text }}
</template>

<script>
export default {
  props: {
    cover: String,
    text: String,
  },
}
</script>

<style scoped lang="sass">
.sticky-title
  position: sticky
  top: 6rem
  .img
    $size: 10rem
    +wh($size)
    background-color: $ngsek
    background-size: cover
    background-position: center center
  @include media-breakpoint-up(lg)
    margin-bottom: 5rem
    padding: 2rem 0
    .img
      $size: 20rem
      +wh($size)

h2
  white-space: nowrap
  mix-blend-mode: overlay
  overflow: hidden
  position: absolute
  bottom: .5rem
  left: 0
  font-size: 3.5rem
  max-width: 100%
  padding-left: 2rem
  @include media-breakpoint-up(lg)
    font-size: 4.5rem
    top: 20%
    right: 3rem
    left: auto
    bottom: auto
</style>
