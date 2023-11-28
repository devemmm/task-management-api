const Sequelize = require("sequelize");
const { QueryTypes } = require("sequelize");
const { responses } = require("../libs/constants");

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE,
    operatorsAlliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

db.authenticate()
  .then(() => {
    console.log(responses.CONNECTION.CONNECTED_SUCCESS);
    db.query("SHOW TABLES", QueryTypes.SHOWTABLES)
      .then((res) => {
        res[0].length === 0
          ? db
              .sync()
              .then(async () => {
                console.log(responses.SQL.TABLE_CREATED_SUCCESS);
              })
              .catch((error) => console.log(responses.SQL.ERROR_OCP, error))
          : null;
      })
      .catch((er) => {
        console.log(responses.CONNECTION.CONNECTION_FAILED, er);
      });
  })
  .catch((err) => console.log(responses.CONNECTION.CONNECTION_FAILED, err));

module.exports = db;
