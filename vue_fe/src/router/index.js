import {createRouter, createWebHashHistory} from 'vue-router'
import Login from '@/views/login/Login.vue'

const routes = [
  {
    name: 'login',
    path: '/login',
    directives: '/login',
    meta: {
      title: '登录页面'
    },
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router