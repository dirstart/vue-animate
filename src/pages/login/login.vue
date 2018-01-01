<template>
  <section class="wrap">
    <div class="title">登录页面</div>
    <div>
      <span>balabal</span>
      <span> {{ this.$store.state.test }} </span>
      <span> {{ this.$store.state.count }} </span>
      <button @click="handleClick">test</button>
    </div>
  </section>
</template>

<script>
  import { mapMutations } from 'vuex'
  import { ADD } from '@/store/types'
  export default {
    methods: {
      ...mapMutations({
        handleClick: ADD
      })
    }
  }
</script>

<style lang='less' scoped>
  .wrap {
    .title {
      color: #089e8a;
    }
  }
</style>