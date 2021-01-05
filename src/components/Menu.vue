<template>
  <ul class="main-menu">
    <router-link tag="li" class="main-menu__item" :to="link" v-for="{id, title, link} in menu" :key="id">
      <a>{{ title }}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        {
          id: 1,
          title: 'Home',
          link: '/'
        },
        {
          id: 2,
          title: 'About',
          link: '/about'
        },
        {
          id: 3,
          title: 'Contacts',
          link: '/contacts'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/variables.scss";
@keyframes scaleBtn {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
  80% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
}
.main-menu {
  display: flex;
  align-items: center;
  &__item {
    margin-right: 2rem;
    &.router-link-exact-active {
      a {
        &:after {
          transform: scaleX(1);
        }
      }
    }
    a {
      position: relative;
      display: block;
      padding: 10px 0;
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
        background-color: $accent;
        transition: all .8s;
      }
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        background-color: rgba($accent, .4);
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(1);
        opacity: 0;
      }
      &:active {
        &::before {
          animation-name: scaleBtn;
          animation-duration: 1s;
          animation-fill-mode: forwards;
        }
      }
    }
  }
}
</style>
