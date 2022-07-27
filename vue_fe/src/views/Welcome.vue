<template>
  <div class="welcome-wrapper">
    <div class="welcome-left">
      <div class="main-title">您好：</div>
      <div class="sub-title">欢迎使用内部权限管理系统</div>
      <div class="des">技术栈vue3+koa+mongodb+node前后端分离</div>
    </div>
    <div class="welcome-right"></div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.welcome-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 100%;
  .welcome-left {
    .main-title {
      font-size: 30px;
      font-weight: 700;
    }
    .sub-title {
      font-size: 40px;
      line-height: 62px;
      color: #409eff;
    }
    .des {
      font-size: 14px;
      text-align: right;
      color: #999;
    }
  }
  .welcome-right {
    width: 371px;
    height: 438px;
    margin-left: 200px;
    background: url('@/assets/images/welcome.png');
  }
}
</style>