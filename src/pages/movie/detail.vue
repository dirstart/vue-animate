<template>
  <div>
    <h1>主页版块</h1>
    <iframe
      class="movie-show"
      src='http://player.youku.com/embed/XMTMyNjM2MDk4NA=='
      frameborder=0
    ></iframe>
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
  div {
    width: 100%;
    height: 20rem;
    // background-color: #089e8a;
    .movie-show {
      width: 100%;
      height: 10rem;
    }
  }
</style>
