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
      color: #a89e8a;
      line-height: 40px;
      height: 40px;
      font-weight: bold;
    }
    .sub-menu-name {
      color: #a89e8a;
      font-size: 12px;
      font-weight: bold;
    }
    a {
      position: relative;
      display: block;
      padding: 8px 20px;
      font-size: 16px;
      color: white;
      &:before {
        position: absolute;
        left: 0;
        top: 0;
        content: '';
        width: 0;
        height: 100%;
        background: #2b3d5f;
        transition: width .3s linear;
      }
    }
    a:hover:not(.active-link) {
      background: #131d31;
      &::before {
        width: 8px;
      }
    }
    .active-link {
      color: #ffcb36;
      background: #131d31;
      cursor: default;
      &::before {
        width: 8px;
        background: #ffcb36;
      }
    }
  }
</style>