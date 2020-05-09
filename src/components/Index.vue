<template lang="pug">
mixin section(id)
  section(id=id :style=`getSectionStyle('${id}')`)&attributes(attributes)
    .container
      .row.justify-content-around.align-items-center: block

#page
  header(ref='header')
    // Index Cover Image
    .jumbotron.jumbotron-fluid.ngsek.flex-vertical
      .container
        .row.justify-content-center
          .col-6.col-md-12.text-center.d-flex.flex-column.align-items-center
            router-link.about-btn(to='about')
              .logo Xingqiao's Portfolio
            a.btn.btn-light.scroll-down-btn(href='#' @click.prevent='scrollToMain'): fa(icon='angle-down')
  main
    // mcip
    +section(`mcip`)
      .col-12.col-md-5.mb-3
        .work-img
          img.img-fluid.cover(src='@/assets/img/cover/mcip.png' alt='MCIP cover')
      .col-12.col-md-5
        .work-content
          img(src='@/assets/img/logo/mcip.svg' alt='樂台計畫')
          h2.text-light MCIP CMS
          h5.text-light 後台管理系統
          router-link.btn.btn-sm.btn-primary(:to='getRoute("mcip")') Detail

    // em optimization lab
    +section(`emo`)
      .col-12.col-md-5.mb-3
        .work-img
          img.img-fluid.cover(src='@/assets/img/cover/emo.png' alt='EM Optimization Lab Cover')
      .col-12.col-md-5
        .work-content
          img(src='@/assets/img/logo/emo.svg' alt='EM Optimization Lab Logo')
          h2.text-light EM Optimization Lab
          h5.text-light 電磁最佳化實驗室網站
          router-link.btn.btn-sm.btn-primary(:to='getRoute("emo")') Detail
          a.btn.btn-sm.btn-primary(href='http://myweb.ntut.edu.tw/~yschen' target='_blank') Demo
          a.btn.btn-sm.btn-github(href='https://github.com/seanyellow/emo' target='_blank')
            fa(:icon='[`fab`, `github-alt`]')
            |  Github
            
    // Realtime Monitor
    +section(`realtime`)
      .col-12.col-md-5.mb-3
        .work-img
          img.img-fluid.cover(src='@/assets/img/cover/realtime.png' alt='Realtime Monitor Cover')
      .col-12.col-md-5
        .work-content
          h2.text-light Realtime Monitor
          h5.text-light 測速網站爬蟲
          router-link.btn.btn-sm.btn-primary(:to='getRoute("realtime")') Detail
          
    // Boss
    +section(`boss`)
      .col-12.col-md-5.mb-3
        .work-img
          img.img-fluid.cover(src='@/assets/img/cover/boss.png' alt='BOSS Cover')
          .chunchicha-small-sr
            img.chunchicha-small.d-none.d-lg-block(src='@/assets/img/element/products.png' title="We don't actually sell these products.")
      .col-12.col-md-5
        .work-content
          h2.text-light BOSS
          h5.text-light 線上飲料購物系統
          router-link.btn.btn-sm.btn-primary(:to='getRoute("boss")') Detail
          a.btn.btn-sm.btn-primary(href='http://boss.seanyellow.ga' target='_blank') Demo
          a.btn.btn-sm.btn-github(href='https://github.com/seanyellow/boss' target='_blank')
            fa(:icon='[`fab`, `github-alt`]')
            |  Github

    // Gomoku
    +section(`gomoku`)
      .col-12.col-md-5.mb-3
        .work-img
          img.img-fluid.cover(src='@/assets/img/cover/gomoku.png' alt='Gomoku Cover')
      .col-12.col-md-5
        .work-content
          img(src='@/assets/img/logo/gomoku.png' alt='Gomoku Logo')
          h2.text-light Gomoku
          h5.text-light 五子棋對戰
          router-link.btn.btn-sm.btn-primary(:to='getRoute("gomoku")') Detail
          a.btn.btn-sm.btn-primary(href='https://gomoku.ga/' target='_blank')
            fa(icon='gamepad')
            |  Play
          a.btn.btn-sm.btn-github(href='https://github.com/seanyellow/gomoku' target='_blank')
            fa(:icon='[`fab`, `github-alt`]')
            |  Github

    // Raise Your Red Flag
    +section(`flag`)
      .col-12.col-md-6.mb-3
        .work-img
          img.img-fluid.cover(src='@/assets/img/cover/flag.png'  alt='Raise Your Red Flag Logo')
      .col-12.col-md-5
        .work-content
          .logo #[fa(icon='flag')]
          h2 Raise Your Red Flag
          h5 紅旗舉起來
          router-link.btn.btn-sm.btn-primary(:to='getRoute("flag")') Detail
          a.btn.btn-sm.btn-primary(href='https://flag.seanyellow.ga' target='_blank')
            fa(icon='gamepad')
            |  Play
          a.btn.btn-sm.btn-github(href='https://github.com/seanyellow/Raise-Your-Red-Flag' target='_blank')
            fa(:icon='[`fab`, `github-alt`]')
            |  Github

    // Typing Typing!
    +section(`typingtyping`)
      .col-12.col-md-6.mb-3
        .work-img
          img.img-fluid.cover(src='@/assets/img/cover/typingtyping.png' alt='Typing Typing! Logo')
      .col-12.col-md-5
        .work-content
          h2 Typing Typing!
          h5 8-bit 風格打字遊戲
          router-link.btn.btn-sm.btn-primary(:to='getRoute("typingtyping")') Detail
          a.btn.btn-sm.btn-primary(href='/static/file/TypingTyping.zip' target='_blank' data-toggle='tooltip' data-placement='bottom' title='7.7mb')
            fa(icon='download')
            |  Download
          a.btn.btn-sm.btn-github(href='https://github.com/seanyellow/Typing-Typing' target='_blank')
            fa(:icon='[`fab`, `github-alt`]')
            |  Github
</template>

<script>
import Jump from 'jump.js'
import VanillaTilt from 'vanilla-tilt'

export default {
  name: 'Index',
  data () {
    this.backgrounds = {
      '#mcip': require(`@/assets/img/bg/mcip.jpg`),
      '#emo': require(`@/assets/img/bg/emo.jpg`),
      '#realtime': require(`@/assets/img/bg/realtime.jpg`),
      '#boss': require(`@/assets/img/bg/boss.jpg`),
      '#flag': require(`@/assets/img/bg/flag.jpg`),
      '#gomoku': require(`@/assets/img/bg/gomoku.jpg`),
      '#typingtyping': require(`@/assets/img/bg/typingtyping.jpg`),
    }
    return {
      windowWidth: null,
    }
  },
  mounted () {
    this.windowWidth = $(window).width()
    $(window).resize(() => this.windowWidth = $(window).width())
    
    this.$nextTick(() => {
      this.setScrollReveal()
      $('[data-toggle="tooltip"]').tooltip()  // 啟用tooltip
    })

    $(window).trigger('resize').trigger('scroll')
    $('#navbarContent').collapse('hide')
  },
  methods: {
    setTilt () {
      const options = {
        'max-glare': .5,
        glare: true,
        max: 1,
      }

      Object.keys(this.backgrounds)
        .map(_ => document.querySelector(_))
        .filter(_ => _)
        .forEach($el => VanillaTilt.init($el, options))
        
      this.$once('hook:beforeDestroy', this.removeTile)
    },
    removeTile () {
      Object.keys(this.backgrounds)
        .map(_ => document.querySelector(_))
        .filter(_ => _)
        .map(_ => _.vanillaTilt)
        .filter(_ => _)
        .forEach(tilt => tilt.destroy())
    },
    setScrollReveal () {
      const { $ScrollReveal: sr } = this
      
      sr().reveal('.work-img', { distance: 0, scale: 1.1 })
      sr().reveal('.work-content', { origin: 'left', delay: 500 })
      sr().reveal('.chunchicha-small-sr', { origin: 'top', delay: '600', scale: .95, easing: 'ease' })  // 純喫茶
      
      this.$once('hook:beforeDestroy', () => this.$ScrollReveal().destroy())
    },
    scrollToMain () {
      const offset = -$('#nav').outerHeight()
      Jump('main', { offset })
    },
    getSectionStyle (_) {
      const id = `#${_}`
      const img = this.backgrounds[id]
      
      return { backgroundImage: `url('${img}')` }
    },
    getRoute (name) {
      return { name: 'Project', params: { name } }
    }
  },
  watch: {
    windowWidth: {
      async handler (_) {
        await this.$nextTick()
        
        if (_ >= 576) this.setTilt()
        else this.removeTile()
      },
      immediate: true,
    },
  },
}
</script>

<style scoped lang="sass">
header
  height: 100vh
  .jumbotron
    background-image: url('~@/assets/img/bg/index-cover.jpg')
    background-size: cover
  .logo
    font-family: 'Pacifico', cursive
    font-size: 3rem
    
main
  overflow: hidden
  
section
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

.about-btn
  display: inline-block
  transition: transform .5s
  margin-bottom: 5rem
  position: relative
  &::after
    content: ''
    position: absolute
    width: 100%
    background-color: #1a1a1a
    height: 6px
    bottom: 5px
    left: 0
    border-radius: 100px
    transform: scaleX(0)
    transform-origin: left
    transition: transform .5s
  &:hover
    transform: scale(1.05)
    text-decoration: none
    @media (min-width: 768px)
      &::after
        transform: none
</style>
