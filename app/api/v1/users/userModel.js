// third-party libraries
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// schema
const userModel = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// model
const User = model("User", userModel);

module.exports = User;
