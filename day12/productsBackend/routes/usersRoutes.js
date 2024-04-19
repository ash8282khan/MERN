const express = require("express");
const usersController = require('../controllers/usersController.js')
const userRouter = express.Router();

userRouter.route('/')
    .get(usersController.getAllUsers)
    .post(usersController.addUsers)



module.exports = userRouter;