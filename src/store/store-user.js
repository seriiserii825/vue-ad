import firebase from 'firebase/app'
import 'firebase/auth'

class User {
  constructor (id) {
    this.id = id
  }
}
export default {
  state: {
    user: null
  },
  getters: {
    user (state) {
      return state.user
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    registerUser ({commit}, {email, password}) {
      commit('clearError')
      commit('setLoading', true)
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit('setUser', new User(user.uid))
          commit('setLoading', false)
        })
        .catch(error => {
          commit('setLoading', false)
          commit('setError', error.msg)
        })
    }
  }
}
