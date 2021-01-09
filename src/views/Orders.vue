<template>
  <div class="page-orders">
    <div class="page-orders__content">
      <PageTitle title="Orders"></PageTitle>
      <CheckList>
        <CheckListItem
            v-for="{id, title, text, done} in orders"
            :id="id"
            :key="id"
            :title="title"
            :text="text"
            :done="done"
            @click.native="toggleChecked(id)"
        ></CheckListItem>
      </CheckList>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import CheckList from '@/components/ui/CheckList'
import CheckListItem from '@/components/ui/CheckListItem'

export default {
  data () {
    return {
      orders: [
        {
          id: 1,
          title: 'Order 1',
          text: 'Order 1 text',
          done: false
        },
        {
          id: 2,
          title: 'Order 2',
          text: 'Order 2 text',
          done: false
        },
        {
          id: 3,
          title: 'Order 3',
          text: 'Order 3 text',
          done: false
        }
      ]
    }
  },
  methods: {
    toggleChecked (id) {
      console.log(this.orders)
      this.orders.map(item => {
        if (item.id === id) {
          item.done = !item.done
        }
      })
    }
  },
  components: {
    PageTitle,
    CheckList,
    CheckListItem
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/variables";
.page-orders {
  &__content {
    margin: 0 auto;
    max-width: 600px;
  }
}
</style>
