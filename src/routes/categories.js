const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

// GET all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
});

// POST create category
router.post("/", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(201).json({ message: "Category added", category: newCategory });
  } catch (err) {
    res.status(500).json({ error: "Failed to add category" });
  }
});

module.exports = router;
