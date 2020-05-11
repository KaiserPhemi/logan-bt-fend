// third-party libraries
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// schema
const projectModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  team: {
    type: String,
    required: true,
  },
});

// model
const Project = model("Project", projectModel);

module.exports = Project;
