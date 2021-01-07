<template>
  <div class="login">
    <div class="login__form">
      <Form>
        <h2 class="form__title" slot="title">Form login</h2>
        <FormGroup @input="validateInput" v-model="email" slot="form-group-1" type="email" label="Email" icon="user"></FormGroup>
        <FormGroup v-model="password" slot="form-group-2" type="password" label="Password" icon="lock"></FormGroup>
        <Button type="submit" label="Login" slot="submit"></Button>
      </Form>
    </div>
  </div>
</template>

<script>
import Form from '@/components/form/Form'
import FormGroup from '@/components/form/FormGroup'
import Button from '@/components/ui/Button'
import { validationMixin } from 'vuelidate'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    Form,
    FormGroup,
    Button
  },
  methods: {
    validateInput () {
      console.log(this.email)
    }
  },
  mixins: [validationMixin]
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
