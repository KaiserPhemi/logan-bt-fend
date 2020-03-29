// libraries
const express = require("express");

// controllers
const orgController = require("./orgController");

// router
const orgRouter = express.Router();

// routes
orgRouter
  .route("/")
  .get(orgController.getOrg)
  .post(orgController.createOrg);
orgRouter
  .route("/:id")
  .put(orgController.updateOrg)
  .delete(orgController.deleteOrg);

module.exports = orgRouter;
