const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true, minlength: 3 },
  name: { type: String, required: true, minlength: 3 },
});

module.exports = User = mongoose.model("user", userSchema);