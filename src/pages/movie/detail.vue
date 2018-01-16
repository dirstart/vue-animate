<template>
  <div>
    <h1>播放板块</h1>
    <iframe
      class="movie-show"
      :src="movieItem.flash"
      frameborder=0
      quality="high"
      type="application/x-shockwave-flash"
      allowFullScreen="true"
      width="100px"
      height="100px"
    ></iframe>
    <p>{{movieItem.doctor}}</p>
    <p>{{movieItem.language}}</p>
    <p>{{movieItem.title}}</p>
    <p>{{movieItem.type}}</p>
    <p>{{movieItem.year}}</p>
    <p>{{movieItem.summary}}</p>
  </div>
</template>

<script>
export default {
  async created () {
    const me = this;
    console.log('param', this.$route.params.id);
    me.id = this.$route.params.id;
    await me.getMovie(me.id);
  },
  data () {
    return {
      id: '',
      movieItem: []
    };
  },
  methods: {
    async getMovie (id) {
      const me = this;
      const res = await me.axios.get(`/api/getDetail/${id}`);
      console.log('res', res);
      if (!res.data.success) return;
      me.movieItem = res.data.movie;
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
