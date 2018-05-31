<template lang="pug">
#page
  .container
    .row.justify-content-center
      .col-12.col-lg-8
        div(v-html=`article`)
</template>

<script>
import marked from 'marked'

export default {
  name: 'Detail',
  data () {
    return {
      detailName: null,
      article: 'abc',
    }
  },
  mounted () {
    this.detailName = this.$route.params.name
    this.FetchDetail(this.detailName)

    $(window).trigger('resize').trigger('scroll')
  },
  beforeRouteUpdate (to, from, next) {
    next()
  },
  methods:{
    FetchDetail (page) {
      var self = this
      console.log(self.article);
      self.article = '<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'

      $.get(`../static/page/${page}.md`, function(data) {
        self.article = marked(data)
        $('#modal-detail img').each(function (index) {
          var alt = $(this).attr('alt')
          if(alt!='')
            $(this).after(`<figcaption><i class="fa fa-angle-up"></i> ${alt} </figcaption>`)
        })
      })
    }
  },
}
</script>

<style scoped lang="sass">
#page
  margin-top: 6rem
</style>
