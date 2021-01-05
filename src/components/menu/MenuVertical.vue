<template>
  <ul class="menu-vertical">
    <router-link tag="li" class="menu-vertical__item" :to="link" v-for="{id, title, link} in menu" :key="id">
      <a>{{ title }}</a>
    </router-link>
  </ul>
</template>

<script>
import menuMixin from '@/mixins/menu-mixin'

export default {
  name: 'MenuVertical',
  mixins: [menuMixin]
}
</script>

<style lang="scss">
@import "src/assets/scss/variables";
.menu-vertical {
  li {
    margin-bottom: 2rem;
    text-align: center;
    a {
      display: block;
      font-size: 2.6rem;
      font-weight: bold;
      color: white;
    }
  }
}
</style>
