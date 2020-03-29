// node modules
const express = require("express");

// controllers
const userController = require("./userController");

// router
const userRouter = express.Router();

// routes
userRouter
  .route("/")
  .get(userController.getUsers)
  .post(userController.createUser);

module.exports = userRouter;
