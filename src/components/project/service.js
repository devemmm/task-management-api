const Controller = require("../base/controller");
const Schema = require("./schema");
const User = require("../user/schema");
const Task = require("../task/schema");
const { responses } = require("../../libs/constants");

class Service extends Controller {
  constructor() {
    super();
    return this;
  }

  async create(req, res) {
    try {
      const project = new Schema({ ...req.body });

      await project.save();
      return { message: "project created successfull" };
    } catch (error) {
      let responseType = responses.INTERNAL_SERVER_ERROR;
      responseType.MSG = "something went wrong";

      this.sendResponse({ req, res, type: responseType });
    }
  }

  async get(req, res) {
    try {
      const { id } = req.query;
      let query = {};

      if (id) {
        query = { id: id };
      }

      return await Schema.findAll({ where: query, include: [User, Task] });
    } catch (error) {
      this.sendResponse({
        req,
        res,
        type: responses.UNAUTHORIZED_REQUEST,
        data: error.message,
      });
    }
  }

  async update(req, res) {
    try {
      let updates = req.body;
      const allowedUpdates = [
        "name",
        "description",
        "status",
        "start_date",
        "end_date",
      ];

      const isValidUpdate = Object.keys(updates).every((update) =>
        allowedUpdates.includes(update)
      );

      if (!isValidUpdate) {
        throw new Error(
          "internal server error it seems you're trying to modify unexpected attributes"
        );
      }

      if (!req.params.id) {
        throw new Error("project id must be required");
      }

      updates.id = req.params.id;

      const project = await Schema.findByPk(req.params.id);
      if (!project) {
        throw new Error("Project not found");
      }

      Object.entries(updates).forEach((update) => {
        project[update[0]] = update[1];
      });

      return await project.save();
    } catch (error) {
      this.sendResponse({
        req,
        res,
        type: responses.UNAUTHORIZED_REQUEST,
        data: error.message,
      });
    }
  }

  async delete(req, res) {
    try {
      let project = await Schema.findByPk(req.params.id);
      if(!project){
        throw new Error("Project not found")
      }
      return project.destroy()
    } catch (error) {
      let responseType = responses.INTERNAL_SERVER_ERROR;
      responseType.MSG = error.message;
      this.sendResponse({ req, res, type: responseType });
    }
  }
}

module.exports = Service;
