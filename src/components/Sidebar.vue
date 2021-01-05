<template>
  <div class="sidebar">
    <div class="sidebar__left">
      <!--<Menu></Menu>-->
    </div>
  </div>
</template>

<script>
// import Menu from '@/components/Menu'

export default {
  components: {
    // Menu
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/variables";
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(black, .4);
  z-index: 1000;
  cursor: pointer;
  &__left {
    width: 30%;
    height: 100%;
    background-color: white;
    border-right: 1px solid $accent;
  }
}
</style>
