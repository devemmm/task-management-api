const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Controller = require("../base/controller");
const Schema = require("./schema");
const { responses } = require("../../libs/constants");
const Task = require("../task/schema");
const Project = require("../project/schema");
const { comparePassword } = require("../../helpers/validatePassword");

class Service extends Controller {
  constructor() {
    super();
    return this;
  }

  async create(req, res) {
    try {
      let avatar = "";
      if (req.file) {
        avatar = req.file.path.replace("public", `${process.env.BASE_URL}`);
      }
      const user = new Schema({ ...req.body });

      user.avatar = avatar;
      user.password = await bcrypt.hash(user.password, 8);
      await user.save();
      return { message: "account created successfull" };
    } catch (error) {
      let responseType = responses.INTERNAL_SERVER_ERROR;
      responseType.MSG = "username_or_email already exist";

      this.sendResponse({ req, res, type: responseType });
    }
  }

  async signin(req, res) {
    const { email, username, password } = req.body;

    try {
      if (!email && !username) {
        throw new Error("please enter email or username");
      }

      if (!password) {
        throw new Error("please enter password");
      }

      let query = email ? { email } : { username };
      if (!email.includes("@")) {
        query = { username: email };
      }
      const user = await Schema.findOne({ where: query });

      if (user) {
        const isMatch = await bcrypt.compare(
          password,
          user.dataValues.password
        );

        if (isMatch) {
          user.dataValues.token = jwt.sign({ email }, process.env.JWT_SECRET);

          delete user.dataValues.id;
          delete user.dataValues.password;

          return { user };
        } else {
          throw new Error("wrong password");
        }
      } else {
        throw new Error("user_not_found");
      }
    } catch (error) {
      this.sendResponse({
        req,
        res,
        type: responses.UNAUTHORIZED_REQUEST,
        data: error.message,
      });
    }
  }

  async get(req, res) {
    try {
      if (req.query.id !== "" && req.query.id) {
        const user = await Schema.findByPk(req.query.id, {
          include: [Task, Project],
        });
        if (user) {
          return user;
        }
        return {};
      }

      return await Schema.findAll({ include: [Task, Project] });
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
        updates.avatar = req.file.path.replace(
          "public",
          `${process.env.BASE_URL}`
        );
      }
      const allowedUpdates = [
        "avatar",
        "fname",
        "lname",
        "phone",
        "country",
        "location",
        "password",
        "status",
        "oldPassword",
        "newPassword",
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
        throw new Error("user id must be required");
      }

      updates.id = req.params.id;

      const user = await Schema.findByPk(req.params.id);
      if (!user) {
        throw new Error("User not found");
      }

      Object.entries(updates).forEach((update) => {
        user[update[0]] = update[1];
      });

      if (req?.body?.password) {
        user.password = await bcrypt.hash(req.body.password, 8);
      }

      return await user.save();
    } catch (error) {
      this.sendResponse({
        req,
        res,
        type: responses.UNAUTHORIZED_REQUEST,
        data: error.message,
      });
    }
  }


  async changePassword(req, res) {
    try {
      const { oldPassword, newPassword, confirmPassword } = req.body
      if(newPassword !== confirmPassword) {
        throw new Error("both old and new password must be the same")
      }  

      const isPasswordMatch = await comparePassword(oldPassword, req.user.password)

      if(!isPasswordMatch){
        throw new Error("the old password entered is incorrect");
      }


      let user = req.user;
      user.password = await bcrypt.hash(newPassword, 8);

      await user.save();
      return  { message: "password changed successfully" }
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
    
      const user = await Schema.findByPk(req.params.id)
      if (!user) {
        throw new Error("User not found")
      }
      user.status = 0
      return user.save();
    } catch (error) {
      this.sendResponse({
        req,
        res,
        type: responses.UNAUTHORIZED_REQUEST,
        data: error.message,
      });
    
    }
  }
}

module.exports = Service;
