<template lang="pug">
section(:id='id' :style='style')
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
    isTile: Boolean,
  },
  mounted () {
    this.setTilt()
  },
  methods: {
    setTilt () {
      const options = {
        'max-glare': .5,
        glare: true,
        max: 1,
      }

      VanillaTilt.init(this.$el, options)
      this.$once('hook:beforeDestroy', this.removeTile)
    },
    removeTile () {
      const { vanillaTilt: tilt } = this.$el
      if (tilt) tilt.destroy()
    },
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
      immediate: true,
    },
  }
}
</script>

<style scoped lang="sass">
@import "~@/assets/css/function"
  
section
  +py(7rem)
  background-size: cover
  transform-style: preserve-3d
  margin: 2rem
  border-radius: 1rem
  margin-bottom: 3rem
  box-shadow: 0 1rem 1.5rem rgba(#1e1e1e, 0.2)
  .container
    transition: transform .4s
  &:hover
    .container
      transform: translateZ(2rem)
      
  //- 手機版移除 tilt 效果
  @media (max-width: 576px)
    margin: 0
    border-radius: 0
    .container
      transform: none
    &:hover
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
  h5
    letter-spacing: .5rem
    font-weight: 200
    margin-bottom: 1.25rem
  h2, h5
    text-shadow: 0 0 5px rgba(white, .8)
    &.text-light
      text-shadow: 0 0 5px rgba(black, .3), 0 0 10px rgba(black, .8)
</style>
