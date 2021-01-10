export default {
  state: {
    ads: [
      {
        id: 1,
        title: 'First',
        text: 'some text 1',
        imgSrc: '1.jpg',
        promo: false
      },
      {
        id: 2,
        title: 'Second',
        text: 'some text 2',
        imgSrc: '2.jpg',
        promo: false
      },
      {
        id: 3,
        title: 'Third',
        text: 'some text 3',
        imgSrc: '3.jpg',
        promo: false
      },
      {
        id: 4,
        title: 'Fourth',
        text: 'some text 4',
        imgSrc: '4.jpg',
        promo: false
      }
    ]
  },
  getters: {
    getAds (state) {
      return state.ads
    }
  },
  mutations: {
    setAds (state, payload) {
      state.ads.map(item => {
        if (item.id === payload) {
          item.done = true
        }
      })
    }
  }
}