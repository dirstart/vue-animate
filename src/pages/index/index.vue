<template>
  <div>
    <h1>主页版块</h1>
    <iframe
      height=300
      width=300
      src='http://player.youku.com/embed/XMTg5NTYwMTg2NA=='
    ></iframe>
  </div>
</template>

<script>
export default {
  async created() {
    const me = this;
    await me.getList();
  },
  data () {
    return {
      test: ''
    };
  },
  methods: {
    async getList() {
      const me = this;
      const res = await me.axios.get('/api/getMovieAll');
      if (res.success) return;
      me.test = res.data.movies[0].flash;
      console.log('data', res);
    }
  }
}
</script>

<style lang="less" scoped>
  div {
    height: 100%;
    // background-color: #089e8a;
  }
</style>
