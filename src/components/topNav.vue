<template>
<div class="all-wrap">
  <mu-appbar
    title="Title"
    class="user-group"
  >
    <div class="user-icon" @click="showSideBar()">
       <mu-icon
        value="more_vert"
        color="blue"
        class="tab-icon"
      ></mu-icon>
      <mu-avatar
        :src="user.avatar"
        class="my-avatar"
      ></mu-avatar> 
    </div>
    <mu-raised-button
      :label="headerTitle"
      class="demo-raised-button top-where"
      primary
    />
    <mu-icon
      :style="{marginRight: '1rem'}"
      slot="right"
      value="search"
      color="#2e2c6b"
      @click="showSearch"
    />
  </mu-appbar>
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
      ...mapMutations(['showSideBar', 'showSearch'])
      // 打开侧边栏
    }
  }
</script>

<style lang='less' scoped>
.user-group {
  position: relative;
  height: 100%;
  line-height: 100%;
  padding-bottom: .2rem;
  .user-icon {
    .tab-icon {
      height: 100%;
      line-height: 100%;
      font-size: 1.2rem;
      vertical-align: middle;
    }
    .my-avatar {
      vertical-align: middle;
    }
  }
  .top-where {
    position: relative;
    display: inline-block;
    width: 5rem;
    margin-left: 2.4rem;
  }
  .top-search {
    // margin-right: 1rem;
  }
  .user-icon,
  .top-where,
  .top-search {
    display: inline-block;
  }
}


// 已下均为初始时候的
// .top-bar {
//   padding-top: 1rem;
//   display: flex;
//   text-align: center;
//   height: 4rem;
//   background-color: #f0f0f0;
//   .top-user,
//   .top-where,
//   .top-search {
//     flex: 1;
//     margin-right: 1px;
//     color: #000;
//     font-size: .8rem;
//   }
//   .top-search {
//     margin-right: 0;
//   }
//   .top-user {
//     .user-icon {
//       height: 100%;
//       line-height: 100%;
//       vertical-align: bottom;
//       .tab-icon {
//         position: absolute;
//         left: .5rem;
//         top: 1.5rem;
//         font-size: 1rem;
//       }
//     }
//   }
// }
</style>
