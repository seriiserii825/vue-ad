<template>
  <Transition name="error">
    <div class="error-block">
      <span> <slot></slot> </span>
      <Button @click.native="clearError" v-color="'white'" v-background-color="'red'" label="Close"></Button>
    </div>
  </Transition>
</template>

<script>
import Button from '@/components/ui/Button'

export default {
  components: {
    Button
  },
  methods: {
    clearError () {
      this.$store.commit('clearError')
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/variables";
.error-block {
  position: fixed;
  bottom: 0;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translate(-50%, 0);
  padding: 2rem 5rem;
  color: darkred;
  border: 1px solid red;
  box-shadow: 0 -4px 8px rgba(black, .2);
  span {
    margin-bottom: 2rem;
  }
}
.error-enter-active {
  transition: all .3s ease;
}
.error-leave-active {
  transition: all .8s ease;
}
.error-enter,
.error-leave-to {
  transform: translate(-50%, 100%);
  opacity: 0;
}
</style>
