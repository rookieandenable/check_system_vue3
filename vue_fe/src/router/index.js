import {createRouter, createWebHashHistory} from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Welcome from '@/views/Welcome.vue'

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
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router