const { Model, DataTypes } = require("sequelize");
const db = require("../../config/mysql");
const Task = require("../task/schema");
const Project = require("../project/schema");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fname: {
      type: DataTypes.STRING,
      trim: true,
    },
    lname: {
      type: DataTypes.STRING,
      trim: true,
    },
    phone: {
      type: DataTypes.STRING,
      trim: true,
    },
    country: {
      type: DataTypes.STRING,
      trim: true,
      defaultValue: "RWANDA",
    },
    location: {
      type: DataTypes.STRING,
      trim: true,
    },
    username: {
      type: DataTypes.STRING,
      trim: true,
      unique: true,
    },
    role: {
      type: DataTypes.ENUM("ADMIN", "USER"),
      trim: true,
      defaultValue: "USER",
    },
    status: {
      type: DataTypes.TINYINT,
      trim: true,
      defaultValue: 1,
    },
    email: {
      type: DataTypes.STRING,
      trim: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      trim: true,
    },
    avatar: {
      type: DataTypes.STRING,
      trim: true,
    },
  },
  {
    timestamps: true,
    sequelize: db,
    modelName: "User",
    tableName: "user",
  }
);

// DEFINE many-to-many RELATIONSHIP

class UserTask extends Model {}

UserTask.init(
  {
    selfGranted: DataTypes.BOOLEAN,
  },
  {
    timestamps: true,
    sequelize: db,
    modelName: "UserTask",
    tableName: "user_task",
  }
);

class UserProject extends Model {}

UserProject.init(
  {
    selfGranted: DataTypes.BOOLEAN,
  },
  {
    timestamps: true,
    sequelize: db,
    modelName: "UserProject",
    tableName: "user_project",
  }
);

User.belongsToMany(Task, {
  through: UserTask,
  foreignKey: { name: "user_id" },
});

Task.belongsToMany(User, {
  through: UserTask,
  foreignKey: { name: "task_id" },
});

User.belongsToMany(Project, {
  through: UserProject,
  foreignKey: "user_id",
});

Project.belongsToMany(User, {
  through: UserProject,
  foreignKey: "project_id",
});

// END OF many-to-many RELATIONSHIP

// DEFINE ONE-to-many RELATIONSHIP
Project.hasMany(Task, { foreignKey: { name: "project_id", allowNull: false } });
Task.belongsTo(Project, {
  foreignKey: { name: "project_id", allowNull: false },
});
// DEFINE ONE-to-many RELATIONSHIP

module.exports = User;
