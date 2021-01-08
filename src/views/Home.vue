<template>
  <div class="home">
    <splide class="cards" :options="options">
      <splide-slide class="card" v-for="{id, title, imgSrc} in ads" :key="id">
        <h2 class="card__title">
          <router-link :to="'/ad/:'+id">{{ title }}</router-link>
        </h2>
        <img :src="imgSrc" :alt="title">
      </splide-slide>
    </splide>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ads: [
        {
          id: 1,
          title: 'First',
          text: 'some text 1',
          imgSrc: 'https://img1.goodfon.ru/original/2880x900/7/ef/duesenberg-sj-272-2293.jpg',
          promo: false
        },
        {
          id: 2,
          title: 'First',
          text: 'some text 2',
          imgSrc: 'https://devil-cars.pl/storage/images/R3ZDLOPsvG4CFwnmTk351R6kzNaWavTIaPwScdxU.jpeg',
          promo: false
        },
        {
          id: 3,
          title: 'First',
          text: 'some text 3',
          imgSrc: 'https://www.carscoops.com/wp-content/uploads/2019/07/c1b689b8-corvette-c8-vs-c7-visual-comp-12.jpg',
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
  }
}
</script>
<style lang="scss">
.card {
  position: relative;
  &__title {
    position: absolute;
    bottom: 5rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 2rem 4rem;
    background-color: rgba(black, .8);
    box-shadow: 0 4px 18px rgba(black, .6);
    border-radius: 1rem;
    z-index: 2;
    transition: all .4s;
    &:hover {
      background-color: black;
      box-shadow: none;
    }
    a {
      font-size: 2.8rem;
      color: white;
      transition: all .4s;
    }
  }
  img {
    position: relative;
    z-index: 1;
  }
}
</style>
