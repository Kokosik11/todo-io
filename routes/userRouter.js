const express = require("express");
const Controller = require("../controllers/userController");
const Router = express.Router();

Router.post("/create", Controller.create);

module.exports = Router;