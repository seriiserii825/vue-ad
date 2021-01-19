<template>
  <ul class="list">
    <ListItem
      v-for="item in list"
      :key="item.id"
      :title="item.title"
      :done="item.done"
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
  }
}
</script>

<style scoped>
.list {
  margin: 0;
  padding: 0;
}
</style>
