/*
 * @Author: sunjinhua 
 * @Date: 2022-07-27 11:09:20 
 * @Descript api管理
 */
import request from '../utils/request'
export default {
  /**
   * 登录接口
   * @param {object} params
   */
  login(params) {
    return request({
      url: '/login',
      method: 'post',
      data: params
    })
  }
}