<template lang="pug">
div
  IndexHeader

  main
    IndexSection(id='credit-card-calc' bg='https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(v-lazy='require(`@/assets/img/cover/credit-card-calc.png`)' alt='Sinopac Dual Currency Card Calc. Cover')
      template(slot='content')
        .title.text-light Sinopac Dual Currency Card Calc.
        .subtitle.text-light 永豐幣倍卡回饋計算機
        DetailButton(name='credit-card-calc')
        a.btn.btn-sm.btn-primary(href='https://ngseke.github.io/sinopac-dual-currency-card-calculator/' target='_blank') Demo
        GithubButton(href='https://github.com/ngseke/sinopac-dual-currency-card-calculator')

    //- MCIP
    IndexSection(id='mcip' :bg='require(`@/assets/img/bg/mcip.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(v-lazy='require(`@/assets/img/cover/mcip.png`)' alt='MCIP Cover')
      template(slot='content')
        img(v-lazy='require(`@/assets/img/logo/mcip.svg`)' alt='樂台計畫')
        .title.text-light MCIP Official Website
        .subtitle.text-light #[b 樂台計畫]官方網站
        DetailButton(name='mcip')
        a.btn.btn-sm.btn-primary(href='https://mcip.ml/' target='_blank') Demo
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
        a.btn.btn-sm.btn-primary(href='https://myweb.ntut.edu.tw/~yschen/' target='_blank') Demo
        GithubButton(href='https://github.com/ngseke/emo')

    //- Realtime Monitor
    IndexSection(id='realtime' :bg='require(`@/assets/img/bg/realtime.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(v-lazy='require(`@/assets/img/cover/realtime.png`)' alt='Realtime Monitor Cover')
      template(slot='content')
        .title.text-light Realtime Monitor
        .subtitle.text-light 測速網站爬蟲
        DetailButton(name='realtime')

    //- Boss
    IndexSection(id='boss' :bg='require(`@/assets/img/bg/boss.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(v-lazy='require(`@/assets/img/cover/boss.png`)' alt='BOSS Cover')
        .chunchicha-small-sr
          img.chunchicha-small.d-none.d-lg-block(src='@/assets/img/element/products.png' title="We don't actually sell these products.")
      template(slot='content')
        .title.text-light BOSS
        .subtitle.text-light 線上飲料購物系統
        DetailButton(name='boss')
        a.btn.btn-sm.btn-primary(href='http://boss.ngseke.me' target='_blank') Demo
        GithubButton(href='https://github.com/ngseke/boss')

    //- Gomoku
    IndexSection(id='gomoku' :bg='require(`@/assets/img/bg/gomoku.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(v-lazy='require(`@/assets/img/cover/gomoku.png`)' alt='Gomoku Cover')
      template(slot='content')
        img(v-lazy='require(`@/assets/img/logo/gomoku.png`)' alt='Gomoku Logo')
        .title.text-light Gomoku
        .subtitle.text-light 五子棋對戰
        DetailButton(name='gomoku')
        a.btn.btn-sm.btn-primary(href='https://gomoku.ga/' target='_blank')
          fa(icon='gamepad')
          |  Play
        GithubButton(href='https://github.com/ngseke/gomoku')

    //- Raise Your Red Flag
    IndexSection(id='flag' :bg='require(`@/assets/img/bg/flag.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(v-lazy='require(`@/assets/img/cover/flag.png`)'  alt='Raise Your Red Flag Logo')
      template(slot='content')
        .logo #[fa(icon='flag')]
        .title Raise Your Red Flag
        .subtitle 紅旗舉起來
        DetailButton(name='flag')
        a.btn.btn-sm.btn-primary(href='https://raise-flag.web.app' target='_blank')
          fa(icon='gamepad')
          |  Play
        GithubButton(href='https://github.com/ngseke/Raise-Your-Red-Flag')

    //- Typing Typing!
    IndexSection(id='typingtyping' :bg='require(`@/assets/img/bg/typingtyping.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(v-lazy='require(`@/assets/img/cover/typingtyping.png`)' alt='Typing Typing! Logo')
      template(slot='content')
        .title Typing Typing!
        .subtitle 8-bit 風格打字遊戲
        DetailButton(name='typingtyping')
        a.btn.btn-sm.btn-primary(:href='`/file/TypingTyping.zip`' target='_blank')
          fa(icon='download')
          |  Download
        GithubButton(href='https://github.com/ngseke/Typing-Typing')
</template>

<script>
import { computed } from '@vue/composition-api'
import useWindowSize from '@/composables/use-window-size'

import IndexSection from '@/components/index/IndexSection.vue'
import IndexHeader from '@/components/index/IndexHeader.vue'
import DetailButton from '@/components/DetailButton.vue'
import GithubButton from '@/components/GithubButton.vue'

export default {
  name: 'Index',
  components: {
    IndexSection,
    IndexHeader,
    DetailButton,
    GithubButton
  },
  setup () {
    const { width } = useWindowSize()
    const isTile = computed(() => width.value >= 576)

    const getRoute = (name) => ({ name: 'Project', params: { name } })

    return {
      isTile,
      getRoute
    }
  }
}
</script>

<style scoped lang="sass">
@import "~@/assets/css/index-section"

main
  overflow: hidden
</style>
