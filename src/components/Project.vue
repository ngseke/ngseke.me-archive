<template lang="pug">
main
  .container
    .row.justify-content-center
      .col-12.col-lg-9
        article(v-html='article')
</template>

<script>
import mediumZoom from 'medium-zoom'

export default {
  name: 'Project',
  metaInfo () {
    const $body = $('<div></div>').append(this.article)
    const title = $body.find('h1').text()
    $body.find('h1, h6').remove()  // 移除文章標題和時間
    const description = $body.text().trim().substr(0, 150) + '...'
    const img = $body.find('img').prop('src')  // 第一張圖片作為縮圖

    return {
      title,
      meta: [
        { property: 'og:title', vmid: 'og:title', content: name },
        { property: 'description', vmid: 'description', content: description },
        { property: 'og:description', vmid: 'og:description', content: description },
        { property: 'og:image', vmid: 'og:image', content: img },
      ]
    }
  },
  data () {
    return {
      article: null,
    }
  },
  created () {
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
      this.setDom()
    },
    setDom () {
      const $imgs = $(this.$el).find('img')
      
      $imgs.each(function () {
        const alt = $(this).prop('alt')
        
        if (alt) {
          $(this)
            .wrap('<figure/>')
            .after(`<figcaption>${alt}</figcaption>`)
        }
      })
      
      mediumZoom($imgs.get())
    }
  },
}
</script>

<style lang="sass" scoped>
@import "~@/assets/css/article"
</style>
