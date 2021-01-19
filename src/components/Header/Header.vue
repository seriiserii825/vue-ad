<template>
  <div class="header">
    <h2>My list of todos</h2>
    <form class="header__wrap">
      <input v-model="inputValue" @input="submitForm" type="text" placeholder="Type to search..."/>
      <button class="btn">Search</button>
    </form>
    <FilterItems/>
  </div>
</template>

<script>
import FilterItems from '@/components/FilterItems/FilterItems'

export default {
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    submitForm () {
      this.$store.commit('setTerm', this.inputValue)
    }
  },
  components: {
    FilterItems
  }
}
</script>

<style lang="scss">
.header {
  background-color: #f44336;
  padding: 30px 40px;
  color: white;
  text-align: center;
  &__wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
  }
  input {
    width: 60%;
  }
  .btn {
    width: 25%;
    border: none;
  }
}
</style>
