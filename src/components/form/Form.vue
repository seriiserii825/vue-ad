<template>
  <div class="form">
    <slot name="title"></slot>
    <div class="form__body">
      <slot name="form-group-1"></slot>
      <slot name="form-group-2"></slot>
      <footer class="form__footer">
        <slot name="submit"></slot>
      </footer>
    </div>
  </div>
</template>

<script>

export default {}
</script>

<style lang="scss">
@import "src/assets/scss/variables";
.form {
  width: 400px;
  box-shadow: 0 4px 18px rgba(black, .4);
  @media screen and (max-width: 430px) {
    width: 300px;
  }
  &__title {
    padding: 2rem;
    color: white;
    background-color: $accent;
  }
  &__body {
    padding: 4rem 2rem 2rem;
  }
  &__group {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    &.active {
      label {
        top: -1.5rem;
        font-size: 1.2rem;
        color: $accent;
      }
      input {
        border-bottom-color: $accent;
        outline: none;
      }
      svg {
        color: $accent;
      }
    }
  }
  &__footer {
    text-align: right;
  }
  label {
    position: absolute;
    top: 30%;
    left: 4.5rem;
    font-size: 1.4rem;
    transition: all .4s;
    @media screen and (max-width: 1200px) {
      font-size: 1.8rem;
    }
  }
  input {
    width: 100%;
    height: 4rem;
    font-size: 1.6rem;
    border: none;
    border-bottom: 1px solid #888;
    transition: all .4s;
    @media screen and (max-width: 1200px) {
      font-size: 1.8rem;
    }
  }
  svg {
    margin-right: 2rem;
    transition: all .4s;
  }
}
</style>
