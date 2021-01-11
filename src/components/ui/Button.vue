<template>
  <button class="btn" :class="{'btn--loading': loading}" :type="type">
    <router-link v-if="to" :to="to"><span>{{ label }}</span></router-link>
    <span v-else>{{ label }}</span>
    <img v-if="loading" :src="require(`@/assets/images/static/loading.svg`)" alt="">
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String
    },
    label: {
      required: true,
      type: String
    },
    to: {
      type: String
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/variables";
@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
.btn {
  position: relative;
  padding: 1rem 2.5rem;
  font-size: 1.6rem;
  color: white;
  background-color: $accent;
  border: none;
  cursor: pointer;
  transition: all .3s;
  overflow: hidden;
  &.btn--loading {
    color: transparent;
    background-color: deeppink;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      width: 20px;
      animation-name: rotate;
      animation-duration: .6s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      z-index: 10;
    }
  }
  &:hover {
    background-color: darken($accent, 5%);
    &::before {
      left: -100%;
    }
    &::after {
      right: -100%;
    }
  }
  &:focus {
    outline: none;
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(white, .4);
    transition: all .8s;
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
  &.btn--blue {
    background-color: royalblue;
    &:active {
      background-color: darken(royalblue, 10%);
    }
  }
  &.btn--pink {
    background-color: hotpink;
    &:active {
      background-color: darken(hotpink, 10%);
    }
  }
}

</style>
