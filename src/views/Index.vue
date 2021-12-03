<template lang="pug">
div
  IndexHeader

  main.container
    //- MCIP
    IndexSection(id='mcip' :bg='require(`@/assets/img/bg/mcip.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(src='@/assets/img/cover/mcip-202111.png' alt='MCIP Cover')
      template(slot='content')
        img(src='@/assets/img/logo/mcip.svg' alt='樂台計畫')
        .title.text-light MCIP Official Website
        .subtitle.text-light #[b 樂台計畫]官方網站
        ButtonDetail(name='mcip')
        ButtonDemo(href='https://mcip.ml/')
        ButtonGithub(href='https://github.com/ngseke/mcip.ml')

    //- MCIP CMS
    IndexSection(id='mcip-cms' :bg='require(`@/assets/img/bg/mcip-cms.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(src='@/assets/img/cover/mcip-cms.png' alt='MCIP CMS Cover')
      template(slot='content')
        img(src='@/assets/img/logo/mcip-cms.svg' alt='樂台計畫')
        .title.text-light MCIP CMS
        .subtitle.text-light #[b 樂台計畫]後台管理系統
        ButtonDetail(name='mcip-cms')

    //- EM Optimization Lab
    IndexSection(id='emo' :bg='require(`@/assets/img/bg/emo.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(src='@/assets/img/cover/emo.png' alt='EM Optimization Lab Cover')
      template(slot='content')
        img(src='@/assets/img/logo/emo.svg' alt='EM Optimization Lab Logo')
        .title.text-light EM Optimization Lab
        .subtitle.text-light #[b 電磁最佳化實驗室]網站
        ButtonDetail(name='emo')
        ButtonDemo(href='https://myweb.ntut.edu.tw/~yschen/')
        ButtonGithub(href='https://github.com/ngseke/emo')
</template>

<script>
import { computed } from '@vue/composition-api'
import { useWindowSize } from '@vueuse/core'

import IndexSection from '@/components/IndexSection.vue'
import IndexHeader from '@/components/IndexHeader.vue'
import ButtonDetail from '@/components/ButtonDetail.vue'
import ButtonDemo from '@/components/ButtonDemo.vue'
import ButtonGithub from '@/components/ButtonGithub.vue'

export default {
  name: 'Index',
  components: {
    IndexSection,
    IndexHeader,
    ButtonDetail,
    ButtonDemo,
    ButtonGithub,
  },
  setup () {
    const { width } = useWindowSize()
    const isTile = computed(() => width.value >= 576)

    const getRoute = (name) => ({ name: 'Project', params: { name } })

    return {
      isTile,
      getRoute,
    }
  },
}
</script>

<style scoped lang="sass">
@import "~@/assets/css/index-section"

main
  overflow: hidden
  @include media-breakpoint-down(md)
    &.container
      padding: 0
      max-width: 100%
</style>
