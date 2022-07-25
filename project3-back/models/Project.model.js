const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const projectSchema = new Schema({
  title: String,
  description: String,
  img: Image,
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
  // owner will be added later on
});

module.exports = model("Project", projectSchema);
