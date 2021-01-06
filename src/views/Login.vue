<template>
  <div class="login">
    <div class="login__form">
      <Form>
        <h2 class="form__title" slot="title">Form login</h2>
        <FormGroup slot="form-group-1" type="email" label="Email" icon="user"></FormGroup>
        <FormGroup slot="form-group-2" type="password" label="Password" icon="lock"></FormGroup>
        <Button type="submit" label="Login" slot="submit"></Button>
      </Form>
    </div>
  </div>
</template>

<script>
import Form from '@/components/form/Form'
import FormGroup from '@/components/form/FormGroup'
import Button from '@/components/ui/Button'

export default {
  components: {
    Form,
    FormGroup,
    Button
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
