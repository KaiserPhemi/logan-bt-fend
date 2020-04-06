// node modules
const express = require("express");

// routers
const mainRouter = express.Router();
const userRouter = require("./users/userRoutes");
const projectRouter = require("./project/projectRoutes");
const bugRouter = require("./bugs/bugRoutes");
const teamRouter = require("./teams/teamRoutes");

// mount routes
mainRouter.use("/users", userRouter);
mainRouter.use("/projects", projectRouter);
mainRouter.use("/bugs", bugRouter);
mainRouter.use("/teams", teamRouter);

module.exports = mainRouter;
