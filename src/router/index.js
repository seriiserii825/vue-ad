import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login'
import MyAds from '@/views/MyAds'
import NewAd from '@/views/NewAd'
import Orders from '@/views/Orders'
import Registration from '@/views/Registration'
import Ad from '@/views/Ad'
import Order from '@/views/Order'
import Logout from '@/views/Logout'
import AuthGuard from '@/router/auth-guard'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ad/:id',
    name: 'ad',
    props: true,
    component: Ad,
    beforeEnter: AuthGuard
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/my-ads',
    name: 'My ads',
    component: MyAds,
    beforeEnter: AuthGuard
  },
  {
    path: '/new-ad',
    name: 'New ad',
    component: NewAd,
    beforeEnter: AuthGuard
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
    beforeEnter: AuthGuard
  },
  {
    path: '/orders/:id',
    name: 'Order',
    component: Order,
    beforeEnter: AuthGuard
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
