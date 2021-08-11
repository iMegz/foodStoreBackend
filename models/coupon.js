const { Schema, model } = require("mongoose");
const schema = new Schema({
  name: String,
  type: { type: String, enum: ["disc%", "disc$", "shipping"] },
  value: Number,
  amount: Number,
  usedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
  expiresIn: Date,
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
});
module.exports = model("Coupon", schema);
