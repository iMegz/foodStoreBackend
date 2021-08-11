const { Schema, model } = require("mongoose");
const schema = new Schema({
  by: { type: Schema.Types.ObjectId, ref: "User" },
  status: Number, //0:Cancelled, 1:Preparation, 2:On their way, 3:Delivered
  coupon: { type: Schema.Types.ObjectId, ref: "Coupon" },
  products: [
    {
      _id: { type: Schema.Types.ObjectId, ref: "Product" },
      price: Number,
    },
  ],
  times: {
    preparation: Date,
    onTheirWay: Date,
    delivered: Date,
  },
});
module.exports = model("Order", schema);
