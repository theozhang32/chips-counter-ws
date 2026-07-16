const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Counter = sequelize.define("Counter", {
  count: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});

module.exports = Counter;
