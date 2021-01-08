<template>
  <div class="home">
    <div class="container">
      <splide class="slider" :options="options">
        <splide-slide
            class="slider__item"
            v-for="{ id, title, imgSrc } in ads"
            :key="id"
        >
          <h2 class="slider__title">
            <router-link :to="'/ad/:' + id">{{ title }}</router-link>
          </h2>
          <img :src="imgSrc" :alt="title"/>
        </splide-slide>
      </splide>
      <div class="products">
        <Product
            v-for="{ id, title, text, imgSrc } in ads"
            :key="id"
            :title="title"
            :text="text"
            :imgSrc="imgSrc"
        ></Product>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product'

export default {
  data () {
    return {
      ads: [
        {
          id: 1,
          title: 'First',
          text: 'some text 1',
          imgSrc:
              'https://img1.goodfon.ru/original/2880x900/7/ef/duesenberg-sj-272-2293.jpg',
          promo: false
        },
        {
          id: 2,
          title: 'First',
          text: 'some text 2',
          imgSrc:
              'https://devil-cars.pl/storage/images/R3ZDLOPsvG4CFwnmTk351R6kzNaWavTIaPwScdxU.jpeg',
          promo: false
        },
        {
          id: 3,
          title: 'First',
          text: 'some text 3',
          imgSrc:
              'https://www.carscoops.com/wp-content/uploads/2019/07/c1b689b8-corvette-c8-vs-c7-visual-comp-12.jpg',
          promo: false
        },
        {
          id: 4,
          title: 'First',
          text: 'some text 4',
          imgSrc: 'https://www.footmanjames.co.uk/media/77468/trabant-hero.jpg',
          promo: false
        }
      ],
      options: {
        rewind: true,
        gap: '1rem'
      }
    }
  },
  components: {
    Product
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
  &__img {
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
