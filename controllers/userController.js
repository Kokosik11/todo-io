const bcrypt = require("bcrypt");
const db = require("../config/db");
const User = db.users;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
    const { nickname, password } = req.body;

    if(!nickname || !password) {
        res.status(404).send({ message: "Please enter a nickname or password." });
        return;
    }

    const hashedPsw = await bcrypt.hash(password, 12);

    const user = {
        nickname,
        password: hashedPsw
    }

    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: err.message })
        })
}

exports.delete = (req, res) => {
    const { nickname } = req.params;

    User.destroy({ 
        where: { nickname }
    })
        .then(num => {
            if(num == 1){
                res.send({ message: "User was deleted successfully"});
            }
            else {
                res.send({ message: `Cannot delete User "${nickname}". Maybe User was not found!`});
            }
        })
        .catch(err => {
            res.status(500).send({ message: `Could not delete User "${nickname}"`, err});
        });
}