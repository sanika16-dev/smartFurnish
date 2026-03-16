/***********************
 * LOAD PRODUCTS FROM MONGODB
 ***********************/
let productData = {};

async function loadProductsFromDB() {
  try {
    const products = await fetchProducts();

    if (!Array.isArray(products)) {
      console.error("❌ Products API did not return array:", products);
      return;
    }

    productData = {};

    products.forEach((p) => {
      productData[p.productId] = {
        name: p.name,
        price: "₹" + Number(p.price).toLocaleString("en-IN"),
        desc: p.desc,
        images: p.images || [],
        features: p.features || []
      };
    });

    console.log("✅ Products loaded:", productData);
  } catch (err) {
    console.error("❌ Failed to load products:", err);
  }
}

/***********************
 * CART
 ***********************/
let qty = 1;

function changeQty(val) {
  qty = Math.max(1, qty + val);
  const el = document.getElementById("qty");
  if (el) el.innerText = qty;
}

function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id,
      name: productData[id].name,
      price: productData[id].price,
      image: productData[id].images[0],
      qty
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
  saveCartToDB(cart);

}

/***********************
 * LOGIN CHECK → BUY NOW
 ***********************/
function buyNow() {
  const userId = localStorage.getItem("userId");

  if (!userId) {
    alert("Please login or register first");
    window.location.href = "login.html?redirect=payment";
    return;
  }

  window.location.href = "payment.html";
}

/***********************
 * PRODUCT PAGE
 ***********************/
document.addEventListener("DOMContentLoaded", async () => {

  await loadProductsFromDB();

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

let product = null;

// 1️⃣ Check in default DB products (Buy section)
if (productId && productData[productId]) {
  product = productData[productId];
}

// 2️⃣ If not found → check user listed products (Sell section)
if (!product) {
  const userProducts = JSON.parse(localStorage.getItem("userProducts")) || [];
  product = userProducts.find(p => p.id === productId);
}

// 3️⃣ Final check
if (!product) {
  console.error("❌ Product not found:", productId);
  return;
}


  // TEXT
  document.getElementById("productName").innerText = product.name;
  document.getElementById("productPrice").innerText = product.price;
  document.getElementById("productDesc").innerText = product.desc;

  // FEATURES
  const featureList = document.getElementById("featureList");
  featureList.innerHTML = "";
  product.features.forEach(f => {
    const li = document.createElement("li");
    li.innerText = f;
    featureList.appendChild(li);
  });

  // IMAGES
  const mainImage = document.getElementById("mainImage");
  const thumbs = document.getElementById("thumbnailContainer");

  if (product.images.length > 0) {
    mainImage.src = product.images[0];
  }

  thumbs.innerHTML = "";

  product.images.forEach(img => {
    const t = document.createElement("img");
    t.src = img;
    t.onclick = () => mainImage.src = img;
    thumbs.appendChild(t);
  });

  document.getElementById("addToCartBtn").onclick = () => {
    addToCart(productId);
  };
});

/***********************
 * CART PAGE
 ***********************/
document.addEventListener("DOMContentLoaded", () => {

  const cartItemsDiv = document.getElementById("cartItems");
  const totalAmountEl = document.getElementById("totalAmount");

  if (!cartItemsDiv) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  cartItemsDiv.innerHTML = "";

  cart.forEach((item, index) => {
    const price = Number(item.price.replace("₹", "").replaceAll(",", ""));
    total += price * item.qty;

    cartItemsDiv.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}">
        <div class="cart-info">
          <h4>${item.name}</h4>
          <div class="cart-price">₹${price}</div>
        </div>
        <div class="cart-actions">
          <button onclick="updateCartQty(${index}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="updateCartQty(${index}, 1)">+</button>
          <button onclick="removeFromCart(${index})">❌</button>
        </div>
      </div>
    `;
  });

  totalAmountEl.innerText = total;
});

async function removeFromCart(index) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Remove item locally
  cart.splice(index, 1);

  // Save updated cart locally
  localStorage.setItem("cart", JSON.stringify(cart));

  // 🔹 Update MongoDB also
  try {
    await fetch("http://localhost:5000/api/cart/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: user._id,
        items: cart
      })
    });
  } catch (err) {
    console.error("Cart update failed:", err);
  }

  location.reload();
}

function updateCartQty(index, change) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (!cart[index]) return;

  cart[index].qty += change;
  if (cart[index].qty < 1) cart[index].qty = 1;

  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

/***********************
 * CART → PAYMENT LOGIN CHECK
 ***********************/
function goToPayment() {
  const userId = localStorage.getItem("userId");

  if (!userId) {
    alert("Please login or register first");
    window.location.href = "login.html?redirect=payment";
    return;
  }

  const total = document.getElementById("totalAmount").innerText;
  localStorage.setItem("totalAmount", "₹" + total);

  window.location.href = "payment.html";
}
