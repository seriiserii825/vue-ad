export default {
  state: {
    menu: [
      {
        id: 1,
        title: 'Home',
        link: '/'
      },
      {
        id: 2,
        title: 'About',
        link: '/about'
      },
      {
        id: 3,
        title: 'Contacts',
        link: '/contacts'
      }
    ]
  },
  getters: {
    getMenuState (state) {
      return state.menu
    }
  }
}
