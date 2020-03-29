// node modules
const express = require("express");

// controllers
const projectController = require("./projectController");

// project router
const projectRouter = express.Router();

// routes
projectRouter
  .route("/")
  .get(projectController.getAllProjects)
  .post(projectController.createProject);
projectRouter
  .route("/:id")
  .put(projectController.updateProject)
  .delete(projectController.deleteProject);

module.exports = projectRouter;
