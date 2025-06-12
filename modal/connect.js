const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DB_URL);

const todoListSchema = new mongoose.Schema({
  title: String,
  priority:String
});

module.exports = mongoose.model('tasks',todoListSchema);
