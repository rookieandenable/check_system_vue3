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
      url: '/users/login',
      method: 'post',
      data: params
    })
  },
  /**
   * 获取用户列表接口
   * @param {Object} params
   */
  getUserList(params) {
    return request({
      url: '/users/list',
      method: 'get',
      data: params
    })
  },
  /**
   * 获取菜单列表接口
   * @param {Object} params
   */
   getMenuList(params) {
    return request({
      url: '/menu/list',
      method: 'get',
      data: params
    })
  },
  /**
   * 获取部门列表接口
   * @param {Object} params
   */
   getDeptList(params) {
    return request({
      url: '/dept/list',
      method: 'get',
      data: params
    })
  },
  /**
   * 获取角色列表接口
   * @param {Object} params
   */
   getRoleList(params) {
    return request({
      url: '/role/list',
      method: 'get',
      data: params
    })
  },
}