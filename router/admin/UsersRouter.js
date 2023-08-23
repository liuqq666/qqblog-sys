var express = require('express');
const UserController = require('../../controller/UserController');
const UserRouter = express.Router();

UserRouter.post("/login",UserController.login)

module.exports = UserRouter;