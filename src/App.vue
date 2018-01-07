<template>
  <div id="app">
    <div class="app-header">
      <top-nav></top-nav> 
    </div>
    <main class="app-content main-content">
      <router-view/>
    </main>
    <div class="app-footer main-content">
      <footer-bar></footer-bar>
    </div>
    <side-bar></side-bar>
  </div>
</template>

<script>
import topNav from '@/components/topNav'
import footerBar from '@/components/footerBar'
import sideBar from '@/components/sideBar'

export default {
  name: 'app',
  components: {
    topNav,
    footerBar,
    sideBar
  }
}
</script>

<style lang="less" scoped>
.app-content {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.app-footer {
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>
