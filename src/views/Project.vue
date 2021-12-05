<template lang="pug">
main
  .container
    .row.justify-content-center
      .col-12.col-lg-9
        article(v-html='article' ref='el')
</template>

<script>
import { onBeforeUnmount, ref } from '@vue/composition-api'

import $ from 'cash-dom'
import mediumZoom from 'medium-zoom'

export default {
  name: 'Project',
  metaInfo () {
    const $body = $('<div></div>').append(this.article)
    const title = $body.find('h1').text()
    $body.find('h1, h6').remove() // 移除文章標題和時間
    const description = $body.text().trim().replace(/\n/g, '').substr(0, 150) + '...'
    const img = new URL($body.find('img').prop('src')).pathname // 第一張圖片作為縮圖

    return {
      title,
      meta: [
        { property: 'description', vmid: 'description', content: description },
        { property: 'og:description', vmid: 'og:description', content: description },
        { property: 'og:image', vmid: 'og:image', content: img },
      ],
    }
  },
  setup (_props, { root }) {
    const beforeUnmountTasks = []
    onBeforeUnmount(() => beforeUnmountTasks.forEach(i => i()))

    const el = ref(null)
    const setDom = () => {
      const $imgs = $(el.value).find('img')

      $imgs.each(function () {
        const alt = $(this).prop('alt')
        if (!alt) return
        $(this).wrap('<figure/>').after(`<figcaption>${alt}</figcaption>`)
      })

      const zoom = mediumZoom($imgs.get())
      beforeUnmountTasks.push(() => zoom.detach())
    }

    const article = ref(null)
    const fetch = async (page) => {
      article.value = null

      try {
        article.value = require(`@/contents/${page}.md`)
      } catch (e) {
        root.$router.push('/')
      }

      await root.$nextTick()
      setDom()
    }

    fetch(root.$route.params.name)

    return {
      el,
      article,
      fetch,
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.fetch(to.params.name)
    next()
  },
}
</script>

<style lang="sass" scoped>
@import "~@/assets/css/article"
</style>

<style lang="sass">
.medium-zoom-overlay
  z-index: 1050

.medium-zoom-image.medium-zoom-image--opened
  z-index: 1051
</style>
