<template>
  <div class="all-wrap">
    <movie-card
      :movies="list"
      :number="2"
    ></movie-card>
    <movie-card
      :movies="list"
      :number="2"
      titleColor="#E968CE"
    ></movie-card>
    <movie-card
      :movies="list"
      :number="4"
      titleColor="#E968CE"
    ></movie-card>
  </div>
</template>

<script>
import movieCard from '@/components/movieCard';
export default {
  components: {
    movieCard
  },
  async created () {
    const me = this;
    await me.getList();
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
      }]
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
