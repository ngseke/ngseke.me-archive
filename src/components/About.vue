<template lang="pug">
section#about
  .container
    .row.justify-content-around.align-items-center

      .col-12.col-md-8.profile
        .card
          .card-body
            .row
              .col-12.col-lg-3.text-center
                img.text-center.img-fluid.rounded-circle.mb-3(src='/static/img/profile.jpg', style='filter:grayscale(1); max-height:8rem;')
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

                p.text-center.text-lg-left.profile-item
                  a.btn-social.mr-2(:href='s.url', target='_blank', v-for='s in profile.socials', :title='s.title')
                    i(:class='s.icon')
</template>

<script>

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
          {icon:'fab fa-github', url:'https://github.com/a92304a92304', title:'GitHub'},
          {icon:'fas fa-envelope', url:'mailto:a92304a92304@gmail.com', title:'Email'},
          {icon:'fab fa-youtube', url:'https://www.youtube.com/a92304a92304', title:'Youtube'},
        ],
      },
    }
  },
  mounted () {
    $(window).trigger('resize').trigger('scroll')

    window.sr = this.$ScrollReveal({
      reset: false,
      duration: 1000,
      scale: 1,
    })
    sr.reveal('.profile-item', { origin: 'bottom', delay: 300}, 100)
    sr.reveal('.skill', {scale: .4, distance: 0, delay: 800}, 100)
  },

}
</script>

<style scoped lang="sass">
@import "../assets/css/function"
@import "../assets/css/color"

.profile .card
  transition: box-shadow .5s , transform .5s
  box-shadow: 1rem 1rem $ngsek
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
    box-shadow: 1.6rem 1.6rem $ngsek
    transform: translate(-0.3rem, -0.3rem)

.btn-social
  font-size: 1.2rem
  color: $ngsek
  transition: color .3s
  &:hover
    color: $ngsek-dark

@media (max-width: 576px)
  .profile
    padding-left: 0
    padding-right: 0
    .card
      border: 0px white solid
      box-shadow: 0rem 0rem
      &:hover
        box-shadow: 0rem 0rem
        transform: translate(0rem)

#about
  margin-top: 5rem
  h1
    transition: all .2s
    text-align: center
    font-family: 'arial'
    font-weight: 900
    font-size: 5rem
    color: white
    transform: rotate3d(1,1,1,0deg)
    &:hover
      text-shadow: 0px 0px 0px rgba($ngsek ,1)

</style>
