<template lang="pug">
#page
  header
    // Index Cover Image
    .jumbotron.jumbotron-fluid.ngsek.flex-vertical(:style='asWindowHeightStyle')
      .container
        .row.justify-content-center
          .col-12.col-lg-5.text-center(v-if='!isBusplay')
            img.img-fluid.sr(src='/static/img/ngsek-01.svg', alt='黃色的我', title='黃色的我')
            a.btn.btn-light.scroll-down-btn(href='#', @click='scrollToMain()')
              fa(icon='angle-down')
          .col-12.col-lg-5.text-center(v-else)
            img.img-fluid.sr(src='/static/img/busplay.svg', alt='Busplay', title='巴士噗累')
            a.btn.btn-light.scroll-down-btn(href='https://bus.x-q.me' target='_blank')
              fa(icon='play')
  main
    // em optimization lab
    section#emo
      .container
        .row.justify-content-around.align-items-center
          .col-12.col-md-5.mb-3
            .work-img
              img.img-fluid.cover(src='/static/img/emo/cover.png', alt='emo cover')
          .col-12.col-md-5
            .work-content
              img(src='/static/img/emo/logo.svg', alt='emo logo')
              h2.text-light EM Optimization Lab
              h5.text-light 電磁最佳化實驗室網站
              router-link.btn.btn-sm.btn-primary(to=`/work/emo`) Detail
              a.btn.btn-sm.btn-primary(href='http://www.ntut.edu.tw/~yschen', target='_blank') Demo
              a.btn.btn-sm.btn-github(href='https://github.com/a92304a92304/EM', target='_blank')
                fa(:icon='[`fab`, `github-alt`]')
                |  Github

    // Boss
    section#boss
      .container
        .row.justify-content-around.align-items-center
          .col-12.col-md-5.mb-3
            .work-img
              img.img-fluid.cover(src='/static/img/boss/cover.png', alt='boss cover')
              .chunchicha-small-sr
                img.chunchicha-small.d-none.d-lg-block(src='/static/img/boss/product.png', title="We don't actually sell this.")
          .col-12.col-md-5
            .work-content
              h2.text-light BOSS
              h5.text-light 線上飲料購物系統
              router-link.btn.btn-sm.btn-primary(to=`/work/boss`) Detail
              a.btn.btn-sm.btn-primary(href='http://boss.x-q.me', target='_blank') Demo
              a.btn.btn-sm.btn-github(href='https://github.com/a92304a92304/boss', target='_blank')
                fa(:icon='[`fab`, `github-alt`]')
                |  Github

    // Typing Typing!
    section#typingtyping
      .container
        .row.justify-content-around.align-items-center
          .col-12.col-md-6.mb-3
            .work-img
              img.img-fluid.cover(src='/static/img/typingtyping/cover.png', key='0')
          .col-12.col-md-5
            .work-content
              h2 Typing Typing!
              h5 8-bit 風格打字遊戲
              router-link.btn.btn-sm.btn-primary(to=`/work/typingtyping`) Detail
              a.btn.btn-sm.btn-primary(href='/static/file/TypingTyping.zip', target='_blank', data-toggle='tooltip', data-placement='bottom', title='7.7mb')
                fa(icon='download')
                |  Download
              a.btn.btn-sm.btn-github(href='https://github.com/a92304a92304/Typing-Typing', target='_blank')
                fa(:icon='[`fab`, `github-alt`]')
                |  Github

    // Raise Your Red Flag
    section#flag
      .container
        .row.justify-content-around.align-items-center
          .col-12.col-md-6.mb-3
            .work-img
              img.img-fluid.cover(src='/static/img/flag/cover.png')
          .col-12.col-md-5
            .work-content
              .logo #[fa(icon='flag')]
              h2 Raise Your Red Flag
              h5 紅旗舉起來
              router-link.btn.btn-sm.btn-primary(to=`/work/flag`) Detail
              a.btn.btn-sm.btn-primary(href='https://flag.x-q.me', target='_blank')
                fa(icon='gamepad')
                |  Play
              a.btn.btn-sm.btn-github(href='https://github.com/a92304a92304/Raise-Your-Red-Flag', target='_blank')
                fa(:icon='[`fab`, `github-alt`]')
                |  Github

    // Shanlinliang
    section#shanlinliang
      .container
        .row.justify-content-around.align-items-center
          .col-12.col-md-6.mb-3
            .work-img
              img.img-fluid.cover(src='/static/img/shanlinliang/cover.png')
          .col-12.col-md-5
            .work-content
              img.img-fluid(src='/static/img/shanlinliang/cover2.png', alt='Shanlinliang')
              h5.text-light 涼扇領導品牌
              router-link.btn.btn-sm.btn-primary(to=`/work/shanlinliang`) Detail
              //- a.btn.btn-sm.btn-primary(href='/static/shanlinliang', target='_blank') Demo

    // 2017CAMP
    section#camp2017
      .container
        .row.justify-content-around.align-items-center
          .col-12.col-md-5
            .work-content0
              img.img-fluid.camp-sr(src='/static/img/camp2017/logo.png')
              h5.mt-3.camp-sr 2017迎新
              router-link.btn.btn-sm.btn-primary(to=`/work/camp2017`) Detail

    // JINGSHI XIFU
    section#jingshixifu
      .container
        .row.justify-content-around.align-items-center
          .col-12.col-md-5
            .work-content0
              img.img-fluid.camp-sr(src='/static/img/jingshixifu/logo.png', title='*無辜* 倫家哪知道婆婆捅一下就不行了辣 >///<')
              h5.mt-3.camp-sr 台灣經典鄉土劇
              router-link.btn.btn-sm.btn-primary(to=`/work/jingshixifu`) Detail
      .ink
        img.img-fluid(src='/static/img/jingshixifu/ink.png', alt='血跡')
</template>

<script>
import Jump from 'jump.js'

export default {
  name: 'Index',
  data () {
    return {
      isBusplay: true,
    }
  },
  mounted () {
    var self = this

    self.windowHeight = $(window).height()  // 設定data.windowHeight值(視窗高度)

    self.setScrollReveal()
    $(() => {$('[data-toggle="tooltip"]').tooltip()}) // 啟用tooltip

    $(window).trigger('resize').trigger('scroll')
    $('#navbarContent').collapse('hide')
    self.setParallexBg()
  },
  beforeRouteUpdate (to, from, next) {
    next()
  },
  methods: {
    setParallexBg () {
      const path = `../static/img/bg/`

      // 頂部cover黃色背景
      if(!this.isBusplay)
        $('.ngsek').parallax({imageSrc: `${path}index-cover.jpg`})
      else
        $('.ngsek').parallax({imageSrc: `https://c.pxhere.com/photos/da/34/bus_asphalt_road_roadway_grey_ground_away_bus_lane-490301.jpg!d`})

      $('#emo').parallax({imageSrc: `${path}emo.jpg`})
      $('#boss').parallax({imageSrc: `${path}boss.jpg`})
      $('#flag').parallax({imageSrc: `${path}flag.jpg`})
      $('#typingtyping').parallax({imageSrc: `${path}typingtyping.jpg`})
      $('#shanlinliang').parallax({imageSrc: `${path}shanlinliang.jpg`})
      $('#camp2017').parallax({imageSrc: `${path}camp2017.png`})
      $('#jingshixifu').parallax({imageSrc: `${path}jingshixifu.png`})
    },
    setScrollReveal () {
      window.sr = this.$ScrollReveal({
        reset: false,
        duration: 1000,
        scale: 1,
      })

      sr.reveal('.sr')
      sr.reveal('.ngsek .sr',{reset: true} ,300)

      sr.reveal('.work-img', { distance: 0, scale: 1.1 })
      sr.reveal('.work-content', { origin: 'left', delay: 500, })

      sr.reveal('.camp-sr', { distance: 0, scale: .9 } ,200)

      sr.reveal('.ink', {scale: .8, delay: 1300, origin: 'bottom', distance: '50px',})

      sr.reveal('.chunchicha-small-sr', {origin: 'top', delay: '600', scale: .95, easing: 'ease'})  // 純喫茶
    },
    scrollToMain () {
      var navHeight = $('#nav').outerHeight()
      Jump('main', {offset: -navHeight})
    },

  },
  computed:{
    asWindowHeightStyle () {
      return {
        height : `${this.windowHeight}px`
      }
    },
  }
}
</script>
