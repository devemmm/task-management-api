const { user, userDefinitions } = require("./user.doc");
const { project, projectDefinitions } = require("./project.doc");
const { task, taskDefinitions } = require("./task.doc");

const url =
  process.env.NODE_ENV === "production"
    ? process.env.SWGBASE_URL.replace(/^/, "https://")
    : process.env.SWGBASE_URL.replace(/^/, "http://");

const host = url.split("://")[1];

const paths = { ...user, ...project, ...task };

const definitions = {
  ...userDefinitions,
  ...projectDefinitions,
  ...taskDefinitions,
};

const config = {
  swagger: "2.0",
  info: {
    description: "Task Management API",
    version: "2.0.0",
    title: "@tast_management_api --version-1",
    contact: {
      name: "Emmanuel NTIVUGURUZWA",
      email: "djntivuguruzwaemmanuel@gmail.com",
    },
  },
  host,
  basePath: "/",
  schemes: ["http", "https"],
  securityDefinitions: {
    JWT: {
      type: "apiKey",
      name: "Authorization",
      in: "header",
    },
  },
  paths,
  definitions,
};

module.exports = config;
