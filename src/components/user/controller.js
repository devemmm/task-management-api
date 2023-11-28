const BaseController = require("../base/controller");
const Service = require("./service");
const { responses } = require("../../libs/constants");

class Controller extends BaseController {
  constructor() {
    super();
    return this;
  }

  async signup(req, res) {
    const user = await new Service().create(req, res);
    return user
      ? this.sendResponse({ req, res, type: responses.SUCCESS, data: user })
      : null;
  }

  async signin(req, res) {
    const user = await new Service().signin(req, res);
    return user
      ? this.sendResponse({ req, res, type: responses.SUCCESS, data: user })
      : null;
  }

  async get(req, res) {
    const user = await new Service().get(req, res);
    return user
      ? this.sendResponse({ req, res, type: responses.SUCCESS, data: user })
      : null;
  }

  async update(req, res) {
    const user = await new Service().update(req, res);
    return user
      ? this.sendResponse({ req, res, type: responses.SUCCESS, data: user })
      : null;
  }

  async delete(req, res) {
    const user = await new Service().delete(req, res);
    return user
      ? this.sendResponse({ req, res, type: responses.SUCCESS, data: user })
      : null;
  }

  async changePassword(req, res) {
    const user = await new Service().changePassword(req, res);
    return user
      ? this.sendResponse({ req, res, type: responses.SUCCESS, data: user })
      : null;
  }
}

module.exports = Controller;
