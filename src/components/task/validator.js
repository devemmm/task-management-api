const joi = require("@hapi/joi");

class Validator {
  constructor() {
    return this;
  }

  // static create = joi.object().keys({
  //   name: joi.string().required(),
  //   description: joi.string().required(),
  //   file: joi.string().required(),
  //   start_date: joi.string().required(),
  //   end_date: joi.string().required(),
  //   project_id: joi.number().required(),
  //   users: joi.array().required(),
  // });

  static create = joi.object().keys();

  static get = joi.object().keys({
    id: joi.string(),
    uuid: joi.string(),
    deadline: joi.string(),
  });

  static update = joi.object().keys();

  static delete = joi.object().keys();
}

module.exports = Validator;
