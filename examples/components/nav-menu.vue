<template>
  <div class="nav">
    <div v-for="(item, idx) in menu" :key="idx">
      <nav-menu-item :datas="item"></nav-menu-item>
    </div>
  </div>
</template>
<script>
import navMenuItem from './nav-menu-item'

export default {
  name: 'nav-menu',
  props: {
    menu: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  components: {
    navMenuItem
  }
}
</script>
<style lang="less" scoped>

</style>