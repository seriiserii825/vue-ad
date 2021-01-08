<template>
  <button class="btn" :type="type">{{ label }}</button>
</template>

<script>
export default {
  props: ['type', 'label']
}
</script>

<style lang="scss">
@import "src/assets/scss/variables";
.btn {
  position: relative;
  padding: 1rem 2.5rem;
  font-size: 1.6rem;
  color: white;
  background-color: $accent;
  border: none;
  cursor: pointer;
  transition: all .6s;
  overflow: hidden;
  &:hover {
    background-color: darken($accent, 5%);
    &::before {
      left: -100%;
    }
    &::after {
      right: -100%;
    }
  }
  &:focus {
    outline: none;
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(white, .4);
    transition: all .8s;
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
  &.btn--blue {
    background-color: royalblue;
    &:active {
      background-color: darken(royalblue, 10%);
    }
  }
  &.btn--pink {
    background-color: hotpink;
    &:active {
      background-color: darken(hotpink, 10%);
    }
  }
}

</style>
