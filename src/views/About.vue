<template lang="pug">
section#about: .container: .row.justify-content-around.align-items-center
  .col-12.col-md-8.profile: .card: .card-body: .row
    .col-12.col-lg-3.img-area
      .avatar
        .avatar-mask(:class='{ play: isLoaded, loading: !isLoaded }')
        img(src='@/assets/img/profile.jpg' @load='isLoaded = true')

    .col-12.col-lg-9.mt-3
      h1.text-center.text-lg-left.name.item(:style='getSlideStyle(0)') 黃省喬
      h6.mb-2.text-muted.text-center.text-lg-left.item(
        :style='getSlideStyle(1)'
        @click='nextPronunciation'
      ) {{ pronunciation }}
      p.text-center.text-lg-left.item(:style='getSlideStyle(2)')
        small.mr-3(
          v-for='{ title, icon, name } in infos'
          :title='`${title}: ${name}`'
        )
          fa(:icon='icon')
          |  {{ name }}

      hr
      p.item.description(:style='getSlideStyle(3)')
        | {{ greeting }}
        br
        | {{ description }}

      p.item.description(:style='getSlideStyle(4)')
        fa.mx-1(:icon="['fas', 'arrow-circle-right']")
        | [RESUME]
        |
        a(:href='links.cakeResume.url' target='_blank') CakeResume
      p.mb-4
        span.popup.hashtag(
          v-for='(hashtag, index) in hashtags'
          :style='getPopupStyle(index)'
        )
          span {{ hashtag }}

      p.text-center.text-lg-left.item(:style='getSlideStyle(5)')
        a.popup.btn-social.mr-2(
          v-for='({ title, icon, url }, index) in socials'
          :href='url'
          target='_blank'
          :title='title'
          :style='getPopupStyle(index + hashtags.length)'
        )
          fa.ml-1(:icon='icon' v-if='icon')
</template>

<script>
import { ref } from '@vue/composition-api'
import links from '@/modules/links'
import useNamePronunciation from '@/composables/useNamePronunciation'

const title = 'About Me'
const greeting = 'Hi, I\'m Sean 👋 '
const description = '現職前端軟體工程師，追求撰寫無瑕程式碼是我的開發格言。 擁有超過三年的實務開發經驗，使用 React 與 Vue 框架，熱衷於探究各種前端領域的新鮮事。'
const metaDescription = `${greeting}${description}`

export default {
  name: 'About',
  metaInfo: {
    title,
    meta: [
      { property: 'description', vmid: 'description', content: metaDescription },
      { property: 'og:description', vmid: 'og:description', content: metaDescription },
      { property: 'og:image', vmid: 'og:image', content: require('@/assets/img/about.png') },
    ],
  },
  setup () {
    const infos = [
      {
        title: 'Title',
        name: 'Software Engineer',
        icon: 'user-tie',
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
      'TypeScript',
      'React',
      'Vue3',
      'Nuxt',
      'TailwindCSS',
    ]

    const socials = [
      links.hackmd,
      links.github,
      links.linkedin,
      links.email,
    ]

    const {
      nextPronunciation,
      pronunciation,
    } = useNamePronunciation()

    const isLoaded = ref(false)

    const baseDelay = 0.3

    const getSlideStyle = (i = 0) => {
      return { animationDelay: `${baseDelay + i * 0.1}s` }
    }

    const getPopupStyle = (i = 0) => {
      const base = baseDelay + 0.7
      const delta = 0.08
      return { animationDelay: `${base + i * delta}s` }
    }

    return {
      infos,
      hashtags,
      socials,
      greeting,
      description,
      nextPronunciation,
      pronunciation,
      getPopupStyle,
      isLoaded,
      getSlideStyle,
      links,
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

@keyframes popup
  from
    opacity: 0
    transform: scale(.4)
  to
    opacity: 1

@keyframes avatar-mask-in
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
    font-size: 1.25rem
  .hashtag
    transition: all .3s
    margin-right: .5rem
    position: relative
    display: inline-block
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
      +wh(auto, 4px)
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

.popup
  position: relative
  display: inline-block
  animation: popup .5s cubic-bezier(0.77, 0, 0.175, 1)
  animation-fill-mode: backwards

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
          +wh(9rem)
          object-fit: cover
          object-position: 0 25%
  .avatar-mask
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

.avatar-mask
  z-index: 1000
  position: absolute
  bottom: -30%
  right: -50%
  background-color: $ngsek
  border-radius: 100rem
  +wh(25rem)
  transform: scale(1)
  transform-origin: right bottom
  &.play
    animation: avatar-mask-in 1.7s cubic-bezier(0.77, 0, 0.175, 1)
    animation-fill-mode: forwards
  &.loading
    transform: scale(1)
</style>
