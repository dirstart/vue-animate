// actions 里存放异步

const actions = {
  async init ({ commit }, me) {
    try {
      const userData = await me.axios.get('user/test');
      console.log(userData);
    } catch (e) {
      console.log('没获取到用户信息');
      // 没获取到用户信息则显示默认的头像
      const userData = {
        name: '点击头像登录',
        avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256'
      }
      commit('setUserData', userData);
    }
  }
}

export default actions
