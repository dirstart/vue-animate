<template>
  <div class="all-wrap">
    <div @click="handleClick">test</div>
    <ul>
      <router-link tag="li" v-for="(item,key) in bars" :key="key" :to="item.to">
        <i class="iconfont" :class="`icon-${item.icon}`"></i>
        <span>{{ item.text }}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'footer-bar',
    data () {
      return {
        test: '123',
        bars: [{ icon: 'index', text: '首页', to: '/index' },
        { icon: 'home', text: '家园', to: '/home' },
        { icon: 'text', text: 'test', to: '/foo' }]
      }
    },
    methods: {
      handleClick () {
        // this.$router.push({ name: 'one' });
        // this.$router.push({ path: 'test', query: { key: '123' }});
        this.$router.go(-1);
      }
    }
  }
</script>

<style lang="less" scoped="">
  .all-wrap {
    width: 100%;
    padding: 10px 20px;
    padding-bottom: 0;
  }
  ul {
    display: flex;
    width: 100%;
    background-color: #08558a;

    > li {
      margin: 10px 10px 0 10px;
      padding: 3px 0 3px 0;
      flex: 1;
      background-color: #7FEB9B;
      // color: #fff;
      i,
      span {
        display: inline-block;
        // display: block;
        width: 100%;
        text-align: center;
      }
      span {
        font-size: 10px;
      }
    }
  }
</style>
