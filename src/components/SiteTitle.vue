<template>
  <h1 class="site-title">
    <router-link to="/">{{ title }}</router-link>
  </h1>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/variables";
.site-title {
  font-size: 2.4rem;
  color: white;
}
</style>
