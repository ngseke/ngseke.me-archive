<template lang="pug">
section(:id='id' :style='style' :class='{ active: intersectionRatio === 1 }')
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
import VanillaTilt from 'vanilla-tilt'

export default {
  name: 'IndexSection',
  props: {
    id: String,
    bg: String,
    isTile: Boolean
  },
  mounted () {
    this.setTilt()
    this.setIntersectionObserver()
  },
  data () {
    return {
      intersectionRatio: null
    }
  },
  methods: {
    setTilt () {
      const options = {
        'max-glare': 0.1,
        glare: true,
        max: 1
      }

      VanillaTilt.init(this.$el, options)
      this.$once('hook:beforeDestroy', this.removeTile)
    },
    removeTile () {
      const { vanillaTilt: tilt } = this.$el
      if (tilt) tilt.destroy()
    },
    setIntersectionObserver () {
      const observer = new IntersectionObserver(([entries]) => {
        this.intersectionRatio = entries.intersectionRatio
      }, { threshold: [0, 0.25, 0.5, 0.75, 1] })
      observer.observe(this.$el)
      this.$once('hook:beforeDestroy', () => observer.disconnect())
    }
  },
  computed: {
    style () {
      return { backgroundImage: `url('${this.bg}')` }
    }
  },
  watch: {
    isTile: {
      async handler (_) {
        await this.$nextTick()

        if (this.isTile) this.setTilt()
        else this.removeTile()
      },
      immediate: true
    }
  }
}
</script>

<style scoped lang="sass">
section
  +py(7rem)
  background-size: cover
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
  @media (max-width: 576px)
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
    margin-bottom: 2rem

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
