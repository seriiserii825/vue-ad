<template>
  <ul class="list">
    <ListItem
        v-for="item in list"
        :key="item.id"
        :title="item.title"
        :done="item.done"
        :id="item.id"
    >{{ item.title }}
    </ListItem>
  </ul>
</template>

<script>
import ListItem from '@/components/ListItem'

export default {
  components: {
    ListItem
  },
  computed: {
    list () {
      const term = this.$store.getters.term
      console.log('term ' + term)

      if (term) {
        return this.$store.getters.todos.filter(el => el.title.toLowerCase().indexOf(term.toLowerCase()) > -1)
      } else {
        return this.$store.getters.todos
      }
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
