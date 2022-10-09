const router = require('koa-router')()
const utils = require('../utils/utils')
const log4js = require('../utils/log4js')
const Depts = require('../models/depts')

router.prefix('/dept')

/**
 * 部门列表接口
 */
router.get('/list', async (ctx) => {
  const { deptName } = ctx.request.query
  const params = {}
  if(deptName) params.deptName = deptName

  try {
    const list = await Depts.find(params) || []
    const treeList = TreeDept(list, null)
    ctx.body = utils.success(treeList)
  } catch (error) {
    log4js.error(error.msg)
  }
})

// 递归生成部门数据
function TreeDept(rootList, id) {
  var result = []
  for (var i = 0; i < rootList.length; i++) {
      // 取出parentID数组你最后一项，如果是null 那就证明它是第一级菜单-这里String强制转换是因为 断点调试发现取出来的其实是一个数据对象类型，不是一个基本类型的
      // 所以给他来个强制转换成字符串，才能正常对比他是否相等
      if (String(rootList[i]._doc.parentId[rootList[i]._doc.parentId.length-1]) == String(id)) {
          result.push(rootList[i]._doc)
      }
  }
  // 把遍历出来的一级菜单 加children字段，然后把属于其的菜单往children里加
  result.map(item=>{
      item.children = TreeDept(rootList, item._id)
      if (item.children.length === 0 ){
          delete item.children
      }
  })
  return result
}

module.exports = router