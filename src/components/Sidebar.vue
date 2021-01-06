<template>
  <div class="sidebar">
    <transition name="slide-left">
      <div v-if="sidebar" class="sidebar__left">
        <MenuVertical></MenuVertical>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="sidebar" @click="hideSidebar" class="sidebar__overlay"></div>
    </transition>
  </div>
</template>

<script>
import sidebarMixins from '@/mixins/sidebar-mixin'
import MenuVertical from '@/components/menu/MenuVertical'
import HideSidebar from '@/mixins/mixin-hide-sidebar'

export default {
  mixins: [sidebarMixins, HideSidebar],
  components: {
    MenuVertical
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/variables";
@import "src/assets/scss/animation";
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  pointer-events: none;
  &.active {
    pointer-events: initial;
  }
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(black, .2);
    z-index: 10;
    cursor: pointer;
  }
  &__left {
    position: relative;
    padding: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100%;
    background: darken($accent, 15%);
    border-right: 1px solid $accent;
    z-index: 11;
    @media screen and (max-width: 576px) {
      width: 70%;
    }
  }
}
</style>
