const mongoose = require("mongoose");
console.log("✅ Product model file executed");

const productSchema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  desc: { type: String },
  images: [String],
  features: [String],
  category: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Product", productSchema);
