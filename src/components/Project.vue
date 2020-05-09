<template lang="pug">
#detail
  .container
    .row.justify-content-center
      .col-12.col-lg-9
        transition(name='fade')
          article(v-html=`article`)
</template>

<script>
export default {
  name: 'Project',
  data () {
    return {
      article: null,
    }
  },
  mounted () {
    this.fetch(this.$route.params.name)
  },
  beforeRouteUpdate (to, from, next) {
    this.fetch(to.params.name)
    next()
  },
  methods:{
    async fetch (page) {
      this.article = null
      
      try {
        this.article = require(`@/assets/page/${page}.md`)
      } catch (e) {
        this.$router.push('/')
      }
      
      await this.$nextTick()
      
      $('#detail img').each(function (index) {
        const alt = $(this).attr('alt')
        if (alt) $(this).after(`<figcaption>▲ ${alt} </figcaption>`)
      })
      
      this.setTitle()
    },
    setTitle () {
      const pageName = $('h1').text()
      if (pageName) document.title = `${pageName} ｜ ${this.$titleName}`
    }
  },
}
</script>

<style lang="sass" scoped>
@import "~@/assets/css/style.sass"

#detail /deep/
  margin-top: 7rem
  img
    display: block
    max-width: 400px
    height: auto
    +mx(auto)
    margin-top: 1rem
    @media (max-width: 576px)
      max-width: 100%
  figcaption
    text-align: center
    margin: 1rem 0
  .embed-responsive
    max-width: 80%
  h1, h2, h3, h4
    background-color: rgba(white,1)

  h1
    color: $ngsek
  h2
    &::before, &::after
      content: ''
      color: rgba(black, .5)
      font-weight: 900
    &::before
      content: '/'
      display: inline-block
      margin-right: 1rem

  p
    line-height: 1.7rem
    letter-spacing: .1rem
    margin-bottom: 1.5rem
    
  .embed-responsive
    margin-bottom: 3rem

.fade
  &-enter
    opacity: 0
    transform: translateY(1rem)
  &-enter-to
    transition: translateY .5s, opacity .5s
    opacity: 1
</style>
