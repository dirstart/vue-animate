import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  test: '123',
  count: 33,
  // 上面为测试的state
  login: false,
  headerTitle: '首页',
  user: {
    name: 'test',
    avatar: 'cao'
  },
  sideBar: {
    open: false,
    docked: true
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
