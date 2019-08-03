<template lang="pug">
mixin section(id)
  section(id=id)
    .container
      .row.justify-content-around.align-items-center: block

#page
  header
    // Index Cover Image
    .jumbotron.jumbotron-fluid.ngsek.flex-vertical(:style='asWindowHeightStyle')
      .container
        .row.justify-content-center
          .col-12.col-lg-5.text-center
            router-link.about-btn(to='about')
              img.img-fluid.sr(src='/static/img/ngsek-01.svg' alt='黃色的我' title='黃色的我')
            a.btn.btn-light.scroll-down-btn(href='#' @click.prevent='scrollToMain'): fa(icon='angle-down')
  main
    // mcip
    +section(`mcip`)
      .col-12.col-md-5.mb-3
        .work-img
          img.img-fluid.cover(src='/static/img/mcip/cover.png' alt='mcip cover')
      .col-12.col-md-5
        .work-content
          img(src='/static/img/mcip/logo.svg' alt='mcip logo')
          h2.text-light MCIP CMS
          h5.text-light #[b 樂台計劃]後台管理系統
          router-link.btn.btn-sm.btn-primary(to=`/work/mcip`) Detail

    // em optimization lab
    +section(`emo`)
      .col-12.col-md-5.mb-3
        .work-img
          img.img-fluid.cover(src='/static/img/emo/cover.png' alt='emo cover')
      .col-12.col-md-5
        .work-content
          img(src='/static/img/emo/logo.svg' alt='emo logo')
          h2.text-light EM Optimization Lab
          h5.text-light 電磁最佳化實驗室網站
          router-link.btn.btn-sm.btn-primary(to=`/work/emo`) Detail
          a.btn.btn-sm.btn-primary(href='http://myweb.ntut.edu.tw/~yschen', target='_blank') Demo
          a.btn.btn-sm.btn-github(href='https://github.com/seanyellow/emo', target='_blank')
            fa(:icon='[`fab`, `github-alt`]')
            |  Github

    // Boss
    +section(`boss`)
      .col-12.col-md-5.mb-3
        .work-img
          img.img-fluid.cover(src='/static/img/boss/cover.png' alt='boss cover')
          .chunchicha-small-sr
            img.chunchicha-small.d-none.d-lg-block(src='/static/img/boss/product.png' title="We don't actually sell these products.")
      .col-12.col-md-5
        .work-content
          h2.text-light BOSS
          h5.text-light 線上飲料購物系統
          router-link.btn.btn-sm.btn-primary(to=`/work/boss`) Detail
          a.btn.btn-sm.btn-primary(href='http://boss.x-q.me', target='_blank') Demo
          a.btn.btn-sm.btn-github(href='https://github.com/seanyellow/boss', target='_blank')
            fa(:icon='[`fab`, `github-alt`]')
            |  Github

    // Gomoku
    +section(`gomoku`)
      .col-12.col-md-5.mb-3
        .work-img
          img.img-fluid.cover(src='/static/img/gomoku/cover.png' alt='gomoku cover')
      .col-12.col-md-5
        .work-content
          img(src='/static/img/gomoku/logo.png' alt='gomoku logo')
          h2.text-light Gomoku
          h5.text-light 五子棋對戰
          router-link.btn.btn-sm.btn-primary(to=`/work/gomoku`) Detail
          a.btn.btn-sm.btn-primary(href='https://gomoku.ga/' target='_blank')
            fa(icon='gamepad')
            |  Play
          a.btn.btn-sm.btn-github(href='https://github.com/seanyellow/gomoku', target='_blank')
            fa(:icon='[`fab`, `github-alt`]')
            |  Github

    // Raise Your Red Flag
    +section(`flag`)
      .col-12.col-md-6.mb-3
        .work-img
          img.img-fluid.cover(src='/static/img/flag/cover.png')
      .col-12.col-md-5
        .work-content
          .logo #[fa(icon='flag')]
          h2 Raise Your Red Flag
          h5 紅旗舉起來
          router-link.btn.btn-sm.btn-primary(to=`/work/flag`) Detail
          a.btn.btn-sm.btn-primary(href='https://flag.x-q.me' target='_blank')
            fa(icon='gamepad')
            |  Play
          a.btn.btn-sm.btn-github(href='https://github.com/seanyellow/Raise-Your-Red-Flag' target='_blank')
            fa(:icon='[`fab`, `github-alt`]')
            |  Github

    // Typing Typing!
    +section(`typingtyping`)
      .col-12.col-md-6.mb-3
        .work-img
          img.img-fluid.cover(src='/static/img/typingtyping/cover.png')
      .col-12.col-md-5
        .work-content
          h2 Typing Typing!
          h5 8-bit 風格打字遊戲
          router-link.btn.btn-sm.btn-primary(to=`/work/typingtyping`) Detail
          a.btn.btn-sm.btn-primary(href='/static/file/TypingTyping.zip' target='_blank' data-toggle='tooltip' data-placement='bottom' title='7.7mb')
            fa(icon='download')
            |  Download
          a.btn.btn-sm.btn-github(href='https://github.com/seanyellow/Typing-Typing' target='_blank')
            fa(:icon='[`fab`, `github-alt`]')
            |  Github
</template>

<script>
import Jump from 'jump.js'

const bgPath = `../static/img/bg/`

export default {
  name: 'Index',
  data () {
    return {
      backgroundTable: {
        '.ngsek': `${bgPath}index-cover.jpg`,
        '#mcip': `https://c.pxhere.com/photos/92/14/dj_music_light_neon_turntable-145322.jpg!d`,
        '#emo': `${bgPath}emo.jpg`,
        '#boss': `${bgPath}boss.jpg`,
        '#flag': `${bgPath}flag.jpg`,
        '#gomoku': `https://c.pxhere.com/photos/56/e0/stones_decorative_stones_ornament_decoration_art_nature_cairn_background-693169.jpg!d`,
        '#typingtyping': `${bgPath}typingtyping.jpg`,
        '#shanlinliang': `${bgPath}shanlinliang.jpg`,
        '#camp2017': `${bgPath}camp2017.png`,
        '#jingshixifu': `${bgPath}jingshixifu.png`,
      }
    }
  },
  mounted () {
    this.top()

    this.windowHeight = $(window).height()  // 設定data.windowHeight值(視窗高度)

    this.$nextTick(() => {
      this.setParallexBg()
      this.setScrollReveal()
      $('[data-toggle="tooltip"]').tooltip()  // 啟用tooltip
    })

    $(window).trigger('resize').trigger('scroll')
    $('#navbarContent').collapse('hide')

  },
  beforeRouteUpdate (to, from, next) {
    next()
  },
  methods: {
    setParallexBg () {
      const table = this.backgroundTable
      Object.keys(table).forEach(_ => $(_).parallax({imageSrc: table[_]}))
    },
    destroyParallexBg () {
      const table = this.backgroundTable
      Object.keys(table).forEach(_ => $(_).parallax('destroy'))
    },
    setScrollReveal () {
      window.sr = this.$ScrollReveal({
        reset: false,
        duration: 1000,
        scale: 1,
      })

      sr.reveal('.sr')
      sr.reveal('.ngsek .sr', { reset: true }, 300)

      sr.reveal('.work-img', { distance: 0, scale: 1.1 })
      sr.reveal('.work-content', { origin: 'left', delay: 500 })

      sr.reveal('.chunchicha-small-sr', { origin: 'top', delay: '600', scale: .95, easing: 'ease' })  // 純喫茶
    },
    scrollToMain () {
      const navHeight = $('#nav').outerHeight()
      Jump('main', { offset: -navHeight })
    },
  },
  computed:{
    asWindowHeightStyle () {
      return {
        height : `${this.windowHeight}px`
      }
    },
  },
  beforeDestroy () {
    this.destroyParallexBg()
  }
}
</script>

<style lang="sass">
.about-btn
  display: block
  transition: all .5s
  margin-bottom: 5rem
  &:hover
    transform: scale(1.05)
</style>
