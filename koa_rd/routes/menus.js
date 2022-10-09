const router = require("koa-router")();
const utils = require("../utils/utils");
const log4js = require("../utils/log4js");
const Menus = require("../models/menus");

router.prefix("/menu");

/**
 * 菜单列表
 */
router.get("/list", async (ctx) => {
  const { menuName, menuState } = ctx.request.body;
  const params = {};
  if (menuName) params.menuName = menuName;
  if (menuState) params.menuState = menuState;
  try {
    const res = (await Menus.find(params)) || [];
    const list = utils.TreeMenu(res, null);
    console.log(res);
    ctx.body = utils.success(list);
  } catch (error) {
    log4js.error(error.msg);
  }
});

module.exports = router;
