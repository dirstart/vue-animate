<template>
  <div id="app">
    <div class="app-header">
      <top-bar></top-bar> 
    </div>
    <main class="app-content">
      <router-view/>
    </main>
    <div class="app-footer">
      <footer-bar></footer-bar>
    </div>
  </div>
</template>

<script>
import topBar from '@/components/topBar'
import footerBar from '@/components/footerBar'

export default {
  name: 'app',
  components: {
    topBar,
    footerBar
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
