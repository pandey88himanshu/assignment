const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userModel = mongoose.Schema({
  name: {
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
  pic: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", userModel);
