export default {
  state: {
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
  },
  getters: {
    getOrders (state) {
      return state.orders
    }
  },
  mutations: {
    setOrder (state, payload) {
      state.orders.map(item => {
        if (item.id === payload) {
          item.done = true
        }
      })
    }
  }
}
