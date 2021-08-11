const { Schema, model } = require("mongoose");
const schema = new Schema({
  title: String,
  price: Number,
  priceBefore: Number,
  tags: [String],
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  desc: String,
  images: [String],
});
module.exports = model("Product", schema);
