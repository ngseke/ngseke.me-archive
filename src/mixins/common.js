const common = {
  data () {
    return {
    }
  },
  methods: {
    top () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },
}

export { common }
