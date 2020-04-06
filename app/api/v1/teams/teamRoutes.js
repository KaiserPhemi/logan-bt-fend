// libraries
const express = require("express");

// controllers
const teamController = require("./teamController");

// router
const teamRouter = express.Router();

// routes
teamRouter
  .route("/")
  .get(teamController.getAllTeams)
  .post(teamController.createTeam);
teamRouter
  .route("/:id")
  .put(teamController.updateTeam)
  .get(teamController.getTeam)
  .delete(teamController.deleteTeam);

module.exports = teamRouter;
