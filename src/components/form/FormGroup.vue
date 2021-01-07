<template>
  <div class="form__group" :class="{'active': inputFocus}">
    <label :for="type">{{ label }}</label>
    <font-awesome-icon :icon="['fas',icon]"/>
    <input @focusin="inputFocus = true" @input="checkInput($event)" @focusout="inputFocus = false" :type="type" :name="type" :id="type">
  </div>
</template>

<script>

export default {
  props: ['type', 'label', 'icon', 'value'],
  data () {
    return {
      inputFocus: false
    }
  },
  methods: {
    checkInput (value) {
      this.$emit('input', value)
    }
  }
}

</script>

<style lang="scss">
@import "src/assets/scss/variables";

</style>
