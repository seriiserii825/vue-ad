<template>
  <div class="page-my-ads">
    <PageTitle title="My ads"></PageTitle>
    <Grid class="cards-h" v-grid-columns="3">
      <GridItem class="cards-h__item" v-for="{id, title, text, imgSrc} in myAds" :key="id">
        <ImageAbsolute v-image-height="'20rem'" v-image-media-height="'30rem'" :img-src="require(`@/assets/images/products/${imgSrc}`)"></ImageAbsolute>
        <div class="cards-h__body">
          <div class="cards-h__content">
            <h2 class="cards-h__title">{{ title }}</h2>
            <p class="cards-h__text">{{ text }}</p>
          </div>
          <Button label="Open" :to="`/ad/${id}`"></Button>
        </div>
      </GridItem>
    </Grid>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import Button from '@/components/ui/Button'
import Grid from '@/components/grid/Grid'
import GridItem from '@/components/grid/GridItem'
import ImageAbsolute from '@/components/ui/ImageAbsolute'

export default {
  computed: {
    myAds () {
      return this.$store.getters.getMyAds
    }
  },
  components: {
    PageTitle,
    Button,
    Grid,
    GridItem,
    ImageAbsolute
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/variables";
.page-my-ads {
  @media screen and (max-width: 992px) {
    padding: 0 15px;
  }
}
.cards-h {
  &__item {
    box-shadow: 0 2px 4px rgba(black, .3);
  }
  &__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
  }
}
</style>
