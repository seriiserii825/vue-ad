<template>
  <form class="add-item" @submit.prevent="onSubmit">
    <h2>Add new todo</h2>
    <div class="add-item__wrap">
      <input
          type="text"
          placeholder="Type to search..."
          v-model="inputValue"
      />
      <button class="btn">Add new todo</button>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    onSubmit () {
      if (this.inputValue === '') {
        alert('field is empty')
      } else {
        this.$store.commit('addTodo', this.inputValue)
        this.inputValue = ''
      }
    }
  }
}
</script>

<style lang="scss">
.add-item {
  padding: 30px;
  text-align: center;
  background-color: lightseagreen;
  h2 {
    color: white;
  }
  &__wrap {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input {
    width: 60%;
  }
  .btn {
    width: 25%;
    outline: none;
    border: none;
  }
}
</style>
