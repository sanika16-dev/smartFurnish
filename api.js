const API_BASE = "http://localhost:5000/api";

/**********************************
 * PRODUCTS APIs
 **********************************/

// GET all products
async function fetchProducts() {
  const res = await fetch(`${API_BASE}/products`);
  return await res.json();
}

// GET single product by id (example: king1, queen2 etc.)
async function fetchProductById(id) {
  const res = await fetch(`${API_BASE}/products/${id}`);
  return await res.json();
}

// POST add product (for admin/testing CRUD)
async function addProduct(product) {
  const res = await fetch(`${API_BASE}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return await res.json();
}

// PUT update product (for admin/testing CRUD)
async function updateProduct(id, product) {
  const res = await fetch(`${API_BASE}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return await res.json();
}

// DELETE product (for admin/testing CRUD)
async function deleteProduct(id) {
  const res = await fetch(`${API_BASE}/products/${id}`, {
    method: "DELETE",
  });

  return await res.json();
}

/**********************************
 * ORDERS APIs
 **********************************/

// POST place order
async function placeOrder(order) {
  const res = await fetch(`${API_BASE}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });

  return await res.json();
}

/**********************************
 * AUTH APIs
 **********************************/

// POST Register
async function registerUser(userData) {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  return await res.json();
}

// POST Login
async function loginUser(userData) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  return await res.json();
}

// SAVE CART TO DB
async function saveCartToDB(cart) {

  const userId = localStorage.getItem("userId");
  if (!userId) {
    console.log("User not logged in → cart not saved");
    return;
  }

  try {
    const res = await fetch(`${API_BASE}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId,
        items: cart
      })
    });

    const data = await res.json();
    console.log("Cart saved response:", data);

  } catch (err) {
    console.error("Cart save error:", err);
  }
}
