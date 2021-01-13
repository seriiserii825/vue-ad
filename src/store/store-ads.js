import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'

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
        const newAd = new Ad(payload.title, payload.description, userId, '', payload.promo)
        const fbValue = await firebase.database().ref('ads').push(newAd)
        const file = payload.image
        // const fileData = await firebase.storage().ref(`ads/${fbValue.key}.${imageExt}`).put(image)
        // Create a root reference
        const ref = firebase.storage().ref()
        const name = (+new Date()) + '-' + file.name
        const task = ref.child(name).put(file)
        task
          .then(snapshot => snapshot.ref.getDownloadURL())
          .then((url) => {
            firebase.database().ref('ads').child(fbValue.key).update({
              imgSrc: url
            })
            commit('setLoading', false)
            commit('createAd', {
              ...newAd,
              id: fbValue.key,
              imgSrc: url
            })
          })
          .catch(console.error)
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
