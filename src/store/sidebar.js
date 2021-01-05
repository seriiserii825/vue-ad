export default {
  state: {
    sidebar: false
  },
  getters: {
    getSidebarState (state) {
      return state.sidebar
    }
  },
  mutations: {
    setSidebarState (state, payload) {
      state.sidebar = payload
    }
  }
}
