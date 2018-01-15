<template>
  <div class="all-wrap">
    <h1>主页版块</h1>
  </div>
</template>

<script>
export default {
  async created () {
    const me = this;
    await me.getList();
  },
  data () {
    return {
      test: ''
    };
  },
  methods: {
    async getList () {
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
.all-wrap {
  width: 100%;
  height: 100%;
  background-color: #eff;
}
</style>
