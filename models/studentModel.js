const { sequelize } = require("../config/db.js");
const { DataTypes } = require("sequelize");

const Student = sequelize.define("Student", {
  id: {
    primaryKey: true,
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// sequelize.sync();
module.exports = Student;