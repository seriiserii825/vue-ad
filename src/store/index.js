import Vue from 'vue'
import Vuex from 'vuex'
import sidebar from '@/store/sidebar'
import menu from '@/store/menu'
import orders from '@/store/store-orders'
import ads from '@/store/store-ads'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sidebar,
    menu,
    orders,
    ads
  }
})
