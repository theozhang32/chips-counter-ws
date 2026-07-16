const sequelize = require("../config/database");
const Counter = require("./counter.model");

async function init() {
  await Counter.sync({ alter: true });
}

module.exports = {
  sequelize,
  init,
  Counter,
};
