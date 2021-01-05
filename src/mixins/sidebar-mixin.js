export default {
  computed: {
    sidebar () {
      return this.$store.getters.getSidebarState
    }
  }
}
