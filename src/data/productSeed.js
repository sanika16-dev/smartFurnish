const Product = require("../models/Product.js");


const sampleProducts = [
  // =========================
  // KING SIZE BEDS (king1 - king8)
  // =========================
  {
    productId: "king1",
    name: "Luxury King Bed",
    price: 45000,
    desc: "Premium king size bed with modern wooden finish.",
    images: [
      "images/king/king1/side1.png",
      "images/king/king1/front1.png",
      "images/king/king1/dimension1.png"
    ],
    features: ["Solid wood", "Modern design", "5-year warranty"],
    category: "king"
  },
  {
    productId: "king2",
    name: "Orren Engineered Wood Bed",
    price: 30000,
    desc: "Orren Engineered Wood Bed with Laminated Textured Headboard & Footboard",
    images: [
      "images/king/king2/side2.png",
      "images/king/king2/front2.png",
      "images/king/king2/dimension2.png"
    ],
    features: ["Engineering wood", "Textured Laminated MDF Accents", "5-year warranty"],
    category: "king"
  },
  {
    productId: "king3",
    name: "Celestia Engineered Wood Bed",
    price: 18000,
    desc: "Celestia Engineered Wood Bed with Box Storage (King Size, Columbian Walnut Finish)",
    images: [
      "images/king/king3/side3.png",
      "images/king/king3/front3.png",
      "images/king/king3/dimension3.png"
    ],
    features: ["Engineering wood", "Columbian walnut finish", "3-year warranty"],
    category: "king"
  },
  {
    productId: "king4",
    name: "Lotus Premium Sheesham Wood Bed",
    price: 35000,
    desc: "Lotus Premium Sheesham Wood Bed without Storage (King Size, Honey Finish)",
    images: [
      "images/king/king4/side4.png",
      "images/king/king4/front4.png",
      "images/king/king4/dimension4.png"
    ],
    features: ["Padded Back Support", "Honey finish", "3-year warranty"],
    category: "king"
  },
  {
    productId: "king5",
    name: "Ferguson Sheesham Wood Bed",
    price: 70000,
    desc: "Ferguson Sheesham Wood Bed with hydraulic storage",
    images: [
      "images/king/king5/side5.png",
      "images/king/king5/front5.png",
      "images/king/king5/diemension5.png"
    ],
    features: ["Extra comfortable", "Walnut finish", "3-year warranty"],
    category: "king"
  },
  {
    productId: "king6",
    name: "Andreas Premium Fabric Bed",
    price: 64000,
    desc: "Andreas Premium Fabric Bed with Curved Headboard & Box Storage",
    images: [
      "images/king/king6/side6.png",
      "images/king/king6/front6.png",
      "images/king/king6/dimension6.png"
    ],
    features: ["Luxurious Premium Upholstery", "Curved Cushioned Headboard", "Sturdy Metal Legs"],
    category: "king"
  },
  {
    productId: "king7",
    name: "Adolph Sheesham Wood King Size Bed",
    price: 30000,
    desc: "Adolph Sheesham Wood King Size Bed Without Storage (Honey Finish)",
    images: [
      "images/king/king7/side7.png",
      "images/king/king7/front7.png",
      "images/king/king7/dimension7.png"
    ],
    features: ["Comfortable head rest", "Honey finish", "5-year warranty"],
    category: "king"
  },
  {
    productId: "king8",
    name: "Brixton Sheesham Wood Bed",
    price: 30000,
    desc: "Brixton Sheesham Wood Bed Without Storage (King Size, Honey Finish)",
    images: [
      "images/king/king8/side8.png",
      "images/king/king8/front8.png",
      "images/king/king8/dimension8.png"
    ],
    features: ["Groove design", "Honey finish", "Wooden headboard"],
    category: "king"
  },

  // =========================
  // QUEEN SIZE BEDS (queen1 - queen8)
  // =========================
  {
    productId: "queen1",
    name: "Willow Upholstered Queen Size Bed",
    price: 30000,
    desc: "Willow Upholstered Queen Size Bed honey finish",
    images: [
      "images/queen/queen1/side1.png",
      "images/queen/queen1/front1.png",
      "images/queen/queen1/dimension1.png"
    ],
    features: ["Upholstered linen fabric", "Durable", "Comfortable"],
    category: "queen"
  },
  {
    productId: "queen2",
    name: "Kosmo Noah Queen Bed",
    price: 12000,
    desc: "Kosmo Noah Queen Bed In Melamine Finish With Box Storage",
    images: [
      "images/queen/queen2/side2.png",
      "images/queen/queen2/front2.png",
      "images/queen/queen2/dimension2.png"
    ],
    features: ["Engineering wood", "Water resistant", "Termite proof"],
    category: "queen"
  },
  {
    productId: "queen3",
    name: "Walken Sheesham Wood Bed",
    price: 12000,
    desc: "Walken Sheesham Wood Bed with Full Drawer Storage",
    images: [
      "images/queen/queen3/side3.png",
      "images/queen/queen3/front3.png",
      "images/queen/queen3/dimension3.png"
    ],
    features: ["Drawer storage", "Durable", "3-year warranty"],
    category: "queen"
  },
  {
    productId: "queen4",
    name: "Calmora Engineered Wood Bed",
    price: 45000,
    desc: "Calmora Engineered Wood Bed with Upholstered Headboard",
    images: [
      "images/queen/queen4/side4.png",
      "images/queen/queen4/front4.png",
      "images/queen/queen4/dimension4.png"
    ],
    features: ["Robust construction", "Box storage", "3-year warranty"],
    category: "queen"
  },
  {
    productId: "queen5",
    name: "Clemency Bed with Box Storage",
    price: 20000,
    desc: "Clemency Bed with Box Storage (Queen Size, Frosty White Finish)",
    images: [
      "images/queen/queen5/side5.png",
      "images/queen/queen5/front5.png",
      "images/queen/queen5/dimension5.png"
    ],
    features: ["Robust construction", "Frosty white finish", "3 year warranty"],
    category: "queen"
  },
  {
    productId: "queen6",
    name: "Wildon Premium Sheesham Wood Bed",
    price: 54000,
    desc: "Wildon Premium Sheesham Wood Bed with Cushioned Headboard and Drawer Storage (Queen Size, Teak Finish)",
    images: [
      "images/queen/queen6/side6.png",
      "images/queen/queen6/front6.png",
      "images/queen/queen6/dimension6.png"
    ],
    features: ["Ornate brass detailing", "Cushioned pull-down headboard cabinet", "5 year warranty"],
    category: "queen"
  },
  {
    productId: "queen7",
    name: "Adhiraj Luxurious Fabric Bed",
    price: 73000,
    desc: "Adhiraj Luxurious Fabric Bed with Plush Wingback Headboard",
    images: [
      "images/queen/queen7/side7.png",
      "images/queen/queen7/front7.png",
      "images/queen/queen7/dimension7.png"
    ],
    features: ["Curved wingback headboard", "Elegant printed fabric", "Padded back support"],
    category: "queen"
  },
  {
    productId: "queen8",
    name: "Nuvo Premium Upholstered Bed",
    price: 39000,
    desc: "Nuvo Premium Upholstered Bed with Box Storage",
    images: [
      "images/queen/queen8/side8.png",
      "images/queen/queen8/front8.png",
      "images/queen/queen8/dimension8.png"
    ],
    features: ["Sheesham wood internal frame", "Engineered wood outer structure", "Deep tufted headboard"],
    category: "queen"
  },

  // =========================
  // BUNK BEDS (bunk1 - bunk4)
  // =========================
  {
    productId: "bunk1",
    name: "Solid Sheesham Wood Bunk Bed",
    price: 42000,
    desc: "Solid Sheesham Wood Bunk Bed with 2 Drawer Storage",
    images: [
      "images/bunk/bunk1/front1.png",
      "images/bunk/bunk1/side1.png",
      "images/bunk/bunk1/dimension1.png"
    ],
    features: ["Space saving design", "Safe guard rails"],
    category: "bunk"
  },
  {
    productId: "bunk2",
    name: "Serene Solid Wood Bunk Bed",
    price: 42800,
    desc: "Serene Solid Wood Bunk Bed in Brown Finish",
    images: [
      "images/bunk/bunk2/front2.png",
      "images/bunk/bunk2/side2.png",
      "images/bunk/bunk2/dimension2.png"
    ],
    features: ["Rubber wood construction", "High durability"],
    category: "bunk"
  },
  {
    productId: "bunk3",
    name: "Solid Sheesham Wood Bunk Bed (Premium)",
    price: 66000,
    desc: "Solid Sheesham Wood Bunk Bed with 2 Drawer Storage",
    images: [
      "images/bunk/bunk3/front3.png",
      "images/bunk/bunk3/side3.png",
      "images/bunk/bunk3/dimension3.png"
    ],
    features: ["Space saving design", "Safe guard rails"],
    category: "bunk"
  },
  {
    productId: "bunk4",
    name: "Little Master Blaster Bunk Bed",
    price: 80000,
    desc: "Little Master Blaster Bunk Bed with Storage",
    images: [
      "images/bunk/bunk4/front4.png",
      "images/bunk/bunk4/side4.png",
      "images/bunk/bunk4/dimension4.png"
    ],
    features: ["Space saving design", "Safe guard rails"],
    category: "bunk"
  },

  // =========================
  // STORAGE BEDS
  // =========================
  {
    productId: "storage1",
    name: "Hydraulic Storage Bed",
    price: 25000,
    desc: "Space-saving storage bed with hydraulic lift",
    images: [
      "images/storage/storage1/side1.png",
      "images/storage/storage1/front1.png",
      "images/storage/storage1/dimension1.png"
    ],
    features: ["Hydraulic lift mechanism", "Extra storage space"],
    category: "storage"
  },
  {
    productId: "storage2",
    name: "Clemency Bed with Box Storage",
    price: 25000,
    desc: "Clemency Bed with Box Storage in Walnut Finish",
    images: [
      "images/storage/storage2/side2.png",
      "images/storage/storage2/front2.png",
      "images/storage/storage2/dimension2.png"
    ],
    features: ["Engineered wood", "Box storage"],
    category: "storage"
  },
  {
    productId: "storage3",
    name: "Fidora Sheesham Wood Bed with Box Storage",
    price: 25000,
    desc: "Fidora Sheesham Wood Bed with Box Storage (Walnut Finish)",
    images: [
      "images/storage/storage3/side3.png",
      "images/storage/storage3/front3.png",
      "images/storage/storage3/dimension3.png"
    ],
    features: ["Sheesham wood", "Box storage"],
    category: "storage"
  },
  {
    productId: "storage4",
    name: "Evaline Hydraulic Bed with Box Storage",
    price: 25000,
    desc: "Evaline Hydraulic Bed with Box Storage",
    images: [
      "images/storage/storage4/side4.png",
      "images/storage/storage4/front4.png",
      "images/storage/storage4/dimension4.png"
    ],
    features: ["Teak finish", "Hydraulic box storage"],
    category: "storage"
  },
  {
    productId: "storage6",
    name: "Lotus Premium Sheesham Wood Bed",
    price: 48000,
    desc: "Lotus Premium Sheesham Wood Bed with Drawer Storage",
    images: [
      "images/storage/storage6/side6.png",
      "images/storage/storage6/front6.png",
      "images/storage/storage6/dimension6.png"
    ],
    features: ["Multiple storage compartments", "Drawer storage", "Padded back support"],
    category: "storage"
  },
  {
    productId: "storage7",
    name: "Drewno Sheesham Wood Upholstered Bed",
    price: 67000,
    desc: "Drewno Sheesham Wood Upholstered Bed with Hydraulic Storage",
    images: [
      "images/storage/storage7/side7.png",
      "images/storage/storage7/front7.png",
      "images/storage/storage7/dimension7.png"
    ],
    features: ["Hydraulic storage", "Drawer compartments", "Padded back support"],
    category: "storage"
  },
  {
    productId: "storage8",
    name: "Adolph Sheesham Wood Hydraulic Storage Bed",
    price: 35000,
    desc: "Adolph Sheesham Wood Hydraulic Storage Bed",
    images: [
      "images/storage/storage8/side8.png",
      "images/storage/storage8/front8.png",
      "images/storage/storage8/dimension8.png"
    ],
    features: ["Honey finish", "Hydraulic storage", "Padded back support"],
    category: "storage"
  }
];

async function seedProducts() {
  try {
    await Product.deleteMany();
    await Product.insertMany(sampleProducts);
    console.log("✅ Products seeded successfully:", sampleProducts.length);
  } catch (err) {
    console.log("❌ Seeding error:", err);
  }
}

module.exports = seedProducts;
