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
        title: 'My ads',
        link: '/my-ads',
        img: 'my-ads.svg'
      },
      {
        id: 3,
        title: 'New ad',
        link: '/new-ad',
        img: 'new-ad.svg'
      },
      {
        id: 4,
        title: 'Orders',
        link: '/orders',
        img: 'orders.svg'
      },
      {
        id: 5,
        title: 'Registration',
        link: '/registration',
        img: 'registration.svg'
      },
      {
        id: 6,
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
