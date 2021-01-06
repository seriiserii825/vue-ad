export default {
  state: {
    menu: [
      {
        id: 1,
        title: 'Home',
        link: '/',
        img: 'home.svg'
      },
      {
        id: 2,
        title: 'About',
        link: '/about',
        img: 'about.svg'
      },
      {
        id: 3,
        title: 'Contacts',
        link: '/contacts',
        img: 'contacts.svg'
      },
      {
        id: 4,
        title: 'Login',
        link: '/login',
        img: 'login.svg'
      }
    ]
  },
  getters: {
    getMenuState (state) {
      return state.menu
    }
  }
}
