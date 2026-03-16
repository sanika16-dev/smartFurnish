const express = require("express");
const router = express.Router();
const Order = require("../models/order.js");

// Place Order and Save to MongoDB (REAL ORDER)
router.post("/", async (req, res) => {
  try {
    console.log("Order received:", req.body);

    const newOrder = new Order(req.body);
    await newOrder.save();

    res.status(201).json({
      message: "Order placed successfully",
      orderId: newOrder._id
    });

  } catch (err) {
    console.error("Order save error:", err);
    res.status(500).json({ error: "Failed to place order" });
  }
});

module.exports = router;
