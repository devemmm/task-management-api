require("./mysql");
const path = require("path");
const express = require("express");
const cors = require("cors");
const appApi = require("../components/index");
const { responses } = require("../libs/constants");
const { serve, setup } = require("swagger-ui-express");
const docs = require("../documentation/index");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../../public");

// middleware
app.set("trust proxy", true);
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.static(publicDirectoryPath));
app.use(express.json());

app.use(appApi);
app.use("/", serve, setup(docs));

app.use((req, res) => {
  res.status(400).json({
    status: responses.RESOURCE_NOT_FOUND.CODE,
    message: responses.RESOURCE_NOT_FOUND.MSG,
  });
});

module.exports = app;
