<template>
  <div class="sandwich-wrap" id="js-sandwich-wrap">
    <div class="sandwich">
      <div class="sandwich__line sandwich__line--top"></div>
      <div class="sandwich__line sandwich__line--middle"></div>
      <div class="sandwich__line sandwich__line--bottom"></div>
    </div>
  </div>
</template>

<style lang="scss">
@import "src/assets/scss/variables";
.sandwich-wrap {
  padding: 18px 10px;
  border-radius: 3px;
  z-index: 1001;
  @media screen and (max-width: 576px) {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
}
.sandwich {
  position: relative;
  display: block;
  width: 23px;
  height: 14px;
  cursor: pointer;
}
.sandwich--active .sandwich__line--top {
  top: 6px;
  transform: rotate(45deg);
}
.sandwich--active .sandwich__line--middle {
  opacity: 0;
}
.sandwich--active .sandwich__line--bottom {
  top: 6px;
  transform: rotate(-45deg);
}
.sandwich__line {
  position: absolute;
  left: 0;
  display: block;
  width: 100%;
  height: 2px;
  transition: all linear 0.1s;
  background-color: white;
}
.sandwich__line--top {
  top: 0;
}
.sandwich__line--middle {
  top: 6px;
}
.sandwich__line--bottom {
  top: 12px;
}
</style>
