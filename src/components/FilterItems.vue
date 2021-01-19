<template>
  <div class="filter-items">
    <button
        v-for="(item, index) in filterButtons"
        :key="item.id"
        :class="[item.class, {'active': activeIndex === index}]"
        class="btn"
        @click="changeFilter(item.class, index)"
    >{{ item.label }}
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: undefined
    }
  },
  methods: {
    changeFilter (term, index) {
      this.activeIndex = index
      this.$store.commit('setFilter', term)
    }
  },
  computed: {
    filterButtons () {
      return this.$store.getters.filterButtons
    }
  }
}
</script>

<style lang="scss">
.filter-items {
  .btn {
    &.active {
      color: white;
      background-color: royalblue;
    }
  }
}
</style>
