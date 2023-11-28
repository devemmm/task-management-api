const Controller = require("../base/controller");
const Schema = require("./schema");
const User = require("../user/schema");
const Project = require("../project/schema");
const { responses } = require("../../libs/constants");

class Service extends Controller {
  constructor() {
    super();
    return this;
  }

  async create(req, res) {
    try {
      let taskFile = "";
      if (req.file) {
        taskFile = req.file.path.replace("public", `${process.env.BASE_URL}`);
      }

      const task = new Schema({ ...req.body });
      task.project_id = parseInt(task.project_id);
      task.file = taskFile;

      await task.save();

      let users = JSON.parse(req?.body?.assignees);
      if (users.length > 0) {
        await task.addUser(users, { through: { selfGranted: false } });

        users.map(async (usrId) => {
          const user = await User.findByPk(usrId);

          await user.addProject(task.project_id, {
            through: { selfGranted: false },
          });
        });
      }

      return { message: "task created successfull" };
    } catch (error) {
      let responseType = responses.INTERNAL_SERVER_ERROR;
      responseType.MSG = "something went wrong";

      this.sendResponse({ req, res, type: responseType });
    }
  }

  async get(req, res) {
    const { id, uuid, deadline } = req.body;

    try {
      let query = {};

      if (id) {
        query.id = id;
      }

      if (uuid) {
        query.uuid = uuid;
      }

      if (deadline) {
        query.deadline = deadline;
      }

      return await Schema.findAll({ where: query, include: [User, Project] });
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
      if (req.file) {
        updates.file = req.file.path.replace(
          "public",
          `${process.env.BASE_URL}`
        );
      }

      req.users = updates.assignees;

      const allowedUpdates = [
        "name",
        "description",
        "file",
        "start_date",
        "country",
        "end_date",
        "project_id",
        "users",
        "assignees",
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
        throw new Error("task id must be required");
      }

      updates.id = req.params.id;

      const task = await Schema.findByPk(req.params.id);
      if (!task) {
        throw new Error("Task not found");
      }

      return await task.save();
    } catch (error) {
      let responseType = responses.INTERNAL_SERVER_ERROR;
      responseType.MSG = error.message;

      this.sendResponse({ req, res, type: responseType });
    }
  }

  async delete(req, res) {
    try {
      let task = await Schema.findByPk(req.params.id);

      if (!task) {
        throw new Error("Task not found");
      }

      return task.destroy();
    } catch (error) {
      let responseType = responses.INTERNAL_SERVER_ERROR;
      responseType.MSG = error.message;
      this.sendResponse({ req, res, type: responseType });
    }
  }
}

module.exports = Service;
