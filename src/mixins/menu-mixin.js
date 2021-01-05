export default {
  computed: {
    menu () {
      return this.$store.getters.getMenuState
    }
  }
}
