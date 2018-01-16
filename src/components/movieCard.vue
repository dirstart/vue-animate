<template>
  <div class="all-group">
    <!-- <h1 class="movie-title"> {{title}} </h1> -->
    <div
      class="movie-title"
      :style="{backgroundColor: titleColor}"
    >
      <span class="title-text"> {{title}} </span>
      <i class="iconfont icon-more title-icon"></i>
      <span class="title-tip">更多</span>
    </div>
    <ul
      class="movie-list"
    >
      <li
        @click="handleClick(item)"
        class="movie-item"
        v-for="item in movies.slice(0,number)"
      >
        <img :src="item.poster" alt="" class="movie-pic" />
        <section class="movie-text">
          <span class="text-title">{{item.title}}</span>
          <span class="text-type">{{item.language}}</span>
          <span class="text-dot">&nbsp;·&nbsp;</span>
          <span class="text-name"> {{item.year}}</span>
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
      default: '温馨治愈'
    },
    movies: {
      type: Array,
      default: ['1', '2']
    },
    number: {
      type: Number,
      default: 2
    },
    titleColor: {
      type: String,
      default: '#B73CFB'
    }
  },
  methods: {
    handleClick (item) {
      this.$router.push({ path: `/detail/${item._id}` });
    }
  }
};
</script>

<style lang='less' scoped="">
@import '../assets/css/color.less';
.all-group {
  width: 100%;
  background-color: #10002e;
  box-shadow: 0 0 .1rem #C0A5E1;
  // border-radius: .2rem;
  margin-bottom: .5rem;
}
.movie-title {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  // background-color: @purple400;
  color: #fff;
  .title-text,
  .title-icon,
  .title-tip {
    // font-size: .5rem;
  }
  .title-text {
    padding-left: 1rem;
    font-size: .8rem;
    text-shadow: 0 0 .5rem #fff;
  }
  .title-icon,
  .title-tip {
    float: right;
    font-size: .5rem;
  }
  .title-icon {
    margin-right: .2rem;
  }
}
.movie-list {
  width: 100%;
  padding: 2%;
  background-color: #EBD0F0;
}
.movie-item {
  margin-bottom: .6rem;
  width: 48%;
  height: 8rem;
  display: inline-block;
  border-radius: .2rem;
  background-color: #fff;
  border: 1px solid #eee;
  &:nth-child(odd) {
    margin-right: 4%;
  }
  .movie-pic {
    display: block;
    width: 100%;
    height: 5.6rem;
    // background-color: #DD3C3C;
    background-color: #DBCECE;
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
.icon-more {
  width: 1rem;
  height: 1rem;
}
</style>
