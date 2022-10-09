<template>
  <div class="home-wrapper">
    <div class="home-left" :class="[!reactiveData.collapsed ? '' : 'unexpand']">
      <div class="logo">
        <img src="@/assets/logo.png" alt="" />
        <span>Manager</span>
      </div>
      <!-- 侧边导航栏 -->
      <el-menu
        :router="true"
        background-color="#001529"
        text-color="#ffffff"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <svg
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                data-v-029747aa=""
              >
                <path
                  fill="currentColor"
                  d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
                ></path>
              </svg>
            </el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item index="/userManager">
            <el-icon>
              <svg
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                data-v-029747aa=""
              >
                <path
                  fill="currentColor"
                  d="M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"
                ></path>
              </svg>
            </el-icon>
            <span>用户管理</span>
          </el-menu-item>
          <el-menu-item index="/menuManager">
            <el-icon>
              <svg
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                data-v-029747aa=""
              >
                <path
                  fill="currentColor"
                  d="M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"
                ></path>
              </svg>
            </el-icon>
            <span>菜单管理</span>
          </el-menu-item>
          <el-menu-item index="/deptManager">
            <el-icon>
              <svg
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                data-v-029747aa=""
              >
                <path
                  fill="currentColor"
                  d="M224 704h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336V704zm0 64v128h576V768H224zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
                ></path>
                <path
                  fill="currentColor"
                  d="M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
                ></path>
              </svg>
            </el-icon>
            <span>部门管理</span>
          </el-menu-item>
          <el-menu-item index="/RoleManager">
            <el-icon>
              <svg
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                data-v-029747aa=""
              >
                <path
                  fill="currentColor"
                  d="M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
                ></path>
              </svg>
            </el-icon>
            <span>角色管理</span>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon>
              <svg
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                data-v-029747aa=""
              >
                <path
                  fill="currentColor"
                  d="m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z"
                ></path>
              </svg>
            </el-icon>
            <span>审批管理</span>
          </template>
          <el-menu-item index="2-1">
            <el-icon>
              <svg
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                data-v-029747aa=""
              >
                <path
                  fill="currentColor"
                  d="M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm320 512V448h64v128h128v64H544v128h-64V640H352v-64h128z"
                ></path>
              </svg>
            </el-icon>
            <span>休假申请</span>
          </el-menu-item>
          <el-menu-item index="2-2">
            <el-icon>
              <svg
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                data-v-029747aa=""
              >
                <path
                  fill="currentColor"
                  d="M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"
                ></path>
              </svg>
            </el-icon>
            <span>待审核</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="home-main" :class="[!reactiveData.collapsed ? '' : 'unexpand']">
      <!-- 面包屑 -->
      <div class="nav">
        <div class="nav-breadcrumb">
          <el-icon
            v-if="!reactiveData.collapsed"
            size="large"
            @click="toggleCollapsed"
          >
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"></path></svg>
          </el-icon>
          <el-icon
            v-else
            size="large"
            @click="toggleCollapsed"
          >
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z"></path></svg>
          </el-icon>
          <a-breadcrumb class="bread">
            <a-breadcrumb-item
              ><router-link to="welcome">首页</router-link></a-breadcrumb-item
            >
            <a-breadcrumb-item>用户管理</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <div class="nav-notify">
          <bell-outlined class="msg-icon" />
          <a-dropdown>
            <a class="ant-dropdown-link" @click.prevent>
              hi, {{ userInfo?.userName }}
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item key="1">{{ userInfo?.userEmail }}</a-menu-item>
                <a-menu-item key="2" @click="quit">退出</a-menu-item>
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

<script setup>
import { reactive, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const reactiveData = reactive({
  collapsed: false,
  selectedKeys: [],
  openKeys: [],
  preOpenKeys: [],
});
const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

watch(
  () => reactiveData.openKeys,
  (_val, oldVal) => {
    reactiveData.preOpenKeys = oldVal;
  }
);

const quit = () => {
  router.push("/login");
};

const toggleCollapsed = () => {
  reactiveData.collapsed = !reactiveData.collapsed;
  reactiveData.openKeys = reactiveData.collapsed
    ? []
    : reactiveData.preOpenKeys;
};
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
    transition: all 0.5s;

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

    transition: all 0.5s;

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
