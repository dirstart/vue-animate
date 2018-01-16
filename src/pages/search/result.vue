<template>
  <div class="all-wrap">
    <movie-card
      v-if="isOk"
      :movies="resultList"
      :number="2"
      title="搜索结果"
    ></movie-card>
    <h1 v-else>没有找到任何结果</h1>
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
      resultList: [],
      searchKey: '',
      isOk: false
    };
  },
  async created () {
    const me = this;
    me.searchKey = me.$route.params.name;
    await me.getMovie(me.searchKey);
  },
  methods: {
    async getMovie (name) {
      const me = this;
      const param = { title: name };
      const res = await me.axios.post('/api/getMovieByName', param);
      if (!res.data.success && res.data.movies.length === 0) {
        me.isOk = false;
        console.log('没有找到');
        return false;
      };
      me.isOk = true;
      me.resultList = res.data.movies;
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
