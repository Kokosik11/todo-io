const config = require("config");

const DBConfig = config.get("DB");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(DBConfig.DBName, DBConfig.USER, DBConfig.PASS, {
  host: DBConfig.HOST,
  dialect: DBConfig.DIALECT,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("../models/user.model.js")(sequelize, Sequelize);

module.exports = db;