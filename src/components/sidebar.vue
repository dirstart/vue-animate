<template>
  <mu-drawer class="all-wrap" :open="sideBar.open" :docked="sideBar.docked" @close="toggle()">
    <section class="user-content">
      <div class="user-login" @click="handleLogin">
        <div class="user-avatar">
          <mu-avatar class="my-avatar" :src="user.avatar"></mu-avatar>
        </div>
        <span class="user-name">{{user.name}}</span>
      </div>
      <div class="user-motto">给这个世界留点什么呢?</div>
    </section>
    <mu-list @itemClick="sideBar.docked ? '' : toggle()">
      <mu-list-item title="我的收藏">
        <mu-icon slot="left" value="favorite"></mu-icon>
      </mu-list-item>
      <mu-list-item title="早起打卡">
        <mu-icon slot="left" value="check_circle"></mu-icon>
      </mu-list-item>
      <mu-list-item title="关注">
        <mu-icon slot="left" value="wb_sunny"></mu-icon>
      </mu-list-item>
      <mu-list-item title="私信">
        <mu-icon slot="left" value="message"></mu-icon>
      </mu-list-item>
      <mu-list-item v-if="!sideBar.docked" @click.native="open = false" 
      class="close"  title="关闭">
        <mu-icon slot="left" value="close"></mu-icon>
      </mu-list-item>
    </mu-list>
  </mu-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'sideBar',
  computed: mapState({
    sideBar: 'sideBar',
    user: 'user'
  }),
  data () {
    return {}
  },
  methods: {
    ...mapMutations(['showSideBar']),
    toggle () {
      console.log('现在是在sidebar组件，由它来关闭');
      console.log(this.sideBar);
      const me = this;
      me.showSideBar();
    },
    handleLogin () {
      const me = this;
      me.toggle();
      me.$router.push('login');
      console.log('登录');
    }
  }
}
</script>

<style lang='less' scoped="">
@import url('../assets/css/color.less');
.all-wrap {
  // background-color: #000;
  // background-image: linear-gradient(180deg, @teal100, @lime400);
  background-color: @indigo100;
  // color: #fff;
  .user-content {
    height: 6rem;
    padding: .5rem 0 0 1rem;
    border: 1px solid #000;
    color: #fff;
    .user-login {
      height: 2.5rem;
    }
    .user-name,
    .user-avatar {
      display: inline-block;
    }
    .user-avatar {
      .my-avatar {
        width: 2rem;
        height: 2rem;
      }
    }
    .user-name {
      margin-left: 1rem;
      height: 2rem;
      line-height: 2rem;
      vertical-align: top;
      font-size: .7rem;
    }
    .user-motto {
      height: 2rem;
      line-height: 1rem;
      margin-top: .5rem;
      font-size: .7rem;
    }
  }
  .close {
    // padding-top: 10rem;
    margin-top: 10rem;
  }
}
</style>
