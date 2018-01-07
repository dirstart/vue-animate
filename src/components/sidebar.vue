<template>
  <div class="all-wrap">
    <h1>我是侧边栏</h1>
    <mu-drawer :open="sideBar.open" :docked="sideBar.docked" @close="toggle()"></mu-drawer>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'sideBar',
  computed: mapState({
    sideBar: 'sideBar'
  }),
  data () {
    return {}
  },
  methods: {
    ...mapMutations(['showSideBar']),
    toggle () {
      console.log('现在是在sidebar组件，由它来关闭');
      const me = this;
      me.showSideBar();
    }
  }
}
</script>

<style lang='less' scoped="">
  .all-wrap {
    border: 1px solid #089ea1;
  }
</style>
