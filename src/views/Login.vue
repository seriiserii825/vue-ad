<template>
  <div class="login">
    <div class="login__form">
      <Form>
        <h2 class="form__title" slot="title">Form login</h2>
        <FormGroup :errorMessage="{email: errors.email.email, required: errors.email.email}" @input="checkInput" v-model="email" slot="form-group-1" type="email" label="Email" icon="user"></FormGroup>
        <FormGroup :errorMessage="{required: errors.password.required}" v-model="password" slot="form-group-2" type="password" label="Password" icon="lock"></FormGroup>
        <Button @click.native="checkForm" type="submit" label="Login" slot="submit"></Button>
      </Form>
    </div>
  </div>
</template>

<script>
import Form from '@/components/form/Form'
import FormGroup from '@/components/form/FormGroup'
import Button from '@/components/ui/Button'

export default {
  data () {
    return {
      errors: {
        email: {
          required: '',
          email: ''
        },
        password: {
          required: ''
        }
      },
      email: null,
      password: null
    }
  },
  components: {
    Form,
    FormGroup,
    Button
  },
  methods: {
    checkInput: function () {
      if (!this.validEmail(this.email)) {
        this.errors.email.email = 'Email address is incorrect'
      }
    },
    validEmail: function (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    checkForm () {
      if (!this.email) {
        this.errors.email.required = 'This field is required'
      } else {
        this.errors.email.required = ''
      }
      if (!this.password) {
        this.errors.password.required = 'This field is required'
      } else {
        this.errors.password.required = ''
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
