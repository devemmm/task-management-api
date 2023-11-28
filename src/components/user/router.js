const express = require("express");
const router = express.Router();
const Controller = require("./controller");
const Validator = require("../base/validator");
const requestValidator = require("./validator");
const Storage = require("../../config/storage");
const Authorization = require("../../middleware/authorization");

const controller = new Controller();
const validator = new Validator();
const authorization = new Authorization();

router
  .route("/signup")
  .post(
    validator.validateRequest.bind(
      new Validator().init(requestValidator.create)
    ),
    Storage.avatar.single("avatar"),
    controller.signup.bind(controller)
  );

router
  .route("/signin")
  .post(
    validator.validateRequest.bind(
      new Validator().init(requestValidator.signin)
    ),
    controller.signin.bind(controller)
  );

router
  .route("/")
  .get(
    validator.validateRequest.bind(new Validator().init(requestValidator.get)),
    authorization.requireAuth.bind(controller),
    controller.get.bind(controller)
  );

router
  .route("/:id")
  .patch(
    validator.validateRequest.bind(
      new Validator().init(requestValidator.update)
    ),
    authorization.requireAuth.bind(controller),
    Storage.avatar.single("avatar"),
    controller.update.bind(controller)
  );

router
  .route("/changePassword/:id")
  .patch(
    validator.validateRequest.bind(
      new Validator().init(requestValidator.changePassword)
    ),
    authorization.requireAuth.bind(controller),
    controller.changePassword.bind(controller)
  );

router
  .route("/:id")
  .delete(
    validator.validateRequest.bind(
      new Validator().init(requestValidator.delete)
    ),
    authorization.requireAuth.bind(controller),
    controller.delete.bind(controller)
  );

module.exports = router;
