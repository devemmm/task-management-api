const { Model, DataTypes } = require("sequelize");
const db = require("../../config/mysql");

class Project extends Model {}

Project.init(
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
    modelName: "Project",
    tableName: "project",
  }
);

module.exports = Project;
