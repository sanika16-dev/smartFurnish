const express = require("express");
const router = express.Router();
const path = require("path");
const Product = require(path.join(__dirname, "../models/Product.js"));
console.log("✅ Product.js path:", require.resolve("../models/Product.js"));
console.log("✅ DEBUG Product typeof:", typeof Product);
console.log("✅ DEBUG Product keys:", Object.keys(Product));
console.log("✅ DEBUG Product.find:", Product.find);



/***********************
 * CREATE product (POST)
 ***********************/
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();

    res.status(201).json({
      message: "Product added successfully",
      product: newProduct
    });
  } catch (err) {
    console.error("Add product error:", err);
    res.status(500).json({ error: "Failed to add product" });
  }
});

/***********************
 * READ all products (GET)
 ***********************/
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error("Fetch products error:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

/*************************
 * READ product by ID (GET)
 *************************/
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ productId: req.params.id });
    res.json(product);
  } catch (err) {
    console.error("Fetch single product error:", err);
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

/*************************
 * UPDATE product (PUT)
 *************************/
router.put("/:id", async (req, res) => {
  try {
    const updated = await Product.findOneAndUpdate(
      { productId: req.params.id },
      req.body,
      { new: true }
    );

    res.json({
      message: "Product updated successfully",
      product: updated
    });
  } catch (err) {
    console.error("Update product error:", err);
    res.status(500).json({ error: "Failed to update product" });
  }
});

/*************************
 * DELETE product (DELETE)
 *************************/
router.delete("/:id", async (req, res) => {
  try {
    await Product.findOneAndDelete({ productId: req.params.id });

    res.json({
      message: "Product deleted successfully"
    });
  } catch (err) {
    console.error("Delete product error:", err);
    res.status(500).json({ error: "Failed to delete product" });
  }
});

module.exports = router;

