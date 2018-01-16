import Vue from 'vue'
import Router from 'vue-router'
// import bodyOne from '@/components/bodyOne'
import Index from '@/pages/index/index'

import Login from '@/pages/login/login'

import Home from '@/pages/home/home'

import News from '@/pages/news/news'

import Detail from '@/pages/movie/detail';

import Result from '@/pages/search/result';

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
      path: '/home',
      component: Home,
      meta: {
        title: '个人中心'
      }
    },
    {
      path: '/news',
      component: News,
      meta: {
        title: '动态'
      }
    },
    {
      path: '/detail/:id',
      component: Detail,
      meta: {
        title: '动漫细节'
      }
    },
    {
      path: '/result/:name',
      component: Result,
      meta: {
        title: '搜索结果'
      }
    },
    {
      path: '*',
      meta: { name: 404 },
      component: NotFound
    }]
});

// to 即将要进入的目标
// from 当前正在离开的路由
// next 进行管道中的下一个勾子, next('/') 跳转到一个不同的地址
router.beforeEach((to, from, next) => {
  console.log(to);
  next();
});

export default router;
