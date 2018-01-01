import Vue from 'vue'
import Vuex from 'vuex'
import { ADD } from './types'

Vue.use(Vuex)

const state = {
  test: '123',
  count: 33
}

const mutations = {
  [ADD] (state) {
    state.count += 1
  }
}

export default new Vuex.Store({
  state,
  mutations
})
