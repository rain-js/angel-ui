<template>
  <div class="right-content">
    <slot></slot>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
  .right-content {
    position: relative;
    top: 60px;
    left: 260px;
    box-sizing: border-box;
    padding: 20px 20px 50px 20px;
    width: calc(100% - 260px);
    min-width: 1100px;
    min-height: calc(100vh - 60px);
    background: #0e141f;
  }
</style>