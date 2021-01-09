<template>
  <div class="products__item">
    <ImageAbsolute v-image-height="'36rem'" :img-src="imgSrc"></ImageAbsolute>
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
import ImageAbsolute from '@/components/ui/ImageAbsolute'

export default {
  props: ['title', 'text', 'imgSrc'],
  components: {
    ImageAbsolute
  }
}
</script>

<style scoped>

</style>
