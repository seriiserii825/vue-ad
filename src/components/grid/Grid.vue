<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.grid {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -2rem;
  @media screen and (max-width: 576px) {
    display: block;
  }
  &.grid--2 {
    .grid__item {
      flex-basis: calc(50% - 4rem);
      margin: 0 2rem 4rem;
      @media screen and (max-width: 576px) {
        margin: 0 auto 40px;
        max-width: 400px;
      }
    }
  }
  &.grid--3 {
    .grid__item {
      flex-basis: calc(33% - 4rem);
      margin: 0 2rem 4rem;
      @media screen and (max-width: 992px) {
        flex-basis: calc(50% - 4rem);
      }
      @media screen and (max-width: 576px) {
        margin: 0 auto 40px;
        max-width: 400px;
      }
    }
  }
  &.grid--4 {
    .grid__item {
      flex-basis: calc(25% - 4rem);
      margin: 0 2rem 4rem;
      @media screen and (max-width: 1200px) {
        flex-basis: calc(33% - 4rem);
      }
      @media screen and (max-width: 992px) {
        flex-basis: calc(50% - 4rem);
      }
      @media screen and (max-width: 576px) {
        margin: 0 auto 40px;
        max-width: 400px;
      }
    }
  }
}
</style>
