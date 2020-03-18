// node modules
const express = require("express");

// routers
const userRouter = require("./users/userRoutes");
const mainRouter = express.Router();

// mount routes
mainRouter.use("/users", userRouter);

module.exports = mainRouter;
