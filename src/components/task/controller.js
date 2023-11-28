const BaseController = require("../base/controller");
const Service = require("./service");
const { responses } = require("../../libs/constants");

class Controller extends BaseController {
  constructor() {
    super();
    return this;
  }

  async create(req, res) {
    const task = await new Service().create(req, res);
    return task
      ? this.sendResponse({ req, res, type: responses.SUCCESS, data: task })
      : null;
  }

  async get(req, res) {
    const tasks = await new Service().get(req, res);
    return tasks
      ? this.sendResponse({ req, res, type: responses.SUCCESS, data: tasks })
      : null;
  }

  async update(req, res) {
    const tasks = await new Service().update(req, res);
    return tasks
      ? this.sendResponse({ req, res, type: responses.SUCCESS, data: tasks })
      : null;
  }

  async delete(req, res) {
    const tasks = await new Service().delete(req, res);
    return tasks
      ? this.sendResponse({ req, res, type: responses.SUCCESS, data: tasks })
      : null;
  }
}

module.exports = Controller;
