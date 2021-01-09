<template>
  <h2 class="page-title">{{ title }}</h2>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      default: 'Page title'
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/variables";
.page-title {
  margin-bottom: 4rem;
  font-size: 4rem;
}
</style>
