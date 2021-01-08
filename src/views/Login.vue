<template>
  <div class="login">
    <div class="login__form">
      <Form>
        <h2 class="form__title" slot="title">Form login</h2>
        <div class="form__group" :class="{'active': inputEmailFocus}" slot="form-group-1">
          <label :for="email">Email</label>
          <font-awesome-icon :icon="['fas','user']"/>
          <input @focusin="inputEmailFocus = true" @focusout="checkEmailFocus($event)" type="email" id="email">
          <p class="field-error"></p>
        </div>
        <div class="form__group" :class="{'active': inputPasswordFocus}" slot="form-group-2">
          <label :for="password">Password</label>
          <font-awesome-icon :icon="['fas','lock']"/>
          <input @focusin="inputPasswordFocus = true" @focusout="checkPasswordFocus($event)" type="password" id="password">
          <p class="field-error"></p>
        </div>
        <Button type="submit" label="Login" slot="submit"></Button>
      </Form>
    </div>
  </div>
</template>

<script>
import Form from '@/components/form/Form'
import Button from '@/components/ui/Button'

export default {
  data () {
    return {
      email: '',
      password: '',
      inputEmailFocus: false,
      inputPasswordFocus: false
    }
  },
  components: {
    Form,
    Button
  },
  methods: {
    checkEmailFocus (e) {
      if (e.target.value === '') {
        this.inputEmailFocus = false
      }
    },
    checkPasswordFocus (e) {
      if (e.target.value === '') {
        this.inputPasswordFocus = false
      }
    }
  }
}
</script>

<style lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}
</style>
