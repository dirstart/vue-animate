<template>
  <section class="wrap">
    <div class="title">
      <input type="text" placeholder="请输入账号" v-model="account">
      <input type="text" placeholder="请输入密码" v-model="password">
      <button type="submit" @click="login">登录</button>
    </div>
    <div>
      <span>balabal</span>
      <span> {{ this.$store.state.test }} </span>
      <span> {{ this.$store.state.count }} </span>
      <button @click="handleClick">test</button>
    </div>
    <h1>下方是mock的测试</h1>
    <ul>
      <li v-for="item in mockData">
        <img :src="item.thumbnail_pic_s" alt="">
        <span> {{ item.title }} </span>
      </li>
    </ul>
  </section>
</template>

<script>
  import { mapMutations } from 'vuex'
  import { ADD } from '@/store/types'
  export default {
    data () {
      return {
        account: '',
        password: '',
        mockData: []
      }
    },
    async created () {
      const me = this;
      await me.getData();
    },
    methods: {
      ...mapMutations({
        handleClick: ADD
      }),
      async getData () {
        const me = this;
        const res = await me.axios.get('/test');
        if (!res) return;
        me.mockData = res.data;
      },
      login() {
        console.log("login");
        const me = this;
        const res = me.axios.get('/api/login/getAccount');
        if (!res.success) return;
        // console.log("服务器未响应");
        // 1.回调成功1
        const param = {
          account: me.account,
          password: me.password
        };
        // 2.创建一个号码
        const res2 = me.axios.post('/api/login/createAccount');
        if (!res.success) return;
        // console.log("创建账号失败");
        console.log("创建账号成功");
      }
    },
    mounted () {
    }
  }
</script>

<style lang='less' scoped>
  .wrap {
    margin: 0 auto;
    text-align: left;
    height: 100%;
    .title {
      margin: 10px 0;
      color: #089e8a;
    }
    img {
      width: 100px;
      height: 100px;
    }
  }
</style>