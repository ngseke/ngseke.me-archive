'use strict'

var vm = new Vue({
  el: '#page',
  data: {
    windowHeight: 500,
    profile: {
      nameList: ['Huang Xingqiao', 'N̂g Séngkiâu','フゥァン シンチァォ', '황성교'],
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
  },
  mounted: function () {
    var self = this

    self.SetNavShrink()
    self.SetParallexBg()
    self.SetScrollReveal()
    self.ScrollSpy()

    $(function () {$('[data-toggle="tooltip"]').tooltip()}) // 啟用tooltip

    self.windowHeight = $(window).height()  // 設定data.windowHeight值(視窗高度)
    $(window).resize(function () {
      self.windowHeight = $(window).height()
    })

    $('a').click(function() {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top + 'px'
      }, {duration: 1000})
      return false
    })

    $('#nav a').click(function () {
      $('#navbarContent').collapse('hide')
    })

  },
  methods:{
    SetNavShrink: function () {
      $(function () {
        $(window).scroll(function () {
          var scrollVal = $(this).scrollTop()
          if(scrollVal > 200)
            $('#nav').addClass('shrink')
          else
            $('#nav').removeClass('shrink')
        })
      })
    },
    SetParallexBg: function () {
      // 頂部cover黃色背景
      $('.ngsek').parallax({imageSrc: 'img/index-cover.jpg'})
      // 各section背景
      $('#emo').parallax({imageSrc: 'https://c.pxhere.com/photos/ce/66/antenna_tower_transmission_communication_telecommunication_cellular_transmitter_infrastructure-779889.jpg!d'})
      $('#boss').parallax({imageSrc: 'img/bg/boss.jpg'})
      $('#typingtyping').parallax({imageSrc: 'https://c.pxhere.com/photos/3a/85/coffee_work_desk_mug_keyboard_phone_iphone_business-815659.jpg!d'})
      $('#shanlinliang').parallax({imageSrc: 'https://c.pxhere.com/photos/b4/e8/sailing_boat_ocean_open_water_sea_boat_sail_water_summer-1087243.jpg!d'})
      $('#camp2017').parallax({imageSrc: 'img/bg/camp2017.png'})
      $('#jingshixifu').parallax({imageSrc: 'https://c.pxhere.com/photos/ef/0c/knife_stabbing_stab_kill_murder_man_murderer_isolated-1341086.jpg!d'})

    },
    SetScrollReveal: function () {
      window.sr = ScrollReveal({
        reset: false,
        duration: 1000,
        scale: 1,
      })

      sr.reveal('.sr')
      sr.reveal('.ngsek .sr',{reset: true} ,300)

      sr.reveal('.work-img', { distance: 0, scale: 1.1 })
        .reveal('.work-content', { origin: 'left', delay: 500, })

      sr.reveal('.camp-sr', { distance: 0, scale: .9 } ,200)

      // 名片之各項目
      sr.reveal('.profile-item', { origin: 'bottom', delay: 300}, 100)
        .reveal('.skill', {scale: .4, distance: 0, delay: 800}, 100)
        .reveal('.ink', {scale: .8, delay: 1300, origin: 'bottom', distance: '50px',})

      // 純喫茶
      sr.reveal('.chunchicha-small-sr', {origin: 'top', delay: '600', scale: .95, easing: 'ease'})
    },
    ScrollSpy: function () {
      var navHeight = $('#nav').outerHeight()
      $('body').scrollspy({ target: '#nav', offset: navHeight})
    },
    ScrollToMain: function () {
      var navHeight = $('#nav').outerHeight()
      Jump('main',{offset: -navHeight})
    },
    FetchDetail: function (page) {
      var self = this
      var article = '<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'

      $('#modal-detail').modal('show')     // 顯示modal
      $('#modal-detail .modal-body').html(article)

      $.get('page/' + page + '.md', function(data) {
        article = marked(data)

        $('#modal-detail .modal-body').html(article)
        $('#modal-detail img').each(function (index) {
          var alt = $(this).attr('alt')
          if(alt!='')
            $(this).after(`<figcaption><i class="fa fa-angle-up"></i>${alt}</figcaption>`)
        })
      })
    },

  },
  computed:{
    asWindowHeightStyle: function () {
      return {
        height : `${this.windowHeight}px`
      }
    },
    navbarStyle: function () {
      return {
        maxHeight : (this.windowHeight - 50) + 'px'
      }
    }
  },
  updated: function(){
    // this.ScrollSpy()
  }
})
