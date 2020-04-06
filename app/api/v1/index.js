// node modules
const express = require("express");

// routers
const mainRouter = express.Router();
const userRouter = require("./users/userRoutes");
const projectRouter = require("./project/projectRoutes");
const bugRouter = require("./bugs/bugRoutes");
const teamRouter = require("./teams/teamRoutes");
const authRouter = require("./auth/authRoutes");

// mount routes
mainRouter.use("/users", userRouter);
mainRouter.use("/projects", projectRouter);
mainRouter.use("/bugs", bugRouter);
mainRouter.use("/teams", teamRouter);
mainRouter.use("/auth", authRouter);

module.exports = mainRouter;
