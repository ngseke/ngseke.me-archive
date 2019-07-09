<template lang="pug">
#detail
  .container
    .row.justify-content-center
      .col-12.col-lg-9
        transition(name='fade')
          Loader(v-if=`!article`)
          div(v-else v-html=`article`)
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
    $('#navbarContent').collapse('hide')
    $(window).trigger('resize').trigger('scroll')
  },
  beforeRouteUpdate (to, from, next) {
    this.FetchDetail(to.params.name)
    $('#navbarContent').collapse('hide')
    $("html, body").animate({ scrollTop: 0 }, 0)

    next()
  },
  methods:{
    FetchDetail (page) {
      var self = this
      self.article = null
      $.get(`../static/page/${page}.md`, (data) => {
        const promise = new Promise(function(resolve) {
          self.article = marked(data)
          resolve()
        })
        promise.then(() => {
          $('#detail img').each(function (index) {
            let alt = $(this).attr('alt')
            if(alt!='') $(this).after(`<figcaption>▲ ${alt} </figcaption>`)
          })
          if(self.article.indexOf('<!DOCTYPE html>') > -1)
            this.$router.push('/')
        })
      }).fail(() => {
        this.$router.push('/')
      })
    }
  },
}
</script>

<style lang="sass">
@import "../assets/css/style.sass"

#detail
  margin-top: 7rem
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

=fade-transition
  transition: all .5s

.fade-enter
  opacity: 0
  transform: translateY(1rem)

.fade-enter-to
  +fade-transition
  opacity: 1

.embed-responsive
  margin-bottom: 3rem
</style>
