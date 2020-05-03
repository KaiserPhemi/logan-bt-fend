// libraries
const express = require("express");

// controller
const authController = require("./authController");

// middlewares
const {
  checkExistingUser,
  validateLoginData,
} = require("../../../middlewares/userCheck");

// router
const authRouter = express.Router();

// routes
authRouter
  .route("/")
  .post(validateLoginData, checkExistingUser, authController.loginUser);

module.exports = authRouter;
