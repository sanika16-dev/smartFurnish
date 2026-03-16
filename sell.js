function updateTable() {
  const cost = Number(document.getElementById("costPrice").value) || 0;
  const sell = Number(document.getElementById("sellPrice").value) || 0;
  const commission = Math.round(sell * 0.10);
  const profit = sell - cost - commission;

  document.getElementById("tCost").innerText = cost;
  document.getElementById("tSell").innerText = sell;
  document.getElementById("tCommission").innerText = commission;
  document.getElementById("tProfit").innerText = profit;
}

function addProduct() {
  const seller = localStorage.getItem("currentSeller");
  const name = document.getElementById("productName").value;
  const category = document.getElementById("category").value;
  const cost = Number(document.getElementById("costPrice").value);
  const price = Number(document.getElementById("sellPrice").value);
  const imageInput = document.getElementById("imageInput");

  if (!seller || !name || !price || !imageInput.files.length) {
    alert("Fill all fields");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const product = {
      id: "user_" + Date.now(),
      seller,
      name,
      category,
      cost,
      price,
      images: [reader.result],
      features: ["User listed product"]
    };

    const list = JSON.parse(localStorage.getItem("userProducts")) || [];
    list.push(product);
    localStorage.setItem("userProducts", JSON.stringify(list));
    renderSellProducts();
  };

  reader.readAsDataURL(imageInput.files[0]);
}
function removeProduct(index) {
  let products = JSON.parse(localStorage.getItem("userProducts")) || [];
  products.splice(index, 1);
  localStorage.setItem("userProducts", JSON.stringify(products));
  renderSellProducts();
}

function renderSellProducts() {
  const grid = document.getElementById("sellGrid");
  const products = JSON.parse(localStorage.getItem("userProducts")) || [];
  const currentSeller = localStorage.getItem("currentSeller");

  grid.innerHTML = "";

  products.forEach((p, index) => {
    grid.innerHTML += `
      <div class="sell-card">
        <img src="${p.images[0]}">
        <h4>${p.name}</h4>
        <p>Seller: ${p.seller}</p>
        <p>Price: ₹${p.price}</p>

        <button onclick="location.href='product.html?id=${p.id}'">
          View Product
        </button>

        ${
          p.seller === currentSeller
            ? `<button class="remove-btn" onclick="removeProduct(${index})">
                 ❌ Remove
               </button>`
            : ""
        }
      </div>
    `;
  });
}


window.onload = renderSellProducts;
