<template lang="pug">
div
  IndexHeader
    
  main
    //- mcip cms
    IndexSection(id='mcip' :bg='require(`@/assets/img/bg/mcip.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(src='@/assets/img/cover/mcip.png' alt='MCIP Cover')
      template(slot='content')
        img(src='@/assets/img/logo/mcip.svg' alt='樂台計畫')
        h2.text-light MCIP CMS
        h5.text-light 後台管理系統
        router-link.btn.btn-sm.btn-primary(:to='getRoute("mcip")') Detail
        
    //- em optimization lab
    IndexSection(id='emo' :bg='require(`@/assets/img/bg/emo.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(src='@/assets/img/cover/emo.png' alt='EM Optimization Lab Cover')
      template(slot='content')
        img(src='@/assets/img/logo/emo.svg' alt='EM Optimization Lab Logo')
        h2.text-light EM Optimization Lab
        h5.text-light 電磁最佳化實驗室網站
        router-link.btn.btn-sm.btn-primary(:to='getRoute("emo")') Detail
        a.btn.btn-sm.btn-primary(href='http://myweb.ntut.edu.tw/~yschen' target='_blank') Demo
        a.btn.btn-sm.btn-github(href='https://github.com/seanyellow/emo' target='_blank')
          fa(:icon='[`fab`, `github-alt`]')
          |  Github
            
    //- Realtime Monitor
    IndexSection(id='realtime' :bg='require(`@/assets/img/bg/realtime.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(src='@/assets/img/cover/realtime.png' alt='Realtime Monitor Cover')
      template(slot='content')
        h2.text-light Realtime Monitor
        h5.text-light 測速網站爬蟲
        router-link.btn.btn-sm.btn-primary(:to='getRoute("realtime")') Detail
        
    //- Boss
    IndexSection(id='boss' :bg='require(`@/assets/img/bg/boss.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(src='@/assets/img/cover/boss.png' alt='BOSS Cover')
        .chunchicha-small-sr
          img.chunchicha-small.d-none.d-lg-block(src='@/assets/img/element/products.png' title="We don't actually sell these products.")
      template(slot='content')
        h2.text-light BOSS
        h5.text-light 線上飲料購物系統
        router-link.btn.btn-sm.btn-primary(:to='getRoute("boss")') Detail
        a.btn.btn-sm.btn-primary(href='http://boss.seanyellow.ga' target='_blank') Demo
        a.btn.btn-sm.btn-github(href='https://github.com/seanyellow/boss' target='_blank')
          fa(:icon='[`fab`, `github-alt`]')
          |  Github

    //- Gomoku
    IndexSection(id='gomoku' :bg='require(`@/assets/img/bg/gomoku.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(src='@/assets/img/cover/gomoku.png' alt='Gomoku Cover')
      template(slot='content')
        img(src='@/assets/img/logo/gomoku.png' alt='Gomoku Logo')
        h2.text-light Gomoku
        h5.text-light 五子棋對戰
        router-link.btn.btn-sm.btn-primary(:to='getRoute("gomoku")') Detail
        a.btn.btn-sm.btn-primary(href='https://gomoku.ga/' target='_blank')
          fa(icon='gamepad')
          |  Play
        a.btn.btn-sm.btn-github(href='https://github.com/seanyellow/gomoku' target='_blank')
          fa(:icon='[`fab`, `github-alt`]')
          |  Github

    //- Raise Your Red Flag
    IndexSection(id='flag' :bg='require(`@/assets/img/bg/flag.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(src='@/assets/img/cover/flag.png'  alt='Raise Your Red Flag Logo')
      template(slot='content')
        .logo #[fa(icon='flag')]
        h2 Raise Your Red Flag
        h5 紅旗舉起來
        router-link.btn.btn-sm.btn-primary(:to='getRoute("flag")') Detail
        a.btn.btn-sm.btn-primary(href='https://flag.seanyellow.ga' target='_blank')
          fa(icon='gamepad')
          |  Play
        a.btn.btn-sm.btn-github(href='https://github.com/seanyellow/Raise-Your-Red-Flag' target='_blank')
          fa(:icon='[`fab`, `github-alt`]')
          |  Github

    //- Typing Typing!
    IndexSection(id='typingtyping' :bg='require(`@/assets/img/bg/typingtyping.jpg`)' :isTile='isTile')
      template(slot='img')
        img.img-fluid.cover(src='@/assets/img/cover/typingtyping.png' alt='Typing Typing! Logo')
      template(slot='content')
        h2 Typing Typing!
        h5 8-bit 風格打字遊戲
        router-link.btn.btn-sm.btn-primary(:to='getRoute("typingtyping")') Detail
        a.btn.btn-sm.btn-primary(href='/static/file/TypingTyping.zip' target='_blank' data-toggle='tooltip' data-placement='bottom' title='7.7mb')
          fa(icon='download')
          |  Download
        a.btn.btn-sm.btn-github(href='https://github.com/seanyellow/Typing-Typing' target='_blank')
          fa(:icon='[`fab`, `github-alt`]')
          |  Github
</template>

<script>
import IndexSection from '@/components/index/IndexSection.vue'
import IndexHeader from '@/components/index/IndexHeader.vue'

export default {
  name: 'Index',
  components: { IndexSection, IndexHeader },
  data () {
    return {
      windowWidth: null,
    }
  },
  mounted () {
    this.windowWidth = $(window).width()
    $(window).resize(() => this.windowWidth = $(window).width())
    
    this.$nextTick(() => {
      this.setScrollReveal()
      $('[data-toggle="tooltip"]').tooltip()  // 啟用tooltip
    })
  },
  methods: {
    setScrollReveal () {
      const { $ScrollReveal: sr } = this
      
      sr().reveal('.work-img', { distance: 0, scale: 1.1 })
      sr().reveal('.work-content', { origin: 'left', delay: 500 })
      sr().reveal('.chunchicha-small-sr', { origin: 'top', delay: '600', scale: .95, easing: 'ease' })  // 純喫茶
      
      this.$once('hook:beforeDestroy', () => this.$ScrollReveal().destroy())
    },
    getRoute (name) {
      return { name: 'Project', params: { name } }
    },
  },
  computed: {
    isTile () {
      return this.windowWidth >= 576
    }
  },
}
</script>

<style scoped lang="sass">
@import "~@/assets/css/index-section"
    
main
  overflow: hidden
</style>
