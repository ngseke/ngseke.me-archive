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
          img.img-fluid.cover(src='/static/img/mcip/cover.png' alt='mcip cover')
      .col-12.col-md-5
        .work-content
          img(src='/static/img/mcip/logo.svg' alt='樂台計畫')
          h2.text-light MCIP CMS
          h5.text-light 後台管理系統
          router-link.btn.btn-sm.btn-primary(:to='getProjectRoute("mcip")') Detail

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
          router-link.btn.btn-sm.btn-primary(:to='getProjectRoute("emo")') Detail
          a.btn.btn-sm.btn-primary(href='http://myweb.ntut.edu.tw/~yschen', target='_blank') Demo
          a.btn.btn-sm.btn-github(href='https://github.com/seanyellow/emo', target='_blank')
            fa(:icon='[`fab`, `github-alt`]')
            |  Github
            
    // Realtime Monitor
    +section(`realtime`)
      .col-12.col-md-5.mb-3
        .work-img
          img.img-fluid.cover(src='/static/img/realtime/cover.png' alt='realtime monitor cover')
      .col-12.col-md-5
        .work-content
          h2.text-light Realtime Monitor
          h5.text-light 測速網站爬蟲
          router-link.btn.btn-sm.btn-primary(:to='getProjectRoute("realtime")') Detail
          
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
          router-link.btn.btn-sm.btn-primary(:to='getProjectRoute("boss")') Detail
          a.btn.btn-sm.btn-primary(href='http://boss.seanyellow.ga', target='_blank') Demo
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
          router-link.btn.btn-sm.btn-primary(:to='getProjectRoute("gomoku")') Detail
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
          router-link.btn.btn-sm.btn-primary(:to='getProjectRoute("flag")') Detail
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
          img.img-fluid.cover(src='/static/img/typingtyping/cover.png')
      .col-12.col-md-5
        .work-content
          h2 Typing Typing!
          h5 8-bit 風格打字遊戲
          router-link.btn.btn-sm.btn-primary(:to='getProjectRoute("typingtyping")') Detail
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

const bgPath = `../static/img/bg/`
export default {
  name: 'Index',
  data () {
    this.backgroundTable = {
      '#mcip': `https://c.pxhere.com/photos/92/14/dj_music_light_neon_turntable-145322.jpg!d`,
      '#emo': `${bgPath}emo.jpg`,
      '#realtime': `https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80`,
      '#boss': `${bgPath}boss.jpg`,
      '#flag': `${bgPath}flag.jpg`,
      '#gomoku': `https://c.pxhere.com/photos/56/e0/stones_decorative_stones_ornament_decoration_art_nature_cairn_background-693169.jpg!d`,
      '#typingtyping': `https://images.unsplash.com/photo-1555347873-e5410faa3d10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80`,
      '#shanlinliang': `${bgPath}shanlinliang.jpg`,
      '#camp2017': `${bgPath}camp2017.png`,
    }
    return {
      windowWidth: null,
    }
  },
  mounted () {
    this.top()
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
      const table = this.backgroundTable
      const options = {
        glare: true,
        'max-glare': .5,
        max: 1,
      }

      Object.keys(table).some(_ => {
        const element = document.querySelector(_)
        if (!element) return true

        VanillaTilt.init(element, options)

        this.$once('hook:beforeDestroy', () => {
          const tilt = element.vanillaTilt
          if (tilt) tilt.destroy()
        })
      })
    },
    setScrollReveal () {
      const { $ScrollReveal: sr } = this
      
      sr().reveal('.ngsek .sr', { reset: true }, 300)
      
      sr().reveal('.work-img', { distance: 0, scale: 1.1 })
      sr().reveal('.work-content', { origin: 'left', delay: 500 })

      sr().reveal('.chunchicha-small-sr', { origin: 'top', delay: '600', scale: .95, easing: 'ease' })  // 純喫茶
      
      this.$once('hook:beforeDestroy', () => this.$ScrollReveal().destroy())
    },
    scrollToMain () {
      const navHeight = $('#nav').outerHeight()
      Jump('main', { offset: -navHeight })
    },
    getSectionStyle (_) {
      const id = `#${_}`
      const url = this.backgroundTable[id]
      return { backgroundImage: `url('${url}')` }
    },
    getProjectRoute (name) {
      return { name: 'Project', params: { name } }
    }
  },
  watch: {
    windowWidth: {
      async handler (_) {
        await this.$nextTick()
        
        if (_ >= 576) {
          this.setTilt()
        } else {
          this.setTilt(true)
        }
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
    background-image: url('https://images.unsplash.com/photo-1530543787849-128d94430c6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80')
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
