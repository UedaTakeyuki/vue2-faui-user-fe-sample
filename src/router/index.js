import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

import {AccountRoutes as AccountRoutes} from 'vue2-faui-user-fe/account'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Expand into routes array
  ...AccountRoutes.routes,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router