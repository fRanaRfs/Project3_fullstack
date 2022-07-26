const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  nickname: [{ type: Schema.Types.ObjectId, ref: "Project" }],
  ad: [{ type: Schema.Types.ObjectId, ref: "Project" }]
});

module.exports = model("User", userSchema);
