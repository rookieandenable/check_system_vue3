import {createRouter, createWebHashHistory} from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Welcome from '@/views/Welcome.vue'
import UserManager from '@/views/UserManager.vue'
import MenuManager from '@/views/MenuManager.vue'
import DeptManager from '@/views/DeptManager.vue'
import RoleManager from '@/views/RoleManager.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录页面'
    },
    component: Login
  },
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页'
    },
    redirect: '/welcome',
    component: Home,
    children: [
      {
        name: 'welcome',
        path: '/welcome',
        meta: {
          title: '欢迎页'
        },
        component: Welcome
      },
      {
        name: 'userManager',
        path: '/userManager',
        meta: {
          title: '用户管理'
        },
        component: UserManager
      },
      {
        name: 'menuManager',
        path: '/menuManager',
        meta: {
          title: '菜单管理'
        },
        component: MenuManager
      },
      {
        name: 'deptManager',
        path: '/deptManager',
        meta: {
          title: '部门管理'
        },
        component: DeptManager
      },
      {
        name: 'roleManager',
        path: '/roleManager',
        meta: {
          title: '角色管理'
        },
        component: RoleManager
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router