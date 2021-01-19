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
      const filter = this.$store.getters.filter

      if (term) {
        return this.$store.getters.todos.filter(el => el.title.toLowerCase().indexOf(term.toLowerCase()) > -1)
      } else {
        switch (filter) {
          case 'all':
            return this.$store.getters.todos
          case 'done':
            return this.$store.getters.todos.filter(item => item.done)
        }
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
