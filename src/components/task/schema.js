const { Model, DataTypes } = require("sequelize");
const db = require("../../config/mysql");

class Task extends Model {}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      trim: true,
    },
    description: {
      type: DataTypes.STRING,
      trim: true,
    },
    priority: {
      type: DataTypes.ENUM("LOW","NORMAL", "HIGH"),
      defaultValue: "NORMAL",
      trim: true,
    },
    file: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.TINYINT,
      trim: true,
      defaultValue: 1,
    },
    start_date: {
      type: DataTypes.DATE,
      trim: true,
    },
    end_date: {
      type: DataTypes.DATE,
      trim: true,
    },
  },
  {
    timestamps: true,
    sequelize: db,
    modelName: "Task",
    tableName: "task",
  }
);

module.exports = Task;
