document.addEventListener("DOMContentLoaded", () => {
  hideAll();
  document.getElementById("successModal").classList.add("hidden");

  const total = localStorage.getItem("totalAmount");
  if (total) {
    document.getElementById("payAmount").innerText = total;
  }
});

function showCard() {
  hideAll();
  document.getElementById("cardForm").classList.remove("hidden");
}

function showUPI() {
  hideAll();
  document.getElementById("upiForm").classList.remove("hidden");
}

function hideAll() {
  document.getElementById("cardForm").classList.add("hidden");
  document.getElementById("upiForm").classList.add("hidden");
}

function validateAddress() {
  const fields = ["fullName", "mobile", "address", "city", "pincode", "state"];

  for (let id of fields) {
    if (!document.getElementById(id).value.trim()) {
      alert("Please fill complete address before payment");
      return false;
    }
  }

  const addressData = {
    name: fullName.value,
    mobile: mobile.value,
    address: address.value,
    city: city.value,
    pincode: pincode.value,
    state: state.value
  };

  localStorage.setItem("shippingAddress", JSON.stringify(addressData));
  return true;
}

async function processPayment(method) {
  if (!validateAddress()) return;

  await saveOrder(method);   // ⬅ SEND ORDER TO BACKEND
  showSuccess();
}


async function cashOnDelivery() {
  if (!validateAddress()) return;

  await saveOrder("cod");   // ⬅ SEND ORDER TO BACKEND
  showSuccess();
}


function showSuccess() {
  document.getElementById("successModal").classList.remove("hidden");

  if (localStorage.getItem("checkoutType") === "cart") {
    localStorage.removeItem("cart");
  }

  localStorage.removeItem("checkoutType");
  localStorage.removeItem("totalAmount");
}

function goHome() {
  window.location.href = "index.html";
}
async function saveOrder(paymentMethod) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const address = JSON.parse(localStorage.getItem("shippingAddress"));
const totalRaw = localStorage.getItem("totalAmount") || "0";
const total = Number(totalRaw.replace("₹", "").replace(",", ""));

  const orderData = {
    items: cart.map(item => ({
      productId: item.id,
      name: item.name,
      price: Number(item.price.replace("₹", "").replace(",", "")),
      qty: item.qty,
      image: item.image
    })),
    totalAmount: total,
    shippingAddress: address,
    paymentMethod: paymentMethod
  };

  const res = await fetch("http://localhost:5000/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData)
  });

  return await res.json();
}
