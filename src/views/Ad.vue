<template>
  <div class="ad">
    <ImageAbsolute v-image-height="'60rem'" :img-src="adImg"></ImageAbsolute>
    <div class="cards-h__body">
      <div class="cards-h__content">
        <h2 class="cards-h__title">{{ ad.title }}</h2>
        <p class="cards-h__text">{{ ad.text }}</p>
      </div>
    </div>
    <div class="cards-h__footer">
      <Button label="Edit" class="btn btn--pink btn--hover"></Button>
      <Button label="Buy" class="btn btn--blue btn--hover"></Button>
    </div>
  </div>
</template>

<script>
import ImageAbsolute from '@/components/ui/ImageAbsolute'
import Button from '@/components/ui/Button'

export default {
  props: ['id'],
  data () {
    return {
      adSingle: null
    }
  },
  computed: {
    ad () {
      return this.$store.getters.getAdById(this.id)
    }
  },
  mounted () {
    this.adSingle = this.ad
    console.log(this.adSingle)
  },
  methods: {
    adImg () {
      if (this.adSingle.imgSrc) {
        return require(`@/assets/images/products/${this.adSingle.imgSrc}`)
      } else {
        return '@/assets/images/products/2.jpg'
      }
    }
  },
  components: {
    ImageAbsolute,
    Button
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/variables";
.cards-h__footer {
  display: flex;
  justify-content: flex-end;
}
</style>
