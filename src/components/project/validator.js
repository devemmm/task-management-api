const joi = require("@hapi/joi");

class Validator {
  constructor() {
    return this;
  }

  static create = joi.object().keys({
    name: joi.string().required(),
    description: joi.string().required(),
    start_date: joi.string().required(),
    end_date: joi.string().required(),
  });

  static get = joi.object().keys();

  static update = joi.object().keys();

  static delete = joi.object().keys();
}

module.exports = Validator;
