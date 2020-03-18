// node modules
const express = require("express");

// controllers
const userController = require("./userController.js");

// router
const userRouter = express.Router();

// routes
userRouter
  .route("/")
  .get(userController.getUsers)
  .post(userController.createUser);

module.exports = userRouter;
