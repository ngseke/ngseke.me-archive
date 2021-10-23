<template lang="pug">
div
  IndexHeader

  main
    //- MCIP
    IndexSection(id='mcip' :bg='require(`@/assets/img/bg/mcip.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(v-lazy='require(`@/assets/img/cover/mcip.png`)' alt='MCIP Cover')
      template(slot='content')
        img(v-lazy='require(`@/assets/img/logo/mcip.svg`)' alt='樂台計畫')
        .title.text-light MCIP Official Website
        .subtitle.text-light #[b 樂台計畫]官方網站
        DetailButton(name='mcip')
        DemoButton(href='https://mcip.ml/')
        GithubButton(href='https://github.com/ngseke/mcip.ml')

    //- MCIP CMS
    IndexSection(id='mcip-cms' :bg='require(`@/assets/img/bg/mcip-cms.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(v-lazy='require(`@/assets/img/cover/mcip-cms.png`)' alt='MCIP CMS Cover')
      template(slot='content')
        img(v-lazy='require(`@/assets/img/logo/mcip-cms.svg`)' alt='樂台計畫')
        .title.text-light MCIP CMS
        .subtitle.text-light #[b 樂台計畫]後台管理系統
        DetailButton(name='mcip-cms')

    //- EM Optimization Lab
    IndexSection(id='emo' :bg='require(`@/assets/img/bg/emo.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(v-lazy='require(`@/assets/img/cover/emo.png`)' alt='EM Optimization Lab Cover')
      template(slot='content')
        img(v-lazy='require(`@/assets/img/logo/emo.svg`)' alt='EM Optimization Lab Logo')
        .title.text-light EM Optimization Lab
        .subtitle.text-light #[b 電磁最佳化實驗室]網站
        DetailButton(name='emo')
        DemoButton(href='https://myweb.ntut.edu.tw/~yschen/')
        GithubButton(href='https://github.com/ngseke/emo')
</template>

<script>
import { computed } from '@vue/composition-api'
import { useWindowSize } from '@vueuse/core'

import IndexSection from '@/components/index/IndexSection.vue'
import IndexHeader from '@/components/index/IndexHeader.vue'
import DetailButton from '@/components/DetailButton.vue'
import DemoButton from '@/components/DemoButton.vue'
import GithubButton from '@/components/GithubButton.vue'

export default {
  name: 'Index',
  components: {
    IndexSection,
    IndexHeader,
    DetailButton,
    DemoButton,
    GithubButton,
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
</style>
