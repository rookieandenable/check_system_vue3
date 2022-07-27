<template>
  <div class="home-wrapper">
    <div class="home-left" :class="[expand ? '' : 'unexpand']">
      <div class="logo">
        <img src="@/assets/logo.png" alt="">
        <span>Manager</span>
      </div>
    </div>
    <div class="home-main" :class="[expand ? '' : 'unexpand']">
      <div class="nav">
        <node-expand-outlined v-if="expand" :style="{fontSize: '18px'}" @click="handleExpand"/>
        <node-collapse-outlined v-else :style="{fontSize: '18px'}" @click="handleExpand"/>
        <div>面包屑</div>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue'
import { NodeExpandOutlined, NodeCollapseOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  components: {
    NodeExpandOutlined,
    NodeCollapseOutlined
  },

  setup() {
    let expand = ref(true)

    const handleExpand = () => expand.value = !expand.value
    return {
      expand,
      handleExpand
    }
  }
})
</script>

<style scoped lang="scss">
.home-wrapper {
  position: relative;
  .home-left {
    position: fixed;
    height: 100vh;
    width: 200px;
    background-color: #001529;
    overflow-y: auto;
    transition: all .5s;
    &.unexpand {
      width: 65px;
    }
    .logo {
      display: flex;
      align-items: center;
      height: 50px;
      font-size: 18px;
      img {
        width: 32px;
        height: 32px;
        margin: 0 16px;
      }
      span {
        color: #fff;
        font-size: 25px;
      }
    }
  }
  .home-main {
    margin-left: 200px;
    &.unexpand {
      margin-left: 65px;
    }
    transition: all .5s;
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