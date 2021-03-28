<template>
<div class="search">
  <mu-appbar :zDepth="0">
    <mu-icon-button icon="arrow_back"
      slot="left"
      @click="showSearch"
    />
    <mu-text-field class="appbar-search-field input-group"
      slot="default"
      hintText="魔法禁书目录"
      v-model="searchValue"
      @input="input"
    />
    <mu-icon-button
      :style="{marginRight: '2rem',marginTop: '.3rem'}"
      icon="search"
      slot="right"
      @click.native="handleSearch"
    />
  </mu-appbar>
  <mu-list>
    <mu-sub-header>在输入框中，输入视频名或者用户名</mu-sub-header>
  </mu-list>
<!--       <div v-for="item of friend">
<mu-list-item :title="item.name"
@click="showPersonindex_x(item._id)">
<mu-avatar :src="item.avatar"
slot="leftAvatar" />
<mu-icon value="chat_bubble"
slot="right" />
</mu-list-item>
</div> -->
</div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'searchBar',
  data () {
    return {
      searchValue: ''
    };
  },
  methods: {
    ...mapMutations(['showSearch']),
    input (val) {
      console.log('test input');
    },
    handleSearch () {
      const me = this;
      me.showSearch(); // 搜索后关闭搜索框
      me.$router.push({ path: `/result/${me.searchValue}` });
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/css/color.less';
.search {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  height: 100vh;
  background-color: @purple100;
  .mu-appbar {
    height: 10vh;
    color: #000;
    background: color-w;
  }
}
.input-group {
  font-size: .7rem;
}
.input-style {
  color: green;
  background-color: red;
}
</style>
