<template>
  <div class="nav-menu-item">
    <div v-for="(menuItem, name, idx) in datas" :key="idx">
      <div v-if="name === 'name' || name === 'sub-name'">
        <span :class="name === 'name' ? 'menu-name' : 'sub-menu-name'">{{ menuItem }}</span>
      </div>
      <div v-else>
        <div v-if="name === 'children'">
          <nav-menu-item :datas="menuItem"></nav-menu-item>
        </div>
        <div v-else>
          <div v-for="(item, itemIdx) in menuItem" :key="itemIdx">
            <router-link :to="item.path" :class="{'active-link': item.path === $route.path}">{{ item.name }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nav-menu-item',
  props: {
    datas: {
      type: Object,
      default: {}
    }
  },
  created() {
    console.log('this.$route', this.$route)
  }
}
</script>
<style lang="less" scoped>
  .nav-menu-item {
    .menu-name, .sub-menu-name {
      font-size: 16px;
      color: #333;
      line-height: 40px;
      height: 40px;
      font-weight: bold;
    }
    .sub-menu-name {
      color: #8dabc4;
      font-size: 12px;
      font-weight: bold;
    }
    a {
      display: block;
      padding: 6px 20px;
      font-size: 14px;
      color: #3f536e;
    }
    a:hover, .active-link {
      color: #409EFF;
    }
  }
</style>