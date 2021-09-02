const express = require("express");
const Controller = require("../controllers/userController");
const Router = express.Router();

Router.post("/delete/:nickname", Controller.delete);
Router.post("/create", Controller.create);

module.exports = Router;