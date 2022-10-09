/*
 * @Author: sunjinhua 
 * @Date: 2022-07-27 10:57:16
 * @Descript axios封装
 */
import axios from "axios"
import config from '@/config'

const server = axios.create({
  baseURL: config.baseUrl,
  timeout: 500000
})

// 请求信息拦截器
server.interceptors.request.use((req) => {
  const userInfo = sessionStorage.getItem('userInfo')
  const token = userInfo && JSON.parse(userInfo).token
  if (token) {
    req.headers.Authorization = 'Bearer ' + token
  }
  return req
})

// 响应信息拦截器
server.interceptors.response.use((res) => {
  return res
})

/**
 * 请求核心函数
 */
function request(options) {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }
  return server(options)
}

export default request