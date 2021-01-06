<template>
  <div class="form__group" :class="{'active': inputFocus}">
    <label :for="type">{{ label }}</label>
    <font-awesome-icon :icon="['fas',icon]"/>
    <input @focusin="inputFocus = true" @focusout="inputFocus = false" :type="type" :name="type" :id="type">
  </div>
</template>

<script>

export default {
  props: ['type', 'label', 'icon'],
  data () {
    return {
      inputFocus: false
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/variables";

</style>
