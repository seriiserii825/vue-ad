<template>
  <ul class="menu-horizontal">
    <router-link tag="li" class="menu-horizontal__item" :to="link" v-for="{id, title, link, img} in menu" :key="id">
      <a>
        <img :src="require(`@/assets/images/${img}`)" alt="">
        <span>{{ title }}</span>
      </a>
    </router-link>
  </ul>
</template>

<script>
import menuMixin from '@/mixins/menu-mixin'

export default {
  mixins: [menuMixin]
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables";
@keyframes scaleBtn {
  0% {
    opacity: 0;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.menu-horizontal {
  display: flex;
  align-items: center;
  @media screen and (max-width: 992px) {
    display: none;
  }
  &__item {
    margin-right: 4rem;
    &.router-link-exact-active {
      a {
        &:after {
          transform: scaleX(1);
        }
      }
    }
    a {
      position: relative;
      display: flex;
      align-items: center;
      padding: 10px 0;
      color: white;
      &:hover::after {
        transform: scaleX(1);
      }
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        transform: scaleX(0);
        background-color: white;
        transition: all .8s;
      }
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        background-color: rgba(white, .3);
        transform: translate(-50%, -50%);
        opacity: 0;
      }
      &:active {
        &::before {
          animation-name: scaleBtn;
          animation-duration: .2s;
          animation-fill-mode: forwards;
        }
      }
      img {
        margin-right: 2rem;
        height: 20px;
      }
    }
  }
}
</style>
