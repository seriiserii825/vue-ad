<template>
  <div class="home">
    <div class="container" v-if="!loading">
      <splide class="slider" :options="options">
        <splide-slide
          class="slider__item"
          v-for="{ id, title, imgSrc } in promoAds"
          :key="id"
        >
          <h2 class="slider__title">
            <router-link :to="'/ad/' + id">{{ title }}</router-link>
          </h2>
          <img :src="imgSrc" :alt="title"/>
        </splide-slide>
      </splide>
      <div class="products">
        <Product
          v-for="{ id, title, text, imgSrc } in ads"
          :id="id"
          :key="id"
          :title="title"
          :text="text"
          :imgSrc="imgSrc"
        ></Product>
      </div>
    </div>
    <template v-else>
      <Loader></Loader>
    </template>
  </div>
</template>

<script>
import Product from '@/components/Product'
import Loader from '@/components/ui/Loader'

export default {
  data () {
    return {
      options: {
        rewind: true,
        gap: '1rem'
      }
    }
  },
  computed: {
    ads () {
      console.log(this.$store.getters.getAds)
      return this.$store.getters.getAds
    },
    promoAds () {
      return this.$store.getters.getPromoAds
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  components: {
    Product,
    Loader
  }
}
</script>
<style lang="scss">
.slider {
  margin-bottom: 10rem;
  &__item {
    position: relative;
  }
  &__title {
    position: absolute;
    bottom: 5rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 2rem 4rem;
    background-color: rgba(black, 0.8);
    box-shadow: 0 4px 18px rgba(black, 0.6);
    border-radius: 1rem;
    z-index: 2;
    transition: all 0.4s;
    &:hover {
      background-color: black;
      box-shadow: none;
    }
    a {
      font-size: 2.8rem;
      color: white;
      transition: all 0.4s;
    }
  }
  img {
    position: relative;
    z-index: 1;
  }
}
.products {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 -2rem;
  @media screen and (max-width: 768px) {
    display: block;
  }
  &__item {
    margin: 0 2rem 4rem;
    flex-basis: calc(50% - 4rem);
    border-bottom: 2px solid #ccc;
    box-shadow: 0 4px 8px rgba(black, .2);
  }
  &__body {
    padding: 2rem;
  }
  &__footer {
    display: flex;
    justify-content: flex-end;
    padding: 2rem 2rem 4rem;
    .btn {
      margin-left: 1rem;
    }
  }
}
</style>
