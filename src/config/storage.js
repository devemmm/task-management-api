const multer = require("multer");

class Storage {
  constructor() {
    return this;
  }

  static avatarStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/users/profile");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        new Date().toISOString() + file.originalname.replaceAll(" ", "")
      );
    },
  });

  static avatar = multer({
    storage: this.avatarStorage,
    limits: {
      fieldSize: 2000000,
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return cb(new Error("Please Upload an Image File"));
      }

      cb(undefined, true);
    },
  });

  static taskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/task");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        new Date().toISOString() + file.originalname.replaceAll(" ", "")
      );
    },
  });

  static task = multer({
    storage: this.taskStorage,
    limits: {
      fieldSize: 2000000,
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(jpg|jpeg|png|pdf|docs)$/)) {
        return cb(new Error("Please upload a document File"));
      }
      cb(undefined, true);
    },
  });
}

module.exports = Storage;
