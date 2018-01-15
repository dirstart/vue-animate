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
      class="snack-bar"
      :message="snackMsg"
      action="关闭"
      @actionClick="hideSnackbar"
      @close="hideSnackbar"
    />
    </section>
</template>

<script>
import util from '@/assets/js/util';
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
      snackMsg: '找我干啥？',
      loadingLog: false,
      loadingReg: false
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val;
      this.tabClass = val + '-tab';
      console.log(this.tabClass);
    },
    async handleRegister () {
      const me = this;
      if (!util.isEmpty(me.regName, me.regPsd)) {
        me.snackMsg = '用户名和密码均不能为空';
        me.showSnackbar();
        return false;
      }
      const param = {
        account: me.regName,
        password: me.regPsd
      };
      const res = await me.axios.post('/api/login/createAccount', param);
      if (!res.success) {
        console.log('res', res);
        me.snackMsg = res.data.msg;
        me.showSnackbar();
        return false;
      }
      // 这里是注册完成之后，应该是要做自动登录的，时间原因
    },
    async handleLogin () {
      console.log('login start');
      const me = this;
      const param = {
        account: me.logName,
        password: me.logPsd
      };
      me.loadingLog = true;
      const res = await me.axios.post('/api/login/signIn', param);
      me.loadingLog = false;
      if (!res.data.success) {
        me.snackMsg = res.data.msg;
        me.showSnackbar();
        return false;
      }
      console.log(res);
      // 当用户登录成功，通知 Vuex 里面的数据
      // vuex等级-> 显示Toast -> 跳转至首页
      me.$router.push('home');
    },
    async handleLogout () {
      const me = this;
      const res = await me.axios.get('/api/logout');
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
.wrap {
  position: relative;
}
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
.snack-bar {
  font-size: .8rem;
  color: @red600;
}
.loading {
  position: absolute;
  top: 8rem;
  left: 8rem;
  z-index: 100;
  // background-color: #000;
}
</style>
