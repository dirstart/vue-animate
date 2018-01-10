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
      <h1>登录</h1>
      <div>
        <label for="log_name">用户名:</label>
        <input type="text" id="log_name" />
      </div>
      <label for="log_psd">密码:</label>
      <input type="text" id="log_psd">
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      account: '',
      password: ''
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
    }
  }
}
</script>

<style lang='less' scoped>
</style>
