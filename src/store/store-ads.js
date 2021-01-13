import firebase from 'firebase/app'
import 'firebase/database'

class Ad {
  // ownerId - id пользователся, который создал объявление
  constructor (title, description, ownerId, imgSrc, promo = false, id = null) {
    this.title = title
    this.description = description
    this.ownerId = ownerId
    this.imgSrc = imgSrc
    this.promo = promo
    this.id = id
  }
}
export default {
  state: {
    ads: []
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
    },
    loadAds (state, payload) {
      state.ads = payload
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
        const userId = getters.user.id
        // id объявления в экземпляр класса передавать не нужно, так как мы его получим из firebase.
        const newAd = new Ad(payload.title, payload.description, userId, payload.imgSrc, payload.promo)
        // ref - передаем название базы данных
        // push - передаем данные, которые будут записанны в базе данных
        // данный метод будет идти асинхронно, поэтому нужно использовать await
        const fbValue = await firebase.database().ref('ads').push(newAd)
        commit('setLoading', false)
        commit('createAd', {
          ...newAd,
          id: fbValue.key
        })
      } catch (error) {
        commit('setError', error)
        commit('setLoading', false)
        throw error // выкинем ошибку, чтобы потом обработать в промисе
      }
    },
    async fetchAds ({commit}) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const fabVal = await firebase.database().ref('ads').once('value')
        const ads = fabVal.val()
        const adsResult = []
        Object.keys(ads).forEach(item => {
          const ad = ads[item]
          adsResult.push(new Ad(ad.title, ad.description, ad.ownerId, ad.imgSrc, ad.promo, item))
        })
        commit('loadAds', adsResult)
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error)
      }
    }
  }
}
