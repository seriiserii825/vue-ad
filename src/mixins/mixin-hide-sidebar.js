export default {
  methods: {
    hideSidebar () {
      this.$store.commit('setSidebarState', false)
    }
  }
}
