const fs = require("fs");
const path = require("path");

const homePage = fs.readFileSync(path.join(__dirname, "../../index.html"), "utf-8");

async function index(ctx) {
  ctx.body = homePage;
}

module.exports = {
  index,
};
