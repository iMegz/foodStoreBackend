const { Schema, model } = require("mongoose");
const schema = new Schema({
  username: String,
  email: String,
  password: String,
  access: Number, //0:Admin, 1:Merchant, 2:Customer
  activations: {
    isActive: Boolean,
    token: String,
    expiresIn: Date,
  },
  cart: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  address: {
    country: String,
    city: String,
    postalCode: String,
    street: String,
    apt: String,
  },
});
module.exports = model("User", schema);
