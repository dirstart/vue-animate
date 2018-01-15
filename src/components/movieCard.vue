<template>
  <div class="all-group">
    <h1 class="movie-title"> {{title}} </h1>
    <ul class="movie-list">
      <li
        class="movie-item"
        v-for="item in movies.slice(0,number)"
      >
        <img src="" alt="" class="movie-pic" />
        <section class="movie-text">
          <span class="text-title">全名</span>
          <span class="text-type">类型</span>
          <span class="text-dot">&nbsp;·&nbsp;</span>
          <span class="text-name">名字</span>
          <mu-icon
            value="more_vert"
            color="blue"
            class="text-icon"
          ></mu-icon>
        </section>
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
  box-shadow: 0 0 .1rem #000;
  border-radius: .2rem;
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
  padding: 2%;
}
.movie-item {
  margin-bottom: .6rem;
  width: 48%;
  height: 8rem;
  display: inline-block;
  border-radius: .2rem;
  background-color: #fff;
  &:nth-child(odd) {
    margin-right: 4%;
  }
  .movie-pic {
    display: block;
    width: 100%;
    height: 5.6rem;
    background-color: #DD3C3C;
  }
}
.movie-text {
  box-sizing: content-box;
  font-size: 0;
  position: relative;
  .text-title {
    display: inline-block;
    margin-bottom: .2rem;
    text-align: center;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    font-size: .5rem;
  }
  .text-name,
  .text-dot,
  .text-type {
    color: #C7C0C0;
    display: inline-block;
    text-align: center;
    font-size: .5rem;
  }
  .text-icon {
    // position: absolute;
    // margin-bottom: .5rem;
    // right: 1rem;
    position: absolute;
    right: .5rem;
    bottom: .1rem;
    font-size: .8rem;
    color: #c7c7cc;
  }
  .text-type {
    margin-left: 1rem;
  }
}
</style>
