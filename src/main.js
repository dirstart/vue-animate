// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import MuseUI from 'muse-ui'

import App from './App'
import router from './router'
import store from './store'
import './mock/mock'
import 'muse-ui/dist/muse-ui.css'
import '@/assets/css/style.less'
Vue.use(MuseUI)

Vue.config.productionTip = false
Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  // 组件创建之前异步请求数据
  beforeCreate () {
    this.$store.dispatch('init', this)
  }
})
