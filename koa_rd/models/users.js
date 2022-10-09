const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
  userId: Number,
  userName: String,
  userPwd: String,
  userEmail: String,
  mobile: String,
  sex: Number, // 性别 0: 男 1: 女
  deptId: [], // 部门
  job: String, // 岗位
  state: { // 1: 在职 2: 离职 3: 试用期
    type: Number,
    default: 1
  },
  role: { // 0: 管理员 1: 普通用户
    type: Number,
    default: 1
  },
  roleList: [], // 系统角色
  createTime: { // 创建时间
    type: Date,
    default: Date.now()
  },
  lastLoginTime: { // 更新时间
    type: Date,
    default: Date.now()
  },
  remark: String
})

module.exports = mongoose.model('users', usersSchema, 'users')