const common = {
  methods: {
    getRoute (name) {
      return { name: 'Project', params: { name } }
    },
  },
}

export { common }
