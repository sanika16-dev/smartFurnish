const express = require("express");
const router = express.Router();
const Cart = require("./models/Cart");

/* =========================
   SAVE / UPDATE CART
   ========================= */
router.post("/", async (req, res) => {
  try {
    const { userId, items } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "userId required" });
    }

    // Replace full cart items (important for remove)
    const cart = await Cart.findOneAndUpdate(
      { userId },
      {
        items: items || [],
        updatedAt: new Date()
      },
      {
        upsert: true,   // create cart if not exists
        new: true       // return updated cart
      }
    );

    res.json({ message: "Cart saved successfully", cart });

  } catch (err) {
    console.error("Cart save error:", err);
    res.status(500).json({ error: "Failed to save cart" });
  }
});


/* =========================
   GET CART BY USER
   ========================= */
router.get("/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });

    // Always return items array (never null)
    res.json(cart || { userId: req.params.userId, items: [] });

  } catch (err) {
    console.error("Cart fetch error:", err);
    res.status(500).json({ error: "Failed to fetch cart" });
  }
});


/* =========================
   CLEAR CART (OPTIONAL - for payment)
   ========================= */
router.delete("/:userId", async (req, res) => {
  try {
    await Cart.findOneAndUpdate(
      { userId: req.params.userId },
      { items: [], updatedAt: new Date() }
    );

    res.json({ message: "Cart cleared" });

  } catch (err) {
    console.error("Cart clear error:", err);
    res.status(500).json({ error: "Failed to clear cart" });
  }
});

module.exports = router;
