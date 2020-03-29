// libraries
const express = require("express");

// controllers
const bugController = require("./bugController");

const bugRouter = express.Router();

// routes
bugRouter
  .route("/")
  .get(bugController.getBugs)
  .post(bugController.createBug);
bugRouter
  .route("/:id")
  .put(bugController.updateBug)
  .delete(bugController.deleteBug);

module.exports = bugRouter;
