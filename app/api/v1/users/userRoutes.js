// node libraries
const express = require("express");

// controllers
const userController = require("./userController");

// middlewares
const {
  validateFormData,
  checkExistingUser,
} = require("../../../middlewares/userCheck");

// router
const userRouter = express.Router();

// routes
userRouter
  .route("/")
  .get(userController.getUsers)
  .post(validateFormData, checkExistingUser, userController.createUser);
userRouter
  .route("/:id")
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = userRouter;
