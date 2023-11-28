const BaseController = require("../base/controller");
const Service = require("./service");
const { responses } = require("../../libs/constants");

class Controller extends BaseController {
  constructor() {
    super();
    return this;
  }

  async create(req, res) {
    const project = await new Service().create(req, res);
    return project
      ? this.sendResponse({ req, res, type: responses.SUCCESS, data: project })
      : null;
  }

  async get(req, res) {
    const projects = await new Service().get(req, res);
    return projects
      ? this.sendResponse({ req, res, type: responses.SUCCESS, data: projects })
      : null;
  }

  async update(req, res) {
    const project = await new Service().update(req, res);
    return project
      ? this.sendResponse({ req, res, type: responses.SUCCESS, data: project })
      : null;
  }

  async delete(req, res) {
    const project = await new Service().delete(req, res);
    return project
      ? this.sendResponse({ req, res, type: responses.SUCCESS, data: project })
      : null;
  }
}

module.exports = Controller;
