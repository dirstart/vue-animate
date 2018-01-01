<template>
  <section class="wrap">
    <div class="title">登录页面</div>
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
    async created() {
      const me = this;
      await me.getData();
    },
    data() {
      return {
        mockData: []
      }
    },
    methods: {
      ...mapMutations({
        handleClick: ADD
      }),
      async getData() {
        const me = this;
        const res = await me.axios.get('/test');
        if (!res) return;
        me.mockData = res.data;
      }
    },
    mounted() {
      const me = this;
    }
  }
</script>

<style lang='less' scoped>
  .wrap {
    margin: 0 auto;
    text-align: left;
    height: 100%;
    .title {
      color: #089e8a;
    }
    img {
      width: 100px;
      height: 100px;
    }
  }
</style>