<template lang="pug">
footer.footer: .container
  .row.justify-content-center.justify-content-sm-between.text-center
    .col-12.col-sm-auto.mb-3.mb-sm-0
      | © 2018-{{ year }}
      |
      router-link(to='/') Xingqiao's Portfolio
    .col-12.col-sm-auto
      a.btn-social.mr-2(
        v-for='{ title, icon, url } in socials'
        :href='url'
        target='_blank'
        :title='title'
      )
        fa.ml-1(:icon='icon' v-if='icon')
</template>

<script>
import links from '@/modules/links'

export default {
  name: 'Footer',
  setup () {
    return {
      year: new Date().getFullYear(),
      socials: [
        links.github,
        links.linkedin,
        links.email,
      ],
    }
  },
}
</script>

<style scoped lang="sass">
.footer
  +py(2rem)
  margin-top: 2rem
  background-color: #f7f7f8
  font-size: .8rem

.btn-social
  font-size: 1.2rem
  color: #55595c

</style>
