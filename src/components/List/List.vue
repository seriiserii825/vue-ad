<template>
  <ul class="list">
    <ListItem/>
  </ul>
</template>

<script>
import ListItem from '@/components/ListItem/ListItem'

export default {
  components: {
    ListItem
  }
}
</script>

<style scoped>
.list {
  margin: 0;
  padding: 0;
}
</style>
