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
        this.$router.go(-1);
      }
    }
  }
</script>

<style lang="less" scoped="">
  .all-wrap {
    width: 100%;
    background-color: #f0f0f0;
  }
  ul {
    display: flex;
    width: 100%;
    background-color: #08558a;

    > li {
      margin: .4rem .4rem 0 .4rem;
      flex: 1;
      line-height: 1rem;
      background-color: #7FEB9B;
      i,
      span {
        display: inline-block;
        width: 100%;
        text-align: center;
      }
      span {
        font-size: .5rem;
      }
    }
  }
</style>
