/*
 * @Author: sunjinhua 
 * @Date: 2022-07-27 10:57:16
 * @Descript axios封装
 */
import axios from "axios"
import config from '@/config'

const server = axios.create({
  baseURL: config.baseUrl,
  timeout: 8000
})

// 请求信息拦截器
server.interceptors.request.use((req) => {
  return req
})

// 响应信息拦截器
server.interceptors.response.use((res) => {
  return res
})

export default server