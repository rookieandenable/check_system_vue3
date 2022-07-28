<template>
  <div class="home-wrapper">
    <div class="home-left" :class="[!collapsed ? '' : 'unexpand']">

      <div class="logo">
        <img src="@/assets/logo.png" alt="">
        <span>Manager</span>
      </div>

      <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline" theme="dark"
        :inline-collapsed="collapsed">
        <a-sub-menu key="sub1">
          <template #icon>
            <setting-outlined />
          </template>
          <template #title>系统管理</template>
          <a-menu-item key="/userManager"><router-link to="userManager">用户管理</router-link></a-menu-item>
          <a-menu-item key="/menuManager"><router-link to="menuManager">菜单管理</router-link></a-menu-item>
          <a-menu-item key="sub1-3">部门管理</a-menu-item>
          <a-menu-item key="sub1-4">角色管理</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #icon>
            <send-outlined />
          </template>
          <template #title>审批管理</template>
          <a-menu-item key="sub2-1">休假申请</a-menu-item>
          <a-menu-item key="sub2-2">待审核</a-menu-item>
        </a-sub-menu>
      </a-menu>

    </div>
    <div class="home-main" :class="[!collapsed ? '' : 'unexpand']">
      <div class="nav">
        <div class="nav-breadcrumb">
          <MenuUnfoldOutlined v-if="!collapsed" :style="{ fontSize: '18px' }" @click="toggleCollapsed" />
          <MenuFoldOutlined v-else :style="{ fontSize: '18px' }" @click="toggleCollapsed" />
          <a-breadcrumb class="bread">
            <a-breadcrumb-item><router-link to="welcome">首页</router-link></a-breadcrumb-item>
            <a-breadcrumb-item>用户管理</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <div class="nav-notify">
          <bell-outlined class="msg-icon" />
          <a-dropdown>
            <a class="ant-dropdown-link" @click.prevent>
              Hover me
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item key="1">user name.</a-menu-item>
                <a-menu-item key="2">user name email.</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, watch } from 'vue'
import { MenuFoldOutlined, MenuUnfoldOutlined, BellOutlined, SettingOutlined, MailOutlined, SendOutlined, InboxOutlined, AppstoreOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'Home',
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    BellOutlined,
    SettingOutlined,
    MailOutlined,
    SendOutlined,
    InboxOutlined,
    AppstoreOutlined
  },

  setup() {
    const state = reactive({
      collapsed: false,
      selectedKeys: [],
      openKeys: [],
      preOpenKeys: [],
    });
    watch(() => state.openKeys, (_val, oldVal) => {
      state.preOpenKeys = oldVal;
    });

    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    }
    return {
      toggleCollapsed,
      ...toRefs(state)
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

      .nav-breadcrumb {
        display: flex;
        align-items: center;

        .bread {
          margin-left: 10px;
        }
      }

      .nav-notify {
        display: flex;
        align-items: center;

        .msg-icon {
          margin-right: 10px;
          font-size: 22px;
          cursor: pointer;
        }
      }
    }

    .content {
      background-color: #eef0f3;
      padding: 20px;
      height: calc(100vh - 50px);
    }
  }
}
</style>