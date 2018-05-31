<template lang="pug">
#page
  header
    // Index Cover Image
    .jumbotron.jumbotron-fluid.ngsek.flex-vertical(:style='asWindowHeightStyle')
      .container
        .row.justify-content-center
          .col-12.col-lg-5.text-center
            img.img-fluid.sr(src='../assets/img/ngsek-01.svg', alt='黃色的我', title='黃色的我')
            a.btn.btn-light.scroll-down-btn(href='#', @click='ScrollToMain()')
              i.fas.fa-angle-down

  main
    // em optimization lab
    section#emo
      .container
        .row.justify-content-around.align-items-center
          .col-12.col-md-5.mb-3
            .work-img
              img.img-fluid.cover(src='../assets/img/emo/cover.png', alt='emo cover')
          .col-12.col-md-5
            .work-content
              img(src='../assets/img/emo/logo.svg', alt='emo logo')
              h2.text-light EM Optimization Lab
              h5.text-light 電磁最佳化實驗室網站
              a.btn.btn-sm.btn-primary(href='http://www.ntut.edu.tw/~yschen', target='_blank') Demo
              a.btn.btn-sm.btn-github(href='https://github.com/a92304a92304/EM', target='_blank')
                i.fab.fa-github-alt
                |  Github

    // Boss
    section#boss
      .container
        .row.justify-content-around.align-items-center
          .col-12.col-md-5.mb-3
            .work-img
              img.img-fluid.cover(src='../assets/img/boss/cover.png', alt='boss cover')
              .chunchicha-small-sr
                img.chunchicha-small.d-none.d-lg-block(src='../assets/img/boss/product.png', title="We don't actually sell this.")
          .col-12.col-md-5
            .work-content
              h2.text-light BOSS
              h5.text-light 線上飲料購物系統
              router-link.btn.btn-sm.btn-primary(to=`detail/boss`) Detail
              a.btn.btn-sm.btn-primary(href='http://boss.x-q.me', target='_blank') Demo
              a.btn.btn-sm.btn-github(href='https://github.com/a92304a92304/boss', target='_blank')
                i.fab.fa-github-alt
                |  Github

    // Typing Typing!
    section#typingtyping
      .container
        .row.justify-content-around.align-items-center
          .col-12.col-md-6.mb-3
            .work-img
              img.img-fluid.cover(src='../assets/img/typingtyping/cover.png', key='0')
              img.img-fluid.cover(src='../assets/img/typingtyping/cover1.png', hidden='', key='1')
          .col-12.col-md-5
            .work-content
              h2 Typing Typing!
              h5 8-bit 風格打字遊戲
              router-link.btn.btn-sm.btn-primary(to=`detail/typingtyping`) Detail
              a.btn.btn-sm.btn-primary(href='./file/TypingTyping.zip', target='_blank', data-toggle='tooltip', data-placement='bottom', title='7.7mb')
                i.fas.fa-download
                |  Download
              a.btn.btn-sm.btn-github(href='https://github.com/a92304a92304/Typing-Typing', target='_blank')
                i.fab.fa-github-alt
                |  Github

    // Shanlinliang
    section#shanlinliang
      .container
        .row.justify-content-around.align-items-center
          .col-12.col-md-6.mb-3
            .work-img
              img.img-fluid.cover(src='../assets/img/shanlinliang/cover.png')
          .col-12.col-md-5
            .work-content
              img.img-fluid(src='../assets/img/shanlinliang/cover2.png', alt='Shanlinliang')
              h5.text-light 涼扇領導品牌
              router-link.btn.btn-sm.btn-primary(to=`detail/shanlinliang`) Detail
              a.btn.btn-sm.btn-primary(href='./shanlinliang', target='_blank') Demo

    // 2017CAMP
    section#camp2017
      .container
        .row.justify-content-around.align-items-center
          .col-12.col-md-5
            .work-content0
              img.img-fluid.camp-sr(src='../assets/img/camp2017/logo.png')
              h5.mt-3.camp-sr 2017迎新
              router-link.btn.btn-sm.btn-primary(to=`detail/camp2017`) Detail

    // JINGSHI XIFU
    section#jingshixifu
      .container
        .row.justify-content-around.align-items-center
          .col-12.col-md-5
            .work-content0
              img.img-fluid.camp-sr(src='../assets/img/jingshixifu/logo.png', title='*無辜* 倫家哪知道婆婆捅一下就不行了辣 >///<')
              h5.mt-3.camp-sr 台灣經典鄉土劇
              router-link.btn.btn-sm.btn-primary(to=`detail/jingshixifu`) Detail
      .ink
        img.img-fluid(src='../assets/img/jingshixifu/ink.png', alt='血跡')

    // About
    section#about
      .container
        .row.justify-content-around.align-items-center

          .col-12.col-md-8.profile
            .card
              .card-body
                .row
                  .col-12.col-lg-3.text-center
                    img.text-center.img-fluid.rounded-circle.mb-3(src='../assets/img/profile.jpg', style='filter:grayscale(1); max-height:8rem;')
                  .col-12.col-lg-9.mt-3
                    h4.text-center.text-lg-left.name.profile-item(title='ㄏㄨㄤˊㄒㄧㄥˇㄑㄧㄠˊ') 黃省喬
                    h6.mb-2.text-muted.text-center.text-lg-left.profile-item Huang Xingqiao
                    p.text-center.text-lg-left.profile-item
                      small.mr-3(title='Education')
                        i.fa.fa-book
                        |  NTUT / CSIE
                      small.mr-3(title='Location')
                        i.fa.fa-map-marker
                        |  Taipei, Taiwan
                    hr
                    p.profile-item.text-center.text-lg-left
                      | 北科資工系大三，專注於網頁設計前後端。

                    p.mb-4.text-center.text-lg-left
                      span.skill(v-for='s in profile.skills')
                        span(v-html='s.icon', :title='s.title')
                      span.skill.text Pug

                    //- Social Icons
                    p.text-center.text-lg-left.profile-item
                      a.btn-social.mr-2(:href='s.url', target='_blank', v-for='s in profile.socials', :title='s.title')
                        i(:class='s.icon')
</template>

<script>

export default {
  name: 'Index',
  data () {
    return {
      profile: {
        skills: [
          {icon: '<i class="fab fa-vuejs"></i>', title: 'Vue.js'},
          {icon: '<i class="fab fa-sass"></i>', title: 'Sass'},
          {icon: '<i class="fab fa-gulp"></i>', title: 'Gulp'},
          {icon: '<i class="fab fa-npm"></i>', title: 'npm'},
          {icon: '<i class="fab fa-php"></i>', title: 'PHP'},
          {icon: '<i class="fab fa-js"></i>', title: 'JavaScript'},
          {icon: '<i class="fab fa-html5"></i>', title: 'HTML5'},
          {icon: '<i class="fab fa-css3-alt"></i>', title: 'CSS3'},
        ],
        socials: [
          {icon:'fab fa-linkedin', url:'http://www.linkedin.com/in/xingqiao-huang', title:'LinkedIn'},
          {icon:'fab fa-github', url:'https://github.com/a92304a92304', title:'GitHub'},
          {icon:'fas fa-envelope', url:'mailto:a92304a92304@gmail.com', title:'Email'},
          {icon:'fab fa-youtube', url:'https://www.youtube.com/a92304a92304', title:'Youtube'},
        ],
      },
    }
  },
  mounted () {
    var self = this

    self.SetScrollReveal()
    self.ScrollSpy()
    self.SetParallexBg()

    $(function () {$('[data-toggle="tooltip"]').tooltip()}) // 啟用tooltip

    self.windowHeight = $(window).height()  // 設定data.windowHeight值(視窗高度)
    $(window).resize(function () {
      self.windowHeight = $(window).height()
    })

    // $('#nav a').click(function () {
    //   $('#navbarContent').collapse('hide')
    // })
    $(window).trigger('resize').trigger('scroll')

  },
  beforeRouteUpdate (to, from, next) {
    next()
  },
  methods: {
    SetParallexBg () {
      const path = `../static/img/bg/`
      // 頂部cover黃色背景
      $('.ngsek').parallax({imageSrc: `${path}index-cover.jpg`})
      $('#emo').parallax({imageSrc: `${path}emo.jpg`})
      $('#boss').parallax({imageSrc: `${path}boss.jpg`})
      $('#typingtyping').parallax({imageSrc: `${path}typingtyping.jpg`})
      $('#shanlinliang').parallax({imageSrc: `${path}shanlinliang.jpg`})
      $('#camp2017').parallax({imageSrc: `${path}camp2017.png`})
      $('#jingshixifu').parallax({imageSrc: `${path}jingshixifu.png`})
    },
    SetScrollReveal () {
      window.sr = this.$ScrollReveal({
        reset: false,
        duration: 1000,
        scale: 1,
      })

      sr.reveal('.sr')
      sr.reveal('.ngsek .sr',{reset: true} ,300)

      sr.reveal('.work-img', { distance: 0, scale: 1.1 })
        .reveal('.work-content', { origin: 'left', delay: 500, })

      sr.reveal('.camp-sr', { distance: 0, scale: .9 } ,200)

      // 名片之各項目
      sr.reveal('.profile-item', { origin: 'bottom', delay: 300}, 100)
        .reveal('.skill', {scale: .4, distance: 0, delay: 800}, 100)
        .reveal('.ink', {scale: .8, delay: 1300, origin: 'bottom', distance: '50px',})

      // 純喫茶
      sr.reveal('.chunchicha-small-sr', {origin: 'top', delay: '600', scale: .95, easing: 'ease'})
    },
    ScrollSpy () {
      var navHeight = $('#nav').outerHeight()
      $('body').scrollspy({ target: '#nav', offset: navHeight})
    },
    ScrollToMain () {
      var navHeight = $('#nav').outerHeight()
      this.$Jump('main',{offset: -navHeight})
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

<style scoped lang="sass">

</style>
