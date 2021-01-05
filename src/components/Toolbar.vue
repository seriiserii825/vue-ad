<template>
  <div class="toolbar">
    <app-sandwich class="toolbar__sandwich"></app-sandwich>
    <SiteTitle title="Ad project"></SiteTitle>
    <Menu class="toolbar__menu"></Menu>
  </div>
</template>

<script>
import Sandwich from '@/components/Sandwich'
import SiteTitle from '@/components/SiteTitle'
import Menu from '@/components/Menu'

export default {
  components: {
    'app-sandwich': Sandwich,
    SiteTitle,
    Menu
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/variables";
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f1f1f1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, .2);
  &__sandwich {
    position: static;
  }
  &__menu {
    margin-right: 6rem;
  }
}
</style>
