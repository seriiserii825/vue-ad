<template>
  <ul class="menu-vertical">
    <router-link
        tag="li"
        class="menu-vertical__item"
        :to="link" v-for="{id, title, link, img} in menu" :key="id"
    >
      <a @click="hideSidebar">
        <img :src="require(`@/assets/images/${img}`)" alt="">
        <span>{{ title }}</span> </a>
    </router-link>
  </ul>
</template>

<script>
import menuMixin from '@/mixins/menu-mixin'
import HideSidebar from '@/mixins/mixin-hide-sidebar'

export default {
  name: 'MenuVertical',
  mixins: [menuMixin, HideSidebar]
}
</script>

<style lang="scss">
@import "src/assets/scss/variables";
.menu-vertical {
  li {
    margin-bottom: 2rem;
    &.router-link-exact-active {
      a {
        color: lighten($contrast, 5%);
      }
    }
    a {
      display: flex;
      align-items: center;
      font-size: 2.6rem;
      font-weight: bold;
      color: white;
      transition: all .6s;
      text-shadow: 2px 2px 4px rgba(black, .4);
      &:hover {
        transform: scaleX(1.02);
        color: lighten($contrast, 5%);
      }
    }
    img {
      margin-right: 2rem;
      height: 20px;
    }
  }
}
</style>
