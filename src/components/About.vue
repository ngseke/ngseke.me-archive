<template lang="pug">
mixin card-body-row
  section#about
    .container
      .row.justify-content-around.align-items-center
        .col-12.col-md-8.profile
          .card
            .card-body
              .row
                block

-
  let itemCount = 0
  const itemStyle = (number = 0) => {
    itemCount += number
    return { animationDelay: `${itemCount++ * .1 + .2 + .3}s` }
  }

+card-body-row
  .col-12.col-lg-3.img-area
    .avatar
      .profile-mask
      img(src='/static/img/profile.jpg')
  .col-12.col-lg-9.mt-3
    h4.text-center.text-lg-left.name.item(title='ㄏㄨㄤˊㄒㄧㄥˇㄑㄧㄠˊ' style=itemStyle()) 黃省喬
    h6.mb-2.text-muted.text-center.text-lg-left.item(style=itemStyle()) Huang Xingqiao
    p.text-center.text-lg-left.item(style=itemStyle())
      small.mr-3(title='Education')
        fa(icon='book')
        |  NTUT / CSIE
      small.mr-3(title='Location')
        fa(icon='map-marker')
        |  Taipei, Taiwan
    hr
    p.item.text-center.text-lg-left(style=itemStyle())
      | 我是 Sean，畢業於北科資工系，專注於網頁設計前後端。

    p.mb-4.text-center.text-lg-left
      span.skill(v-for='(s, index) in profile.skills' :style='getSkillStyle(index)')
        span(v-html='s.icon' :title='s.title' v-if='s.icon')
        .text(v-else) {{ s.title }}

    p.text-center.text-lg-left.item(style=itemStyle(4))
      a.btn-social.mr-2(:href='s.url', target='_blank', v-for='s in profile.socials', :title='s.title')
        i(:class='s.icon')
</template>

<script>
import Jump from 'jump.js'

export default {
  name: 'About',
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
          {title: 'Pug'},
        ],
        socials: [
          {icon:'fab fa-linkedin', url:'http://www.linkedin.com/in/xingqiao-huang', title:'LinkedIn'},
          {icon:'fab fa-github', url:'https://github.com/seanyellow', title:'GitHub'},
          {icon:'fas fa-envelope', url:'mailto:a92304a92304@gmail.com', title:'Email'},
        ],
      },
    }
  },
  mounted () {
    $(window).trigger('resize').trigger('scroll')
    $('#navbarContent').collapse('hide')

    Jump('html')
  },
  methods: {
    getSkillStyle (i) {
      const base = .8 + .3
      const delta = .08
      return { animationDelay: `${i * delta + base}s` }
    },
  }
}
</script>

<style scoped lang="sass">
@import "../assets/css/function"
@import "../assets/css/color"

$distance: .5rem
$duration: .7s
$time-function: ease
$transition: box-shadow $duration $time-function, transform $duration $time-function, opacity $duration $time-function

@keyframes item
  from
    opacity: 0
    transform: translateX(-1.5rem)
  to
    opacity: 1

@keyframes skill-in
  from
    opacity: 0
    transform: scale(.4)
  to
    opacity: 1

@keyframes profile-mask-in
  from
    transform: scale(1)
  to
    transform: scale(0)

#about
  margin-top: 6rem

.profile .card
  transition: $transition
  box-shadow: 1rem 1rem $ngsek
  .item
    animation: item 1.2s cubic-bezier(0.77, 0, 0.175, 1)
    animation-fill-mode: backwards
  .img-area
    position: relative
  .name
    background: linear-gradient($ngsek, $ngsek-dark)
    -webkit-background-clip: text
    -moz-background-clip: text
    background-clip: text
    color: transparent
  .skill
    transition: all .3s
    text-align: center
    margin-right: .5rem
    font-size: 2rem
    min-width: 2rem
    display: inline-block
    vertical-align: middle
    animation: skill-in .5s cubic-bezier(0.77, 0, 0.175, 1)
    animation-fill-mode: backwards

    .text
      font-size: 1rem
    &:hover
      color: $ngsek
      transform: scale(1.3)

  &:hover
    box-shadow: (1rem + $distance * 2) (1rem + $distance * 2) lighten($ngsek, 5%)
    // transform: translate(-$distance, -$distance)
    .avatar
      transform: translate(-$distance, -$distance)
      opacity: .9

  .avatar
    transition: $transition
    position: absolute
    max-height: 16rem
    top: -3rem
    right: 2rem
    overflow: hidden
    img
      position: relative
      filter: grayscale(1)
      width: auto
      max-height: 16rem

.btn-social
  font-size: 1.2rem
  color: $ngsek
  transition: color .3s
  &:hover
    color: $ngsek-dark

// 調整行動版大頭貼樣式
@media (max-width: 992px)
  .profile
    .card
      &:hover
        .avatar
          transform: none
          opacity: 1
      .img-area
        text-align: center
      .avatar
        position: static
        img
          border-radius: 100%
          width: 9rem
          height: 9rem
          object-fit: cover
  .profile-mask
    display: none

@media (max-width: 576px)
  .profile
    padding-left: 0
    padding-right: 0
    .card
      border: 0px white solid
      box-shadow: 0rem 0rem
      &:hover
        box-shadow: 0rem 0rem
        transform: none
      .img-area
        text-align: center

.profile-mask
  z-index: 1000
  position: absolute
  bottom: -30%
  right: -50%
  background-color: $ngsek
  border-radius: 100rem
  width: 25rem
  height: 25rem
  animation: profile-mask-in 1.7s cubic-bezier(0.77, 0, 0.175, 1)
  animation-fill-mode: backwards
  transform: scale(0)
  transform-origin: right bottom
</style>
