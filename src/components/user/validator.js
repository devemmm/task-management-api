const joi = require("@hapi/joi");

class Validator {
  constructor() {
    return this;
  }

  static signup = joi.object().keys({
    fname: joi.string().required(),
    lname: joi.string().required(),
    phone: joi.string().required(),
    country: joi.string(),
    location: joi.string(),
    username: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
  });

  static create = joi.object().keys({
    avatar: joi.string(),
    fname: joi.string(),
    lname: joi.string(),
    phone: joi.string(),
    country: joi.string(),
    location: joi.string(),
    username: joi.string(),
    email: joi.string().email(),
    password: joi.string(),
  });

  static signin = joi.object().keys({
    username: joi.string(),
    email: joi.string(),
    password: joi.string().required(),
  });

  static get = joi.object().keys();

  static update = joi.object().keys();

  static delete = joi.object().keys();


  static changePassword = joi.object().keys({
    oldPassword: joi.string().required(),
    newPassword: joi.string().required(),
    confirmPassword: joi.string().required()
  });
}

module.exports = Validator;
