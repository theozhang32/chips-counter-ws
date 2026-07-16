async function getOpenId(ctx) {
  if (ctx.request.headers["x-wx-source"]) {
    ctx.body = ctx.request.headers["x-wx-openid"];
  }
}

module.exports = {
  getOpenId,
};
