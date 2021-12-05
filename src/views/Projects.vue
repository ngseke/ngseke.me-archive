<template lang="pug">
main.container
  .row.justify-content-center
    template(v-for='{ title, cover, list } in list')
      .col-12.col-lg-6.col-xl-5
        TitleSticky(:text='title' :cover='cover')
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
                  LinkIcon(
                    v-if='name'
                    :to='getRoute(name)'
                    :icon="['fas', 'book']"
                  ) Detail
                  LinkIcon(
                    v-if='link'
                    :href='link'
                    :icon="['fas', 'globe']"
                  ) Demo
                  LinkIcon(
                    v-if='github'
                    :href='github'
                    :icon="['fab', 'github']"
                  ) GitHub
</template>

<script>
import TitleSticky from '@/components/TitleSticky.vue'
import LinkIcon from '@/components/LinkIcon.vue'
import projects from '@/modules/projects'

export default {
  name: 'Index',
  metaInfo: {
    title: 'Projects',
  },
  components: {
    TitleSticky,
    LinkIcon,
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

.list
  padding-top: 3rem
  padding-bottom: 3rem
  @include media-breakpoint-up(lg)
    min-height: 100vh
    padding-top: 5rem
  ul
    list-style: none
    +px(1rem)
    li
      margin-bottom: 3.5rem
      .title
        display: inline-block
        font-size: 1rem
        margin-bottom: .5rem
      .description
        margin-bottom: .75rem
</style>
