import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login'
import MyAds from '@/views/MyAds'
import NewAd from '@/views/NewAd'
import Orders from '@/views/Orders'
import Registration from '@/views/Registration'
import Ad from '@/views/Ad'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ad/:id',
    name: 'Ad',
    component: Ad
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/my-ads',
    name: 'My ads',
    component: MyAds
  },
  {
    path: '/new-ad',
    name: 'New ad',
    component: NewAd
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
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
