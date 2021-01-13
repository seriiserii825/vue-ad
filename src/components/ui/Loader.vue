<template>
  <div class="loader">
    <img :src="require(`@/assets/images/static/loading.svg`)" alt="">
  </div>
</template>

<script>
export default {}
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
.loader {
  position: relative;
  width: 100%;
  height: 80vh;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20%;
    animation-name: rotate;
    animation-duration: .6s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
}
</style>
