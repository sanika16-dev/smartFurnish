const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [
    {
      productId: String,
      name: String,
      price: Number,
      qty: Number,
      image: String
    }
  ],

  totalAmount: Number,

  shippingAddress: {
    name: String,
    mobile: String,
    address: String,
    city: String,
    pincode: String,
    state: String
  },

  paymentMethod: String,

  status: {
    type: String,
    default: "Order Confirmed"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", orderSchema);
