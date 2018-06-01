<template lang="pug">
#detail
  .container
    .row.justify-content-center
      .col-12.col-lg-9(v-if=`!article`)
        Loader
      .col-12.col-lg-9(v-html=`article`)
</template>

<script>
import marked from 'marked'
import Loader from '@/components/Loader'

export default {
  name: 'Work',
  data () {
    return {
      article: null,
    }
  },
  components: {
    Loader,
  },
  mounted () {
    this.FetchDetail(this.$route.params.name)
    $(window).trigger('resize').trigger('scroll')
  },
  beforeRouteUpdate (to, from, next) {
    this.FetchDetail(to.params.name)
    next()
  },
  methods:{
    FetchDetail (page) {
      var self = this
      self.article = null
      
      $.get(`../static/page/${page}.md`, function(data) {
        const promise = new Promise(function(resolve) {
          self.article = marked(data)
          resolve()
        })
        promise.then(() => {
          $('#detail img').each(function (index) {
            let alt = $(this).attr('alt')
            if(alt!='') $(this).after(`<figcaption><i class="fa fa-angle-up"></i> ${alt} </figcaption>`)
          })
        })
      })
    }
  },
}
</script>

<style lang="sass">
@import "../assets/css/style.sass"

#detail
  margin-top: 8rem
  img
    display: block
    max-width: 400px
    height: auto
    +mx(auto)
    margin-top: 1rem
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

@media (max-width: 576px)
  #detail
    img
      max-width: 100%
</style>
