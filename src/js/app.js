var vm = new Vue({
  el: '#page',
  data: {
    windowHeight: 1000,
    timer: 0,

  },
  mounted: function () {
    var self = this
    self.SetNavShrink()
    self.SetParallexBg()
    self.SetScrollReveal()

    var timer = setInterval(function () {
      self.timer++
    },5000)

  },
  methods:{
    SetNavShrink: function () {
      $(function () {
        $(window).scroll(function () {
          var scrollVal = $(this).scrollTop()
          if(scrollVal > $('.jumbotron.ngsek').height() - 110)
            $('#nav').addClass('shrink')
          else
            $('#nav').removeClass('shrink')
        })
      })
    },
    SetParallexBg: function () {
      $('.ngsek').parallax({imageSrc: 'img/index-cover.jpg'})
      $('#boss').parallax({imageSrc: 'img/bg/boss.jpg'})
      $('#typingtyping').parallax({imageSrc: 'https://c.pxhere.com/photos/3a/85/coffee_work_desk_mug_keyboard_phone_iphone_business-815659.jpg!d'})
      $('#shanlinliang').parallax({imageSrc: 'https://c.pxhere.com/photos/b4/e8/sailing_boat_ocean_open_water_sea_boat_sail_water_summer-1087243.jpg!d'})

    },
    SetScrollReveal: function () {
      window.sr = ScrollReveal({
        reset: true,
        duration: 1000,
        scale: 1,
      })
      sr.reveal('.sr')
      sr.reveal('.sr-r', { origin: 'right' })
      sr.reveal('.sr-l', { origin: 'left' })
      sr.reveal('.sr-b', { origin: 'bottom' })
      sr.reveal('.chunchicha-small', { delay: '400', scale: .95, easing: 'ease'})
    },
    ScrollToMain: function () {
      Jump('main',{
        offset: -90,
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
     this.windowHeight = $(window).height()
  }
});
