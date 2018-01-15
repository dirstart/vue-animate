<template>
  <div class="all-group">
    <h1 class="movie-title"> {{title}} </h1>
    <ul class="movie-list">
      <li
        class="movie-item"
        v-for="item in movies.slice(0,number)"
      >
      {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'movie-card',
  props: {
    title: {
      type: String,
      default: '我是这个组件的标题'
    },
    movies: {
      type: Array,
      default: ['1', '2']
    },
    number: {
      type: Number,
      default: 2
    }
  }
};
</script>

<style lang='less' scoped="">
@import '../assets/css/color.less';
.all-group {
  width: 100%;
  background-color: #10002e;
}
.movie-title {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  background-color: @purple400;
  color: #fff;
}
.movie-list {
  width: 100%;
  background-color: #888;
  .movie-item {
    box-sizing: border-box;
    width: 50%;
    height: 8rem;
    display: inline-block;
    background-color: #B2A8E4;
    border: 1px solid #000;
  }
}
</style>
