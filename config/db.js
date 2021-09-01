const mysql = require("mysql2");
const config = require("config");

const DBConfig = config.get("DB");

exports.connection = mysql.createConnection({
    host: DBConfig.HOST,
    user: DBConfig.USER,
    database: DBConfig.DBName,
    password: DBConfig.PASS
})