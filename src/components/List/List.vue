<template>
  <ul class="list">
    <ListItem
      v-for="item in list"
      :key="item.id"
      :title="item.title"
      :done="item.done"
      @click.native="toggleTodo(item.id)"
    >{{ item.title }}
    </ListItem>
  </ul>
</template>

<script>
import ListItem from '@/components/ListItem/ListItem'

export default {
  components: {
    ListItem
  },
  computed: {
    list () {
      return this.$store.getters.todos
    }
  },
  methods: {
    toggleTodo (id) {
      this.$store.commit('toggleTodo', id)
    }
  }
}
</script>

<style scoped>
.list {
  margin: 0;
  padding: 0;
}
</style>
