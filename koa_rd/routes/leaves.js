const router = require("koa-router")();
const utils = require("../utils/utils");
const Leaves = require("../models/leaves");

router.prefix("/leave");

/**
 * 审批列表接口
 */
router.get("/list", async function (ctx) {
  try {
    const { applyState, type } = ctx.request.query;
    const { page, skipIndex } = utils.pager(ctx.request.query);
    const authorization = ctx.request.headers.authorization;
    const token = authorization.split(" ")[1];
    const ueserInfo = utils.decodeToken(token);
    let params = {};
    if (type === "approve") {
      // 待审核列表
      if (applyState == null || Number(applyState) === 0 || applyState === "") {
        // 全部
        params = {
          "auditFlows.userId": ueserInfo.userId,
        };
      } else if (Number(applyState) === 1 || Number(applyState) === 2) {
        // 待审核状态-审核中
        params = {
          "auditFlows.userId": ueserInfo.userId,
          $or: [{ applyState: 1 }, { applyState: 2 }],
        };
        params.curAuditUserName = ueserInfo.userName;
      } else {
        // 其他状态
        params = {
          "auditFlows.userId": ueserInfo.userId,
          applyState,
        };
      }
    } else {
      // 申请休假列表
      params = {
        "applyUser.userId": ueserInfo.userId,
      };
      if (applyState != null && Number(applyState))
        params.applyState = applyState;
    }
    // 根据条件查询所有用户列表
    const query = Leaves.find(params); //查询所有数据
    const list = await query.skip(skipIndex).limit(page.pageSize); //根据查出的所有数据截取对应页数的数据
    const total = await Leaves.countDocuments(params);
    ctx.body = utils.success({
      page: {
        ...page,
        total,
      },
      list,
    });
  } catch (error) {
    ctx.body = utils.fail(`查询异常:${error.stack}`);
  }
});

module.exports = router;
