<template>
  <div class="left-nav">
    <nav-menu :menu="navConfig"></nav-menu>
  </div>
</template>
<script>
import navConfig from '../assets/nav.config.json'
import navMenu from './nav-menu'

export default {
  data () {
    return {
      navConfig: navConfig
    }
  },
  components: {
    navMenu
  },
}
</script>
<style lang="less" scoped>
  .left-nav {
    position: fixed;
    top: 60px;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    width: 260px;
    padding: 35px 30px 0 30px;
    background: white;
    border-right: 1px solid #eee;
  }
</style>