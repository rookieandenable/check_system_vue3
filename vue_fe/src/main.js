import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import api from './api'

const app =createApp(App)

//  全局挂载api
app.provide('$api', api)

app
  .use(router)
  .use(ElementPlus)
  .mount('#app')
