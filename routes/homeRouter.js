const express = require("express");
const Controller = require("../controllers/homeController");
const Router = express.Router();

Router.get("/", Controller.main);

module.exports = Router;