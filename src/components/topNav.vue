<template>
  <div class="all-wrap">
    <div class="top-content">
      <section class="top-user">
        <div class="user-icon">12</div>
      </section>
      <section class="top-where"> {{ headerTitle }} </section>
      <section class="top-search"> 搜索 </section>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: 'topNav',
    computed: mapState({
      avatar: state => state.data.self.avatar,
      headerTitle: 'headerTitle'
    })
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
      margin-right: 1px;
      background-color: #0f1323;
      color: #fff;
    }
    .top-search {
      margin-right: 0;
    }
  }
</style>
