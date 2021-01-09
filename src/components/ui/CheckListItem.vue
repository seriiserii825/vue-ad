<template>
  <li class="check-list__item">
    <div class="check-list__label">
      <input v-if="done" type="checkbox" :value="id" :id="id" checked>
      <input v-else type="checkbox" :value="id" :id="id">
      <label :for="id"></label>
    </div>
    <div class="check-list__content">
      <h3 class="check-list__title">{{ title }}</h3>
      <p class="check-list__text">{{ text }}</p>
    </div>
    <Button :to="'/orders/123'" class="check-list__btn" label="Open"></Button>
  </li>
</template>

<script>
import Button from '@/components/ui/Button'

export default {
  props: {
    title: {
      required: true,
      type: String
    },
    text: {
      required: true,
      type: String
    },
    id: {
      required: true
    },
    done: {
      type: Boolean
    }
  },
  methods: {
    toggleChecked () {
    }
  },
  components: {
    Button
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/variables";
.check-list {
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    padding: 2rem;
    border: 2px solid rgba($accent, .4);
    input[type="checkbox"] {
      display: none;
      &:checked ~ label::after {
        opacity: 1;
      }
    }
    label {
      position: relative;
      display: block;
      margin-right: 2rem;
      width: 27px;
      height: 27px;
      cursor: pointer;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        border: 2px solid $accent;
        border-radius: .3rem;
      }
      &::after {
        content: '';
        position: absolute;
        top: 8px;
        left: 5px;
        width: 14px;
        height: 8px;
        background: url('../../assets/images/static/check.svg') no-repeat center;
        background-size: cover;
        opacity: 0;
        transition: all .6s;
      }
    }
  }
  &__label,
  &__content {
    cursor: pointer;
  }
  &__title {
    margin-bottom: 1rem;
    font-size: 2.2rem;
  }
  &__text {
    font-size: 1.8rem;
  }
  &__btn {
    margin-left: auto;
  }
}
</style>
