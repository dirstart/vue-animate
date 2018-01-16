<template>
  <div class="all-wrap">
    <movie-card
      :movies="warmList"
      :number="2"
      title="温馨治愈"
    ></movie-card>
    <movie-card
      :movies="awesomeList"
      :number="2"
      title="剧情党"
      titleColor="#E968CE"
    ></movie-card>
    <movie-card
      :movies="domesticList"
      :number="4"
      title="国产热播"
      titleColor="#423CD5"
    ></movie-card>
  </div>
</template>

<script>
import movieCard from '@/components/movieCard';
export default {
  components: {
    movieCard
  },
  data () {
    return {
      test: '',
      domesticList: [],
      awesomeList: [],
      warmList: []
    };
  },
  async created () {
    const me = this;
    await me.getList();
    await me.getDomestic('domestic');
    await me.getDomestic('awesome');
    await me.getDomestic('warm');
  },
  methods: {
    async getList () {
      const me = this;
      const res = await me.axios.get('/api/getMovieAll');
      if (res.success) return;
      me.test = res.data.movies[0].flash;
      console.log('data', res);
    },
    async getDomestic (type) {
      const me = this;
      const param = { type: type };
      const res = await me.axios.post('/api/getMovieByType', param);
      if (res.success) return;
      me[`${type}List`] = res.data.movies;
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
