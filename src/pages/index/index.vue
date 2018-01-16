<template>
  <div class="all-wrap">
    <movie-card
      :movies="list"
      :number="2"
    ></movie-card>
    <movie-card
      :movies="list"
      :number="2"
      title="无敌剧情"
      titleColor="#E968CE"
    ></movie-card>
    <movie-card
      :movies="list"
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
      list: [{
        image: 'xx',
        text: 'yy'
      }, {
        image: 'zz',
        text: 'xx'
      }, {
        image: 'ff',
        text: 'haha'
      }, {
        image: 'hh',
        text: 'hh'
      }, {
        image: 'hh',
        text: 'hh'
      }, {
        image: 'hh',
        text: 'hh'
      }],
      domesticList: [],
      awesomeList: [],
      warmList: []
    };
  },
  async created () {
    const me = this;
    await me.getList();
    await me.getDomestic()
  },
  methods: {
    async getList () {
      const me = this;
      const res = await me.axios.get('/api/getMovieAll');
      if (res.success) return;
      me.test = res.data.movies[0].flash;
      console.log('data', res);
    },
    async getDomestic () {
      const me = this;
      const param = {
        type: "domestic"
      };
      const res = await me.axios.post('/api/getMovieByType', param);
      if (res.success) console.log("失败了");
      console.log("res返回的东西", res);
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
