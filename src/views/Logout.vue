<template>
  <div></div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('userLogOut')
    this.$router.push('/')
  }
}
</script>

<style scoped>

</style>
