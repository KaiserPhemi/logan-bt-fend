// third-party libraries
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// schema
const projectModel = new Schema({});

// model
const Project = model("Project", projectModel);

module.exports = Project;
