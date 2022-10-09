const router = require('koa-router')()
const Users = require('../models/users')
const md5 = require('md5')
const jwt = require('jsonwebtoken')
const config = require('../config')
const utils = require('../utils/utils')
const log4js = require('../utils/log4js')

router.prefix('/users')

/**
 * 登录接口
 */
router.post('/login', async (ctx) => {
  try {
    const { userName, userPwd } = ctx.request.body
    const res = await Users.findOne({
      userName,
      // userPwd: md5(userPwd)
      userPwd: 'e10adc3949ba59abbe56e057f20f883e'
    }, 'userId userName userEmail state role deptId roleList')
    if (res) {
      const token = jwt.sign(res._doc, config.tokenKey, {expiresIn: '1h'})
      const data = res._doc
      data.token = token
      ctx.body = utils.success(data, '登录成功')
    } else {
      ctx.body = utils.fail('账号或密码错误', utils.CODE.USER_ACCOUNT_ERROR)
    }
  } catch(error) {
    log4js.error(error)
  }
})

/**
 * 用户列表接口
 */
router.get('/list', async (ctx) => {
  const { userId, userName, state } = ctx.request.query
  const { page, skipIndex } = utils.pager(ctx.request.query)
  const params = {}
  if(userId) params.userId = userId
  if(userName) params.userName = userName
  if(state && state !== '0') params.state = state
  try {
    const list = await Users.find(params, {_id: 0, userPwd: 0, __v: 0}).skip(skipIndex).limit(page.pageSize)
    const total = await Users.countDocuments(params)
    ctx.body = utils.success({
      page: {
        ...page,
        total
      },
      list
    })
  } catch (error) {
    log4js.error(error.msg)
  }
})

/**
 * 删除用户列表接口 - 软删除
 */
router.post('/delete', async (ctx) => {
  const { userIds } = ctx.request.body
  const res = await Users.updateMany({ userId: { $in: userIds }}, { state: 2 })
  if (res.nModified) {
    ctx.body = utils.success(res, `共删除了${res.nModified}条`)
    return
  }
  ctx.body = utils.fail('删除失败')
})

module.exports = router
