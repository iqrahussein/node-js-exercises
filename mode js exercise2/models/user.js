const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
  name: String,
  email: String,
});

module.exports = mongoose.model("user", userScheme);
