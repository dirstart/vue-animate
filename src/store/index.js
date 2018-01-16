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
    name: '未登录',
    avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256'
  },
  sideBar: {
    open: false,
    docked: true
  },
  searchBar: false,
  userName: '默认'
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
