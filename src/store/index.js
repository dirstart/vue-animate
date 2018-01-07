import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'

Vue.use(Vuex)

const state = {
  test: '123',
  count: 33,
  // 上面为测试的state
  headerTitle: '首页',
  sideBar: {
    open: false,
    docked: true
  }
}

export default new Vuex.Store({
  state,
  mutations
})
