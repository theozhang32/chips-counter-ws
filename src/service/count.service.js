const countMapper = require("../mapper/count.mapper");

async function increment() {
  await countMapper.create();
  return countMapper.count();
}

async function clear() {
  await countMapper.clear();
  return countMapper.count();
}

async function getCount() {
  return countMapper.count();
}

module.exports = {
  increment,
  clear,
  getCount,
};
