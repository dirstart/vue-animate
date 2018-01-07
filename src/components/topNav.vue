<template>
  <div class="all-wrap">
    <div class="top-content">
      <section class="top-user">
        <div class="user-icon" @click="showSideBar()">12</div>
        <!-- <mu-avatar src="@/assets/src/test.ico"></mu-avatar> -->
      </section>
      <section class="top-where"> {{ headerTitle }} </section>
      <section class="top-search"> 搜索 </section>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  export default {
    name: 'topNav',
    computed: mapState({
      avatar: state => state.data.self.avatar,
      headerTitle: 'headerTitle'
    }),
    methods: {
      ...mapMutations(['showSideBar'])
      // 打开侧边栏
    }
  }
</script>

<style lang='less' scoped>
  .top-content {
    display: flex;
    text-align: center;
    .top-user,
    .top-where,
    .top-search {
      flex: 1;
      height: 2rem;
      line-height: 2rem;
      margin-right: 1px;
      color: #000;
      border: 1px solid #f0f0f0;
    }
    .top-search {
      margin-right: 0;
    }
  }
</style>
