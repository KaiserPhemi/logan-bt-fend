// third-party libraries
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// schema
const teamModel = new Schema({});

// model
const Team = model("Team", teamModel);

module.exports = Team;
