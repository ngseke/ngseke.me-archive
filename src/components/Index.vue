<template lang="pug">
div
  IndexHeader

  main
    //- MCIP CMS
    IndexSection(id='mcip' :bg='require(`@/assets/img/bg/mcip.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(v-lazy='require(`@/assets/img/cover/mcip.png`)' alt='MCIP Cover')
      template(slot='content')
        img(v-lazy='require(`@/assets/img/logo/mcip.svg`)' alt='樂台計畫')
        .title.text-light MCIP Official Website
        .subtitle.text-light #[b 樂台計畫]官方網站
        router-link.btn.btn-sm.btn-primary(:to='getRoute("mcip")') Detail
        a.btn.btn-sm.btn-primary(href='https://mcip.ml/' target='_blank') Demo

    //- MCIP CMS
    IndexSection(id='mcip-cms' :bg='require(`@/assets/img/bg/mcip-cms.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(v-lazy='require(`@/assets/img/cover/mcip-cms.png`)' alt='MCIP CMS Cover')
      template(slot='content')
        img(v-lazy='require(`@/assets/img/logo/mcip-cms.svg`)' alt='樂台計畫')
        .title.text-light MCIP CMS
        .subtitle.text-light #[b 樂台計畫]後台管理系統
        router-link.btn.btn-sm.btn-primary(:to='getRoute("mcip-cms")') Detail

    //- EM Optimization Lab
    IndexSection(id='emo' :bg='require(`@/assets/img/bg/emo.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(v-lazy='require(`@/assets/img/cover/emo.png`)' alt='EM Optimization Lab Cover')
      template(slot='content')
        img(v-lazy='require(`@/assets/img/logo/emo.svg`)' alt='EM Optimization Lab Logo')
        .title.text-light EM Optimization Lab
        .subtitle.text-light #[b 電磁最佳化實驗室]網站
        router-link.btn.btn-sm.btn-primary(:to='getRoute("emo")') Detail
        a.btn.btn-sm.btn-primary(href='https://myweb.ntut.edu.tw/~yschen/' target='_blank') Demo
        a.btn.btn-sm.btn-github(href='https://github.com/ngseke/emo' target='_blank')
          fa(:icon='[`fab`, `github-alt`]')
          |  Github

    //- Realtime Monitor
    IndexSection(id='realtime' :bg='require(`@/assets/img/bg/realtime.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(v-lazy='require(`@/assets/img/cover/realtime.png`)' alt='Realtime Monitor Cover')
      template(slot='content')
        .title.text-light Realtime Monitor
        .subtitle.text-light 測速網站爬蟲
        router-link.btn.btn-sm.btn-primary(:to='getRoute("realtime")') Detail

    //- Boss
    IndexSection(id='boss' :bg='require(`@/assets/img/bg/boss.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(v-lazy='require(`@/assets/img/cover/boss.png`)' alt='BOSS Cover')
        .chunchicha-small-sr
          img.chunchicha-small.d-none.d-lg-block(src='@/assets/img/element/products.png' title="We don't actually sell these products.")
      template(slot='content')
        .title.text-light BOSS
        .subtitle.text-light 線上飲料購物系統
        router-link.btn.btn-sm.btn-primary(:to='getRoute("boss")') Detail
        a.btn.btn-sm.btn-primary(href='http://boss.ngseke.me' target='_blank') Demo
        a.btn.btn-sm.btn-github(href='https://github.com/ngseke/boss' target='_blank')
          fa(:icon='[`fab`, `github-alt`]')
          |  Github

    //- Gomoku
    IndexSection(id='gomoku' :bg='require(`@/assets/img/bg/gomoku.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(v-lazy='require(`@/assets/img/cover/gomoku.png`)' alt='Gomoku Cover')
      template(slot='content')
        img(v-lazy='require(`@/assets/img/logo/gomoku.png`)' alt='Gomoku Logo')
        .title.text-light Gomoku
        .subtitle.text-light 五子棋對戰
        router-link.btn.btn-sm.btn-primary(:to='getRoute("gomoku")') Detail
        a.btn.btn-sm.btn-primary(href='https://gomoku.ga/' target='_blank')
          fa(icon='gamepad')
          |  Play
        a.btn.btn-sm.btn-github(href='https://github.com/ngseke/gomoku' target='_blank')
          fa(:icon='[`fab`, `github-alt`]')
          |  Github

    //- Raise Your Red Flag
    IndexSection(id='flag' :bg='require(`@/assets/img/bg/flag.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(v-lazy='require(`@/assets/img/cover/flag.png`)'  alt='Raise Your Red Flag Logo')
      template(slot='content')
        .logo #[fa(icon='flag')]
        .title Raise Your Red Flag
        .subtitle 紅旗舉起來
        router-link.btn.btn-sm.btn-primary(:to='getRoute("flag")') Detail
        a.btn.btn-sm.btn-primary(href='https://raise-flag.web.app' target='_blank')
          fa(icon='gamepad')
          |  Play
        a.btn.btn-sm.btn-github(href='https://github.com/ngseke/Raise-Your-Red-Flag' target='_blank')
          fa(:icon='[`fab`, `github-alt`]')
          |  Github

    //- Typing Typing!
    IndexSection(id='typingtyping' :bg='require(`@/assets/img/bg/typingtyping.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(v-lazy='require(`@/assets/img/cover/typingtyping.png`)' alt='Typing Typing! Logo')
      template(slot='content')
        .title Typing Typing!
        .subtitle 8-bit 風格打字遊戲
        router-link.btn.btn-sm.btn-primary(:to='getRoute("typingtyping")') Detail
        a.btn.btn-sm.btn-primary(:href='`/file/TypingTyping.zip`' target='_blank' data-toggle='tooltip' data-placement='bottom' title='7.7mb')
          fa(icon='download')
          |  Download
        a.btn.btn-sm.btn-github(href='https://github.com/ngseke/Typing-Typing' target='_blank')
          fa(:icon='[`fab`, `github-alt`]')
          |  Github
</template>

<script>
import $ from 'jquery'
import ScrollReveal from 'scrollreveal'

import IndexSection from '@/components/index/IndexSection.vue'
import IndexHeader from '@/components/index/IndexHeader.vue'

export default {
  name: 'Index',
  components: { IndexSection, IndexHeader },
  data () {
    return {
      windowWidth: null,
      publicPath: process.env.BASE_URL
    }
  },
  async mounted () {
    this.windowWidth = $(window).width()
    $(window).resize(() => {
      this.windowWidth = $(window).width()
    })

    await this.$nextTick()
    this.setScrollReveal()
    this.setTooltip()
  },
  methods: {
    setScrollReveal () {
      ScrollReveal({ reset: false, duration: 1000, scale: 1 })

      const sr = ScrollReveal

      sr().reveal('.work-img', { distance: 0, scale: 1.1 })
      sr().reveal('.work-content', { origin: 'left', delay: 500 })
      sr().reveal('.chunchicha-small-sr', { origin: 'top', delay: '600', scale: 0.95, easing: 'ease' }) // 純喫茶

      this.$once('hook:beforeDestroy', () => ScrollReveal().destroy())
    },
    setTooltip () {
      const $el = $('[data-toggle="tooltip"]').tooltip()
      this.$once('hook:beforeDestroy', () => $el.tooltip('dispose'))
    },
    getRoute (name) {
      return { name: 'Project', params: { name } }
    }
  },
  computed: {
    isTile () {
      return this.windowWidth >= 576
    }
  }
}
</script>

<style scoped lang="sass">
@import "~@/assets/css/index-section"

main
  overflow: hidden
</style>
