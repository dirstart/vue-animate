<template>
  <div class="all-wrap">
    <div class="top-bar">
      <section class="top-user">
        <div class="user-icon" @click="showSideBar()">
          <mu-icon value="more_vert" color="blue" class="tab-icon"></mu-icon>
          <mu-avatar :src="user.avatar" class="my-avatar"></mu-avatar>
        </div>
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
      user: state => state.user,
      headerTitle: 'headerTitle'
    }),
    methods: {
      ...mapMutations(['showSideBar'])
      // 打开侧边栏
    }
  }
</script>

<style lang='less' scoped>
  .top-bar {
    padding-top: 1rem;
    display: flex;
    text-align: center;
    height: 4rem;
    background-color: #f0f0f0;
    .top-user,
    .top-where,
    .top-search {
      flex: 1;
      margin-right: 1px;
      color: #000;
      font-size: .8rem;
    }
    .top-search {
      margin-right: 0;
    }
    .top-user {
      .user-icon {
        height: 100%;
        line-height: 100%;
        vertical-align: bottom;
        .tab-icon {
          position: absolute;
          left: .5rem;
          top: 1.5rem;
          font-size: 1rem;
        }
      }
    }
  }
</style>
