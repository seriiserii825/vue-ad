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
  computed: {
    orders () {
      return this.$store.getters.getOrders
    }
  },
  methods: {
    toggleChecked (id) {
      this.$store.commit('setOrder', id)
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
