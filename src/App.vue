<template>
  <div id="app">
    <header>
      <top-bar></top-bar>     
    </header>
    <hr>
    <main>
      <router-view/>
    </main>
    <hr>
    <footer>
      <footer-bar></footer-bar>
    </footer>
  </div>
</template>

<script>
import topBar from './components/topBar'
import footerBar from './components/footerBar'

export default {
  name: 'app',
  components: {
    topBar,
    footerBar
  }
}
</script>

<style>
main {
  width: 100%;
  height: 600px;
  overflow-y: scroll;
}
</style>
