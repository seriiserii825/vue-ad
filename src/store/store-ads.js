import firebase from 'firebase/app'
import 'firebase/database'

class Ad {
  // ownerId - id пользователся, который создал объявление
  constructor (title, description, ownerId, imageSrc = '', promo = false, id = null) {
    this.title = title
    this.description = description
    this.ownerId = ownerId
    this.imageSrc = imageSrc
    this.promo = promo
    this.id = id
  }
}
export default {
  state: {
    ads: [
      {
        id: '1',
        title: 'First',
        text: 'some text 1',
        imgSrc: '1.jpg',
        promo: false
      },
      {
        id: '2',
        title: 'Second',
        text: 'some text 2',
        imgSrc: '2.jpg',
        promo: true
      },
      {
        id: '3',
        title: 'Third',
        text: 'some text 3',
        imgSrc: '3.jpg',
        promo: true
      },
      {
        id: '4',
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
    },
    getPromoAds (state) {
      return state.ads.filter(item => item.promo)
    },
    getMyAds (state) {
      return state.ads
    },
    getAdById (state) {
      return (addId) => {
        return state.ads.find(item => item.id === addId)
      }
    }
  },
  mutations: {
    setAds (state, payload) {
      state.ads.map(item => {
        if (item.id === payload) {
          item.done = true
        }
      })
    },
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    // async method вернет promise
    async createAd ({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)
      // будем работать с асинхронными событиями
      try {
        // получаем id пользователя
        const userId = getters.user
        // id объявления в экземпляр класса передавать не нужно, так как мы его получим из firebase.
        const ad = new Ad(payload.title, payload.description, userId, payload.imageSrc, payload.promo)
        // ref - передаем название базы данных
        // push - передаем данные, которые будут записанны в базе данных
        // данный метод будет идти асинхронно, поэтому нужно использовать await
        const fbValue = firebase.database().ref('ads').push(ad)
        console.log(fbValue)
      } catch (error) {
        commit('setError', error)
        commit('setLoading', false)
        throw error // выкинем ошибку, чтобы потом обработать в промисе
      }
    }
  }
}
