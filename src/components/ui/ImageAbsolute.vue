<template>
  <div class="image">
    <img :src="imgSrc" alt=""/>
  </div>
</template>

<script>
export default {
  props: ['imgSrc']
}
</script>

<style lang="scss">
@import "src/assets/scss/variables";
.image {
  position: relative;
  height: 40rem;
  overflow: hidden;
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all .6s;
  }
}
</style>
