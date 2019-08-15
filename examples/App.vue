<template>
  <div id="app">
    <page-header></page-header>
    <left-nav></left-nav>
    <right-content>
      <router-view/>
    </right-content>
  </div>
</template>

<script>
import pageHeader from './components/header'
import leftNav from './components/left-nav'
import rightContent from './components/right-content'

export default {
  name: 'App',
  components: {
    pageHeader,
    leftNav,
    rightContent
  }
}
</script>

<style lang="less">
@import "./assets/less/index";

#app {
  background: #eee;
}
</style>
