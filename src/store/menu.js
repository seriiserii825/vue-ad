export default {
  state: {
    menuLogIn: [
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
        title: 'Logout',
        link: '/logout',
        img: 'logout.svg'
      }
    ],
    menuLogOut: [
      {
        id: 6,
        title: 'Registration',
        link: '/registration',
        img: 'registration.svg'
      },
      {
        id: 7,
        title: 'Login',
        link: '/login',
        img: 'login.svg'
      }
    ]
  },
  getters: {
    getMenuLogIn (state) {
      return state.menuLogIn
    },
    getMenuLogOut (state) {
      return state.menuLogOut
    }
  }
}
