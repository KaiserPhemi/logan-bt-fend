// node modules
const express = require("express");

// routers
const mainRouter = express.Router();
const userRouter = require("./users/userRoutes");
const projectRouter = require("./project/projectRoutes");
const bugRouter = require("./bugs/bugRoutes");
const orgRouter = require("./org/orgRoutes");

// mount routes
mainRouter.use("/users", userRouter);
mainRouter.use("/projects", projectRouter);
mainRouter.use("/bugs", bugRouter);
mainRouter.use("/orgs", orgRouter);

module.exports = mainRouter;
