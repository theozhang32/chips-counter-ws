const Router = require("koa-router");
const homeController = require("../controller/home.controller");
const countController = require("../controller/count.controller");
const wxController = require("../controller/wx.controller");

const router = new Router();

router.get("/", homeController.index);
router.post("/api/count", countController.update);
router.get("/api/count", countController.get);
router.get("/api/wx_openid", wxController.getOpenId);

module.exports = router;
