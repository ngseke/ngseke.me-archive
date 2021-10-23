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
export default {
  name: 'Index',
  metaInfo: {
    title: 'Projects',
  },
  setup () {
    const list = [
      {
        title: 'MCIP',
        cover: 'https://images.unsplash.com/photo-1615917063840-0b7c196e29c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
        list: [
          {
            title: 'MCIP Official Website',
            name: 'mcip',
            description: '《樂台計畫》官方網站',
            github: 'https://github.com/ngseke/mcip.ml',
            link: 'https://mcip.ml',
          },
          {
            title: 'MCIP CMS',
            name: 'mcip-cms',
            description: '《樂台計畫》後台管理系統',
          },
        ],
      },
      {
        title: 'Website',
        cover: 'https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        list: [
          {
            title: 'Koasu',
            description: '白話字台語歌詞網誌',
            github: 'https://github.com/ngseke/koasu',
            link: 'https://ngseke.github.io/koasu/',
          },
          {
            title: 'Sinopac Dual Currency Card Calc.',
            name: 'credit-card-calc',
            description: '永豐幣倍卡回饋計算機',
            github: 'https://github.com/ngseke/sinopac-dual-currency-card-calculator',
            link: 'https://ngseke.github.io/sinopac-dual-currency-card-calculator/',
          },
          {
            title: 'EM Optimization Lab',
            name: 'emo',
            description: '《電磁最佳化實驗室》網站',
            github: 'https://github.com/ngseke/emo',
            link: 'https://myweb.ntut.edu.tw/~yschen/',
          },
          {
            title: 'Realtime Monitor',
            name: 'realtime',
            description: '測速網站爬蟲工具',
          },
          {
            title: 'BOSS',
            name: 'boss',
            description: '線上飲料購物系統',
            github: 'https://github.com/ngseke/boss',
          },
        ],
      },
      {
        title: 'Game',
        cover: 'https://images.unsplash.com/photo-1484173936665-9ae90b911638?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        list: [
          {
            title: 'Flip Card',
            description: 'Emoji 翻牌配對遊戲',
            github: 'https://github.com/ngseke/vue-flip-card',
            link: 'https://ngseke.github.io/vue-flip-card/',
          },
          {
            title: 'Gomoku',
            name: 'gomoku',
            description: '線上五子棋對戰',
            github: 'https://github.com/ngseke/gomoku',
            link: 'https://gomoku.ga/',
          },
          {
            title: 'Tic Tac Toe',
            description: '圈圈叉叉亂鬥',
            github: 'https://github.com/ngseke/tic-tac-toe',
            link: 'https://ngseke.github.io/tic-tac-toe/',
          },
          {
            title: 'Raise Your Red Flag',
            name: 'flag',
            description: '以 Webcam 重溫經典團康遊戲《紅旗舉起來》',
            github: 'https://github.com/ngseke/Raise-Your-Red-Flag',
            link: 'https://raise-flag.web.app/',
          },
          {
            title: 'Typing Typing!',
            name: 'typingtyping',
            description: '8-bit 復古風格打字遊戲',
            github: 'https://github.com/ngseke/Typing-Typing',
            link: '/file/TypingTyping.zip',
          },
        ],
      },
      {
        title: 'Design',
        cover: 'https://images.unsplash.com/photo-1616941245386-fc2f3458836f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80',
        list: [
          {
            title: 'NTUT-CSIE & NTUB-ACC Camp, 2017',
            name: 'camp2017',
            description: '《會炒不加辣，果資不加糖》迎新活動美術設計',
          },
          {
            title: 'Shanlinliang',
            name: 'shanlinliang',
            description: '虛構涼扇品牌廣告',
          },
        ],
      },
      {
        title: 'Useless',
        cover: 'https://images.unsplash.com/photo-1539710066450-2b50b7d3f9e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        list: [
          {
            title: 'Great Hall of the People Simulator',
            description: '通過率高達 100% 的人民大會堂模擬器',
            github: 'https://github.com/ngseke/great-hall-of-the-people-simulator',
            link: 'https://ngseke.github.io/great-hall-of-the-people-simulator/',
          },
          {
            title: 'Han Fans\' Eye Poker',
            description: '顧眼鏡',
            github: 'https://github.com/ngseke/han-fans-eye-poke',
            link: 'https://ngseke.github.io/han-fans-eye-poke/',
          },
        ],
      },
    ]
    const getRoute = (name) => ({ name: 'Project', params: { name } })

    return {
      list,
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
