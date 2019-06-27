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

+card-body-row
  .col-12.col-lg-3.img-area
    img.avatar(src='/static/img/profile.jpg')
  .col-12.col-lg-9.mt-3
    h4.text-center.text-lg-left.name.profile-item(title='ㄏㄨㄤˊㄒㄧㄥˇㄑㄧㄠˊ') 黃省喬
    h6.mb-2.text-muted.text-center.text-lg-left.profile-item Huang Xingqiao
    p.text-center.text-lg-left.profile-item
      small.mr-3(title='Education')
        fa(icon='book')
        |  NTUT / CSIE
      small.mr-3(title='Location')
        fa(icon='map-marker')
        |  Taipei, Taiwan
    hr
    p.profile-item.text-center.text-lg-left
      | 我是 Sean，畢業於北科資工系，專注於網頁設計前後端。

    p.mb-4.text-center.text-lg-left
      span.skill(v-for='s in profile.skills')
        span(v-html='s.icon', :title='s.title')
      span.skill.text Pug

    p.text-center.text-lg-left.profile-item
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

    window.sr = this.$ScrollReveal({
      reset: false,
      duration: 1000,
      scale: 1,
    })

    sr.reveal('.skill', {scale: .4, distance: 0, delay: 800}, 100)
    sr.reveal('.profile-item', { origin: 'bottom', delay: 300}, 100)

    Jump('body')
  },

}
</script>

<style scoped lang="sass">
@import "../assets/css/function"
@import "../assets/css/color"

$distance: .4rem
$duration: .7s

#about
  margin-top: 6rem

.profile .card
  transition: box-shadow $duration , transform $duration
  box-shadow: 1rem 1rem $ngsek
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

    &.text
      font-size: 1rem
    &:hover
      color: $ngsek
      transform: scale(1.3)

  &:hover
    box-shadow: (1rem + $distance * 2) (1rem + $distance * 2) lighten($ngsek, 10%)
    transform: translate(-$distance, -$distance)
    .avatar
      transform: translate(-$distance, -$distance)
      opacity: .9

  .avatar
    transition: transform $duration, opacity $duration
    position: absolute
    filter: grayscale(1)
    max-height: 17rem
    top: -3rem
    right: 2rem

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
        border-radius: 100%
        width: 9rem
        height: 9rem
        object-fit: cover

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
</style>
