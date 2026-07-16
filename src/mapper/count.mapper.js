const { Counter } = require("../model");

async function create() {
  return Counter.create();
}

async function clear() {
  return Counter.destroy({ truncate: true });
}

async function count() {
  return Counter.count();
}

module.exports = {
  create,
  clear,
  count,
};
