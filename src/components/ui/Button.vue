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
  padding: 1rem 2.5rem;
  font-size: 1.6rem;
  color: white;
  background-color: $accent;
  border: none;
  cursor: pointer;
  transition: all .6s;
  &:hover {
    background-color: darken($accent, 5%);
  }
  &:focus {
    outline: none;
  }
}

</style>
