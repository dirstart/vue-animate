<template>
  <section class="wrap">
    <div>
      <button @click="handleRegister">注册</button>
      <div>
        <label for="re_name">用户名:</label>
        <input type="text" id="re_name" v-model="account" />
      </div>
      <label for="re_psd">密码:</label>
      <input type="text" id="re_psd" v-model="password">
    </div>
    <hr>
    <div>
      <button @click="handleLogin">登录</button>
      <div>
        <label for="log_name">用户名:</label>
        <input type="text" id="log_name" v-model="logName" />
      </div>
      <label for="log_psd">密码:</label>
      <input type="text" id="log_psd" v-model="logPsd">
    </div>
    <button @click="handleLogout">测试退出</button>
  </section>
</template>

<script>
export default {
  data () {
    return {
      account: '',
      password: '',
      logName: '',
      logPsd: ''
    }
  },
  methods: {
    handleRegister () {
      const me = this;
      const param = {
        account: me.account,
        password: me.password
      };
      const res = me.axios.post('/api/login/createAccount', param);
      if (!res) return;
      console.log('result', res);
    },
    handleLogin () {
      const me = this;
      const param = {
        account: me.logName,
        password: me.logPsd
      };
      const res = me.axios.post('/api/login/signIn', param);
      if (!res) return;
      console.log(res);
    },
    handleLogout () {
      const me = this;
      const res = me.axios.get('/api/logout');
      console.log(res);
    }
  }
}
</script>

<style lang='less' scoped>
</style>
