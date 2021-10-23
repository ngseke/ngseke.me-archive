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
        img(src='@/assets/img/profile.jpg' @load='isLoaded = true')

    .col-12.col-lg-9.mt-3
      h4.text-center.text-lg-left.name.item(title='ㄏㄨㄤˊㄒㄧㄥˇㄑㄧㄠˊ' style=itemStyle()) 黃省喬
      h6.mb-2.text-muted.text-center.text-lg-left.item(style=itemStyle()) Huang Xingqiao
      p.text-center.text-lg-left.item(style=itemStyle())
        small.mr-3(
          :title='title'
          v-for='{ title, icon, name } in infos'
        )
          fa(:icon='icon')
          |  {{ name }}

      hr
      p.item.description(style=itemStyle())
        | Hi, I’m Sean 👋
        br
        | 現職前端工程師，堅持撰寫無瑕程式碼是我的開發格言。
        | 擁有超過三年的實務開發經驗，使用 React 與 Vue.js 框架，熱衷於探究各種前端領域的新鮮事。
        br
        br
        | Góa mā sió-khóa-á ū-teh gián-kiú tâi-bûn, nā-sī ū-êng hoan-gêng lâi
        |
        a(href='https://ngseke.github.io/koasu/' target='_blank') KOASU
        |
        | bóng chhit-thô!
      p.mb-4
        span.hashtag(
          v-for='(hashtag, index) in hashtags'
          :style='getHashtagStyle(index)'
        )
          span {{ hashtag }}

      p.text-center.text-lg-left.item(style=itemStyle(4))
        a.btn-social.mr-2(
          v-for='{ title, icon, url } in socials'
          :href='url'
          target='_blank'
          :title='title'
        )
          fa.ml-1(:icon='icon' v-if='icon')
</template>

<script>
import { ref } from '@vue/composition-api'
import links from '@/modules/links'

const title = 'About Me'
const description = 'Hi, I\'m Sean 👋 現職前端工程師，堅持撰寫無瑕程式碼是我的開發格言。擁有超過二年的實務開發經驗，主攻 Vue.js 框架，熱衷於探究各種前端領域的新鮮事。'

export default {
  name: 'About',
  metaInfo: {
    title,
    meta: [
      { property: 'description', vmid: 'description', content: description },
      { property: 'og:description', vmid: 'og:description', content: description },
      { property: 'og:image', vmid: 'og:image', content: require('@/assets/img/about.png') },
    ],
  },
  setup () {
    const infos = [
      {
        title: 'Title',
        name: 'Frontend Developer',
        icon: 'user-tie',
      },
      {
        title: 'Company',
        name: '3drens',
        icon: 'building',
      },
      {
        title: 'Education',
        name: 'NTUT-CSIE',
        icon: 'graduation-cap',
      },
      {
        title: 'Location',
        name: 'Taipei, Taiwan',
        icon: 'map-marker',
      },
    ]

    const hashtags = [
      'React',
      'Vue3',
      'Nuxt.js',
      'TypeScript',
      'Tailwind CSS',
      'SASS',
    ]

    const socials = [
      links.cakeResume,
      links.github,
      links.linkedin,
      links.codepen,
      links.email,
    ]

    const isLoaded = ref(false)

    const getHashtagStyle = (i) => {
      const base = 0.8 + 0.3
      const delta = 0.08
      return { animationDelay: `${i * delta + base}s` }
    }

    return {
      infos,
      hashtags,
      socials,
      description,
      getHashtagStyle,
      isLoaded,
    }
  },
}
</script>

<style scoped lang="sass">
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
  @include media-breakpoint-down(md)
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
  .hashtag
    transition: all .3s
    margin-right: .5rem
    position: relative
    display: inline-block
    animation: skill-in .5s cubic-bezier(0.77, 0, 0.175, 1)
    animation-fill-mode: backwards
    span
      z-index: 1
      position: relative
    &::before
      content: '#'
      opacity: .5
      z-index: 1
      position: relative
      font-weight: bold
    &::after
      content: ''
      position: absolute
      background-color: $ngsek
      height: 4px
      width: auto
      bottom: 7px
      left: 5px
      right: 2px
      opacity: .5
    &:hover::after
      opacity: .8

  small
    white-space: nowrap
    display: inline-block

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
@include media-breakpoint-down(md)
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

@include media-breakpoint-down(sm)
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
