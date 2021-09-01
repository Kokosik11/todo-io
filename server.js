// ***** Libs ***** //
const express = require("express");
const config = require("config");
const db = require("./config/db");

const app = express();

// ***** Configs ***** //
const { PORT } = config.get("Server");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.connection.connect(err => {
    if(err) console.error(err);
    else console.log("mySql connection has completed");
})

// const users = [
//     [null, "Kokosik11", "Tanaka2002"],
//     [null, "Ananasik11", "Pisya123"],
//     [null, "Admin", "Admin"]
// ];
// const sql = "INSERT INTO users(ID, nickname, password) VALUES(?, ?, ?)";

// db.connection.query(sql, users[1         
//  ], function(err, results) {
//     if(err) console.log(err);
//     else console.log("Данные добавлены");
// });

// db.connection.execute("SELECT * FROM users",
// function(err, results, fields) {
//   console.log(err);
//   console.log(results); // собственно данные
//   console.log(fields); // мета-данные полей 
// });
// db.connection.end();
// ***** Routers ***** //
const homeRouter = require("./routes/homeRouter.js");
const userRouter = require("./routes/userRouter.js");

app.use('/user', userRouter);
app.use('/', homeRouter);



app.listen(PORT || 3010, err => {
    if(err) console.error(err);
    else console.log(`Server has started on http://localhost:${PORT || 3010}/`);
})
