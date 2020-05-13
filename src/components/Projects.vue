<template lang="pug">
div
  main.container
    .row.justify-content-center
      template(v-for='{ title, cover, list } in list')
        .col-12.col-md-5.col-lg-6.col-xl-5
          .sticky-title
            img(:src='cover')
            h2 {{ title }}
        .col-12.col-md-7.col-lg-6.col-xl-6
          .list
              ul
                li(v-for='{ title, name } in list')
                  router-link(:to='getRoute(name)') {{ title }}
</template>

<script>
export default {
  name: 'Index',
  metaInfo: {
    title: 'Projects',
  },
  data () {
    return {
      list: [
        {
          title: 'Website',
          cover: 'https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
          list: [
            { title: 'MCIP Official Website', name: 'mcip' },
            { title: 'MCIP CMS', name: 'mcip-cms' },
            { title: 'EM Optimization Lab', name: 'emo' },
            { title: 'Realtime Monitor', name: 'realtime' },
            { title: 'BOSS', name: 'boss' },
          ]
        },
        {
          title: 'Game',
          cover: 'https://images.unsplash.com/photo-1484173936665-9ae90b911638?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
          list: [
            { title: 'Gomoku', name: 'gomoku' },
            { title: 'Raise Your Red Flag', name: 'flag' },
            { title: 'Typing Typing!', name: 'typingtyping' },
          ]
        },
        {
          title: 'Other',
          cover: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
          list: [
            { title: 'Shanlinliang', name: 'shanlinliang' },
            { title: 'Kuaichao Bu Jia La, Guozi Bu Jia Tang', name: 'camp2017' },
          ]
        }
      ]
    }
  },
  mounted () {
  },
}
</script>

<style scoped lang="sass">
main
  margin-top: 6rem
  overflow: initial
  
.sticky-title
  position: sticky
  top: 6rem
  padding: 2rem 0
  @media (min-width: 992px)
    margin-bottom: 5rem
  img
    max-width: 70%
    height: auto

h2
  position: absolute
  top: 20%
  right: 3rem
  font-size: 4.5rem
  mix-blend-mode: overlay
  @media (max-width: 991.98px)
    font-size: 3rem

.list
  padding: 5rem 0
  @media (min-width: 992px)
    padding: 7rem 0
    min-height: 50rem
  ul
    list-style: none
    li
      &:not(:last-child)
      margin-bottom: 3rem
</style>
