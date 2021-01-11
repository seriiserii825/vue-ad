import Vue from 'vue'
import Vuex from 'vuex'
import sidebar from '@/store/sidebar'
import menu from '@/store/menu'
import orders from '@/store/store-orders'
import ads from '@/store/store-ads'
import user from '@/store/store-user'
import share from '@/store/store-share'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    sidebar,
    menu,
    orders,
    ads,
    user,
    share
  }
})
