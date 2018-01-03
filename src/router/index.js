import Vue from 'vue'
import Router from 'vue-router'
// import bodyOne from '@/components/bodyOne'
import Index from '@/pages/index/index'

import Login from '@/pages/login/login'

import Home from '@/pages/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/login',
      name: '/one',
      component: Login
    },
    {
      path: 'home',
      component: Home
    }
  ]
})
