// third-party libraries
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// schema
const bugModel = new Schema({});

// model
const Bug = model("Bug", bugModel);

module.exports = Bug;
