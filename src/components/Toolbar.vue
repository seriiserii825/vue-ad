<template>
  <div class="toolbar">
    <app-sandwich
        @click.native="showSidebar"
        class="toolbar__sandwich"
    ></app-sandwich>
    <SiteTitle class="toolbar__site-title" title="Ad project"></SiteTitle>
    <Menu class="toolbar__menu"></Menu>
  </div>
</template>

<script>
import Sandwich from '@/components/Sandwich'
import SiteTitle from '@/components/SiteTitle'
import Menu from '@/components/menu/MenuHorizontal'

export default {
  components: {
    'app-sandwich': Sandwich,
    SiteTitle,
    Menu
  },
  methods: {
    showSidebar () {
      this.$store.commit('setSidebarState', true)
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/variables";
.toolbar {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  background-color: $accent;
  box-shadow: 0 4px 8px rgba(0, 0, 0, .3);
  border-bottom: 1px solid darken($accent, 3%);
  z-index: 10;
  &__sandwich {
    position: static;
  }
  &__site-title {
    margin-right: auto;
    margin-left: 4rem;
  }
}
</style>
