import Vue from 'vue'
import Router from 'vue-router'
// import bodyOne from '@/components/bodyOne'
import Index from '@/pages/index/index'

import Login from '@/pages/login/login'

import Home from '@/pages/home/home'

import NotFound from '@/pages/notfound/notfound'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'index',
      meta: { title: '原始页面' }
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
      name: 'one',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: 'home',
      component: Home,
      meta: {
        title: '个人中心'
      }
    },
    {
      path: '*',
      meta: { name: 404 },
      component: NotFound
    }]
});

router.beforeEach((to, from, next) => {
  console.log(to);
  next();
});

export default router;
