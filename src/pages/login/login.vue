<template>
  <section class="wrap">
    <button @click="handleLogout">测试退出</button>
    <mu-tabs
      :class="tabClass"
      :value="activeTab"
      @change="handleTabChange"
    >
      <mu-tab value="login" title="登录"/>
      <mu-tab value="register" title="注册"/>
    </mu-tabs>
    <mu-paper :zDepth='1'>
      <div v-if="activeTab==='login'" class="login-group">
          <mu-auto-complete
            label="用户名"
            labelFloat
            filter="noFilter"
            fullWidth
            v-model="logName"
          ></mu-auto-complete>
          <mu-auto-complete
            label="密码"
            labelFloat
            filter="noFilter"
            fullWidth
            v-model="logPsd"
          ></mu-auto-complete>
        <mu-raised-button
          label="登录"
          v-bind:class="['Login-Button-One']"
          secondary
          fullWidth
          @click="handleLogin"
        />
      </div>
      <div v-if="activeTab==='register'" class="register-group">
          <mu-auto-complete
            label="用户名"
            labelFloat
            filter="noFilter"
            fullWidth
            v-model="regName"
          ></mu-auto-complete>
          <mu-auto-complete
            label="密码"
            labelFloat
            filter="noFilter"
            fullWidth
            v-model="regPsd"
          ></mu-auto-complete>
        <mu-raised-button
          label="注册"
          v-bind:class="['Register-Button-One']"
          secondary
          fullWidth
          @click="handleRegister"
        />
      </div>
    </mu-paper>
    <mu-snackbar
      v-if="snackbar"
      :message="snackMsg"
      action="关闭"
      @actionClick="hideSnackbar"
      @close="hideSnackbar"
    />
    </section>
</template>

<script>
export default {
  data () {
    return {
      regName: '',
      regPsd: '',
      logName: '',
      logPsd: '',
      // 以上是UI变化之前的
      activeTab: 'login',
      tabClass: 'login-tab',
      snackbar: false,
      snackMsg: "找我干啥？"
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val;
      this.tabClass = val + '-tab';
      console.log(this.tabClass);
    },
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
      console.log("login start");
      const me = this;
      const param = {
        account: me.logName,
        password: me.logPsd
      };
      const res = me.axios.post('/api/login/signIn', param);
      if (!res) {
        console.log("登录失败");
        return;
      }
      console.log(res);
      // 当用户登录成功，通知 Vuex 里面的数据
      // vuex等级-> 显示Toast -> 跳转至首页
    },
    handleLogout () {
      const me = this;
      const res = me.axios.get('/api/logout');
      console.log(res);
    },
    hideSnackbar () {
      this.snackbar = false;
      if (this.snackTimer) clearTimeout(this.snackTimer);
    },
    showSnackbar () {
      this.snackbar = true;
      if (this.snackTimer) clearTimeout(this.snackTimer);
      this.snackTimer = setTimeout(() => { this.snackbar = false }, 2000);
    }
  }
}
</script>

<style lang='less' scoped>
@import url('../../assets/css/color.less');
.login-tab {
  background-color: @deepOrange300;
}
.register-tab {
  background-color: @amber500;
}
.Login-Button-One {
  background-color: @deepOrange300;
  font-size: .8rem;
}
.Register-Button-One {
  background-color: @amber500;
  font-size: .8rem;
}
.login-group,
.register-group {
  padding: 1rem 2rem;
}
.login-group {
  background-color: @yellow100;
}
.register-group {
  background-color: @yellow200;
}
</style>
