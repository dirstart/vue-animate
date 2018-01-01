import Vue from 'vue'
import Router from 'vue-router'
import bodyOne from '@/components/bodyOne'

import Login from '@/pages/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'abc',
      meta: { title: '首页' },
      component: bodyOne
    },
    {
      path: '/login',
      name: '/one',
      component: Login
    }
  ]
})
