<template>
  <div class="products__item">
    <div class="products__img">
      <img :src="imgSrc" alt=""/>
    </div>
    <div class="products__body">
      <h2 class="products__title">{{ title }}</h2>
      <p class="products__text">{{ text }}</p>
    </div>
    <div class="products__footer">
      <router-link to="" class="btn btn--pink btn--hover">Open</router-link>
      <router-link to="" class="btn btn--blue btn--hover">Buy</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'text', 'imgSrc']
}
</script>

<style scoped>

</style>
