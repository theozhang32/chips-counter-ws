const countService = require("../service/count.service");

async function update(ctx) {
  const { action } = ctx.request.body;

  let data;
  if (action === "inc") {
    data = await countService.increment();
  } else if (action === "clear") {
    data = await countService.clear();
  } else {
    data = await countService.getCount();
  }

  ctx.body = {
    code: 0,
    data,
  };
}

async function get(ctx) {
  const data = await countService.getCount();

  ctx.body = {
    code: 0,
    data,
  };
}

module.exports = {
  update,
  get,
};
