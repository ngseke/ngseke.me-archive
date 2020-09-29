<template lang="pug">
-
  let count = 0
  const itemStyle = (offset = 0) => {
    count += offset
    return { animationDelay: `${count++ * .1 + .2 + .3}s` }
  }
section#about: .container: .row.justify-content-around.align-items-center
  .col-12.col-md-8.profile: .card: .card-body: .row
    .col-12.col-lg-3.img-area
      .avatar
        .profile-mask(:class='{ play: isLoaded, loading: !isLoaded }')
        img(src='@/assets/img/profile.jpg' @load='imageLoaded')
    .col-12.col-lg-9.mt-3
      h4.text-center.text-lg-left.name.item(title='ㄏㄨㄤˊㄒㄧㄥˇㄑㄧㄠˊ' style=itemStyle()) 黃省喬
      h6.mb-2.text-muted.text-center.text-lg-left.item(style=itemStyle()) Huang Xingqiao
      p.text-center.text-lg-left.item(style=itemStyle())
        small.mr-3(title='Title')
          fa(icon='briefcase')
          |  Frontend Developer
        small.mr-3(title='Education')
          fa(icon='book')
          |  NTUT CSIE
        small.mr-3(title='Location')
          fa(icon='map-marker')
          |  Taipei, Taiwan
        
      hr
      p.item.text-center.text-lg-left.description(style=itemStyle())
        | Hi, I’m Sean 👋
        | 現職前端工程師，堅持產出
        a(href='https://github.com/ryanmcdermott/clean-code-javascript' target='_blank') 無瑕程式碼
        | 是我的開發格言。
        | 擁有二年以上前端實務開發經驗，對於 Vue.js 框架尤其掌握，熱衷於探究各種前端領域的新鮮事。

      p.mb-4.text-center.text-lg-left
        span.skill(
          v-for='(s, index) in profile.skills'
          :style='getSkillStyle(index)'
        )
          fa(:icon='[`fab`, s.icon]' :title='s.title' v-if='s.icon')
          .text(v-else) {{ s.title }}

      p.text-center.text-lg-left.item(style=itemStyle(4))
        a.btn-social.mr-2(
          v-for='{ title, icon, url } in profile.socials'
          :href='url'
          target='_blank'
          :title='title'
        )
          fa.ml-1(:icon='icon' v-if='icon')
</template>

<script>
const title = 'About Me'
const description = `Hi, I’m Sean 👋 現職前端工程師，堅持產出無瑕程式碼是我的開發格言。 擁有二年以上前端實務開發經驗，對於 Vue.js 框架尤其掌握，熱衷於探究各種前端領域的新鮮事。`

export default {
  name: 'About',
  metaInfo: {
    title,
    meta: [
      { property: 'og:title', vmid: 'og:title', content: name },
      { property: 'description', vmid: 'description', content: description },
      { property: 'og:description', vmid: 'og:description', content: description },
      { property: 'og:image', vmid: 'og:image', content: require('@/assets/img/about.png') },
    ]
  },
  data () {
    this.profile = {
      skills: [
        { icon: 'vuejs', title: 'Vue.js' },
        { icon: 'sass', title: 'Sass' },
        { title: 'Pug' },
        { icon: 'npm', title: 'npm' },
      ],
      socials: [
        { icon: [`fab`, `linkedin`], url: 'http://www.linkedin.com/in/xingqiao-huang', title:'LinkedIn' },
        { icon: [`fab`, `github`], url: 'https://github.com/ngseke', title:'GitHub' },
        { icon: [`fab`, `codepen`], url: 'https://codepen.io/ngseke', title:'CodePen' },
        { icon: [`fab`, `telegram`], url: 'https://t.me/hxqqq', title:'Telegram' },
        { icon: [`fas`, `envelope`], url: 'mailto:ngseke@gmail.com', title:'Email' },
      ],
    }
    this.description = description
    return {
      isLoaded: false
    }
  },
  methods: {
    getSkillStyle (i) {
      const base = .8 + .3
      const delta = .08
      return { animationDelay: `${i * delta + base}s` }
    },
    imageLoaded () {
      this.isLoaded = true
    }
  }
}
</script>

<style scoped lang="sass">
@import "~@/assets/css/function"
@import "~@/assets/css/color"

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

p
  line-height: 1.5rem
  &.description
    white-space: pre-line

section#about
  +py(3rem)
  margin-top: 6rem
  @media (max-width: 992px)
    +py(0)

.profile .card
  transition: $transition
  box-shadow: 1rem 1rem $ngsek
  .item
    animation: item 1.2s cubic-bezier(0.77, 0, 0.175, 1) backwards
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
  small
    white-space: nowrap

  &:hover
    box-shadow: (1rem + $distance * 2) (1rem + $distance * 2) lighten($ngsek, 5%)
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
  transform: scale(1)
  transform-origin: right bottom
  &.play
    animation: profile-mask-in 1.7s cubic-bezier(0.77, 0, 0.175, 1)
    animation-fill-mode: forwards
  &.loading
    transform: scale(1)
</style>
