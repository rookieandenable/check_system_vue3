import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import api from './api'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app =createApp(App)

//  全局挂载api
app.provide('$api', api)

app
  .use(router)
  .use(Antd)
  .mount('#app')
