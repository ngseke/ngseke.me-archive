<template lang="pug">
main.container
  .row.justify-content-center
    template(v-for='{ title, cover, list } in list')
      .col-12.col-lg-6.col-xl-5
        .sticky-title
          .img(:style='{ backgroundImage: `url(${cover})` }')
          h2 {{ title }}
      .col-12.col-lg-6.col-xl-6
        .list
            ul
              li(v-for='{ title, name, description, github, link } in list')
                h3.title
                  router-link.link(:to='getRoute(name)' v-if='name')
                    | {{ title }}
                    fa.ml-2(:icon="['fas', 'caret-right']")
                  template(v-else) {{ title }}
                p.description {{ description }}
                div
                  a(:href='link' target='_blank' title='External link' v-if='link')
                    fa.mr-2(:icon="['fas', 'external-link-alt']")
                  a(:href='github' target='_blank' title='GitHub' v-if='github')
                    fa.mr-2(:icon="['fab', 'github']")
</template>

<script>
import projects from '@/modules/projects'

export default {
  name: 'Index',
  metaInfo: {
    title: 'Projects',
  },
  setup () {
    const getRoute = (name) => ({ name: 'Project', params: { name } })

    return {
      list: projects,
      getRoute,
    }
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
  .img
    width: 100%
    height: 7rem
    background-color: $ngsek
    background-size: cover
    background-position: center center
  @include media-breakpoint-up(lg)
    margin-bottom: 5rem
    padding: 2rem 0
    .img
      width: 20rem
      height: 20rem

h2
  position: absolute
  bottom: -2rem
  left: 1.5rem
  font-size: 3.5rem
  mix-blend-mode: overlay
  max-width: 100%
  white-space: nowrap
  overflow: hidden
  @include media-breakpoint-up(lg)
    font-size: 4.5rem
    top: 20%
    right: 3rem
    left: auto
    bottom: auto

.list
  padding-top: 5rem
  @include media-breakpoint-up(lg)
    min-height: 100vh
  ul
    list-style: none
    +px(1rem)
    li
      margin-bottom: 3rem
      .title
        display: inline-block
        font-size: 1rem
        margin-bottom: .5rem
      .description
        margin-bottom: .5rem
</style>
