const router = require('koa-router')()
const utils = require('../utils/utils')
const log4js = require('../utils/log4js')
const Roles = require('../models/roles')

router.prefix('/role')

/**
 * 获取角色列表接口
 */
router.get('/list', async (ctx) => {
  const { roleName } = ctx.request.query
  const { page, skipIndex } = utils.pager(ctx.request.query)
  const params = {}
  if(roleName) params.roleName = roleName
  try {
    const list = await Roles.find(params).skip(skipIndex).limit(page.pageSize)
    const total = await Roles.countDocuments(params)
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

module.exports = router