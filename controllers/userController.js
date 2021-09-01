const db = require("../config/db");

exports.create = (req, res) => {
    const { nickname, password } = req.body;
    // let user = {
    //     id: null,
    //     nickname: nickname,
    //     password: password 
    // }

    let user = [nickname, password]

    db.connection.execute(`INSERT INTO users(nickname, password) VALUES(?, ?)`, user, (er, result) => {
        if(er) {
            console.log(er);
            res.send(er);
        } else {
            res.send("User has created")
        }
    })

    // console.log(user);

    // res.send(user)   
}