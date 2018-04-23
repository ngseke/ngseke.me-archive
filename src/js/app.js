var vm = new Vue({
  el: '#page',
  data: {
    article: null,
    windowHeight: 500,
    profile: {
      nameNum: 0,
      nameList: ['Huang Xingqiao', 'N̂g Séngkiâu','フゥァン シンチァォ', '황성교'],
      skills: [
        {name: '<i class="fab fa-vuejs"></i>'},
        {name: '<i class="fab fa-sass"></i>'},
        {name: '<i class="fab fa-gulp"></i>'},
        {name: '<i class="fab fa-php"></i>'},
        {name: '<i class="fab fa-js"></i>'},
        {name: '<i class="fab fa-html5"></i>'},
        {name: '<i class="fab fa-css3-alt"></i>'},
      ],
      socials: [
        {icon:'fab fa-linkedin', url:'http://www.linkedin.com/in/xingqiao-huang'},
        {icon:'fab fa-github', url:'https://github.com/a92304a92304'},
        {icon:'fas fa-envelope', url:'mailto:a92304a92304@gmail.com'},
        {icon:'fab fa-youtube', url:'https://www.youtube.com/a92304a92304'},
      ],
    },
  },
  mounted: function () {
    var self = this

    self.SetNavShrink()
    self.SetParallexBg()
    // self.SetScrollReveal()
    self.ScrollSpy()

    $(function () {$('[data-toggle="tooltip"]').tooltip()}) // 啟用tooltip

    self.windowHeight = $(window).height()  // 設定data.windowHeight值(視窗高度)
    $(window).resize(function () {
      self.windowHeight = $(window).height()
    })

    var timer = setInterval(function() {
      var length = self.profile.nameList.length
      self.profile.nameNum = ((self.profile.nameNum + 1) + length) % length
    }, 5000)

    // $('a').click(function() {
    //   $('html, body').animate({
    //     scrollTop: $($(this).attr('href')).offset().top + 'px'
    //   }, {duration: 1000})
    //   return false
    // })

    $('.dropdown-item').click(function () { // not the best sol.
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
    },
    SetScrollReveal: function () {
      window.sr = ScrollReveal({
        reset: true,
        duration: 1000,
        scale: 1,
      })

      sr.reveal('.sr')
      sr.reveal('.ngsek .sr',{reset: true} ,300)
      sr.reveal('.sr-r', { origin: 'right' })
      sr.reveal('.sr-l', { origin: 'left' })
      sr.reveal('.sr-b', { origin: 'bottom' })

      sr.reveal('.work-img', { distance: 0, scale: 1.1 })
      sr.reveal('.work-content', { origin: 'left', delay: 500, })

      sr.reveal('.camp-sr', { distance: 0, scale: .9 } ,200)

      // 名片之各項目
      sr.reveal('.profile-item', { origin: 'bottom', delay: 300}, 100)

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
    FetchArticle: function (page) {
      var self = this
      self.article = null             // 清空文章內容

      $.get('page/' + page + '.md', function(data) {
        self.article = marked(data)   // 存入文章內容
        $('#modal-detail').modal('show')     // 顯示modal
        //
        $('#modal-detail .modal-body').html(marked(data))
        $('#modal-detail img').each(function (index) {
          var alt = $(this).attr('alt')
          if(alt!='')
            $(this).after('<figcaption><i class="fa fa-angle-up"></i> '+ alt +'</figcaption>')
        })
      })

    },

  },
  computed:{
    asWindowHeightStyle: function () {
      return {
        height : this.windowHeight + 'px'
      }
    }
  },
  updated: function(){
    this.ScrollSpy()
  }
});
