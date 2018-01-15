<template>
<div class="all-wrap">
  <ul>
    <router-link 
      tag="li"
      v-for="(item,key) in bars"
      :key="key"
      :to="item.to"
      @click.native="handleClick(item.text)"
    >
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
        { icon: 'news', text: '动态', to: '/news' }]
      }
    },
    methods: {
      handleBack () {
        this.$router.go(-1);
      },
      handleClick (name) {
        console.log(name);
        const me = this;
        me.$store.commit('changeTitle', { title: name });
      }
    }
  }
</script>

<style lang="less" scoped="">
  @import '../assets/css/color.less';
  .all-wrap {
    width: 100%;
    background-color: #f0f0f0;
  }
  ul {
    display: flex;
    width: 100%;
    background-color: #7e57c2;

    > li {
      margin: .4rem .4rem .2rem .4rem;
      flex: 1;
      line-height: 1rem;
      color: #fff;
      background-color: @deepPurpleA400;
      // background-color: #4B0F48;
      box-shadow: 0 0 1rem @deepPurpleA400;
      border-radius: .2rem;
      &:hover {
        background-color: @deepPurpleA400;
        color: #eee;
        box-shadow: 0 0 .5rem #fff;
        transition: all 1s ease;
      }
      i,
      span {
        display: inline-block;
        width: 100%;
        text-align: center;
      }
      i {
        font-size: .8rem;
      }
      span {
        font-size: .5rem;
      }
    }
  }
</style>
