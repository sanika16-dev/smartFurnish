const express = require("express");
const cors = require("cors");
const path = require("path");
const authRoutes = require("./routes/auth");
const seedProducts = require("./data/productSeed");



const connectDB = require("./db");
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");
const categoryRoutes = require("./routes/categories");
const cartRoutes = require("./routes/cart");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// serve frontend files
app.use(express.static(path.join(__dirname, "../../frontend")));

// serve frontend images
app.use(
  "/images",
  express.static(path.join(__dirname, "../../frontend/images"))
);

// connect database
(async () => {
  await connectDB();
  await seedProducts();
})();

// routes
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/cart", cartRoutes);


// test route
app.get("/", (req, res) => {
  res.send("Smart Furnish Backend is running");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
