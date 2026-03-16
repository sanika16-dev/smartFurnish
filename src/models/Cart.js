const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },

  items: [
    {
      id: String,
      name: String,
      price: String,
      image: String,
      qty: Number
    }
  ],

  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Cart", cartSchema);
