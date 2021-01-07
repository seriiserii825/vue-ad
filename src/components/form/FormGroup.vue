<template>
  <div class="form__group" :class="{'active': inputFocus}">
    <label :for="type">{{ label }}</label>
    <font-awesome-icon :icon="['fas',icon]"/>
    <input @focusin="inputFocus = true" @input="checkInput($event)" @focusout="checkFocus($event)" :type="type" :name="type" :id="type">
    <p class="field-error" v-if="errorMessage.required">{{ validateInput }}</p>
  </div>
</template>

<script>

export default {
  props: ['type', 'label', 'icon', 'errorMessage'],
  data () {
    return {
      inputFocus: false,
      inputEmpty: true
    }
  },
  methods: {
    checkInput (e) {
      this.$emit('input', e.target.value)
    },
    checkFocus (e) {
      if (e.target.value === '') {
        this.inputFocus = false
      }
    }
  },
  computed: {
    validateInput () {
      if (this.errorMessage.required) {
        return this.errorMessage.required
      } else if (this.errorMessage.email) {
        return this.errorMessage.email
      } else {
        return ''
      }
    }
  }
}

</script>

<style lang="scss">
@import "src/assets/scss/variables";
.field-error {
  position: absolute;
  bottom: -2rem;
  left: 4.5rem;
  font-size: 1.2rem;
  color: red;
}
</style>
