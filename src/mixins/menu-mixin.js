export default {
  computed: {
    menu () {
      if (this.$store.getters.user) {
        return this.$store.getters.getMenuLogIn
      }
      return this.$store.getters.getMenuLogOut
    }
  }
}
