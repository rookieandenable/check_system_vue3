<template>
  <div class="home-wrapper">
    <div class="home-left"></div>
    <div class="home-main">
      <div class="nav">
        <el-icon :size="20"><Expand /></el-icon>
        <div>面包屑</div>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Expand } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.home-wrapper {
  position: relative;
  .home-left {
    position: fixed;
    width: 200px;
    height: 100vh;
    background-color: #001529;
    overflow-y: auto;
  }
  .home-main {
    margin-left: 200px;
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      padding: 0 50px 0 20px;
      border-bottom: 1px solid #ddd;
      height: 50px;
      line-height: 50px;
    }
    .content {
      background-color: #eef0f3;
      padding: 20px;
      height: calc(100vh - 50px);
    }
  }
}
</style>