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
import ListItem from '@/components/ListItem/ListItem'

export default {
  components: {
    ListItem
  },
  computed: {
    list () {
      const term = this.$store.getters.term
      console.log('term ' + term)

      if (term) {
        return this.$store.getters.todos.map(item => {
          console.log('title ' + item.title)
          console.log('term ' + term)
          console.log('result ' + item.title.indexOf(term) > -1)
          return item.title.indexOf(term) > -1
        })
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
