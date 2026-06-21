(function initOrderForm() {
  const productListEl = document.getElementById("productList");
  const frequentListEl = document.getElementById("frequentList");
  const cartItemsEl = document.getElementById("cartItems");
  const cartTotalEl = document.getElementById("cartTotal");
  const orderForm = document.getElementById("orderForm");
  const clearBtn = document.getElementById("clearBtn");
  const orderMessage = document.getElementById("orderMessage");
  const deliveryDateInput = document.getElementById("deliveryDate");
  const commentInput = document.getElementById("comment");
  const deficitModal = document.getElementById("deficitModal");
  const deficitBody = document.getElementById("deficitBody");
  const resubmitBtn = document.getElementById("resubmitBtn");
  const cancelDeficitBtn = document.getElementById("cancelDeficitBtn");

  let products = [];
  const productsById = new Map();
  const quantities = new Map();
  let pendingDeficit = null;

  function tomorrowDateISO() {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().slice(0, 10);
  }

  function showMessage(type, text) {
    orderMessage.className = `message message--${type}`;
    orderMessage.textContent = text;
    orderMessage.style.display = "block";
  }

  function clearMessage() {
    orderMessage.style.display = "none";
    orderMessage.textContent = "";
    orderMessage.className = "";
  }

  function getQuantity(idProduct) {
    return Number(quantities.get(idProduct) || 0);
  }

  function setQuantity(idProduct, value) {
    quantities.set(idProduct, Number(value) || 0);
  }

  function renderProductRow(product, isFrequent) {
    const row = document.createElement("div");
    row.className = `product-row ${isFrequent ? "product-row--freq" : ""} ${product.stock_qty <= 0 ? "product-row--disabled" : ""}`.trim();

    const qty = getQuantity(product.id_product);
    const isTooMuch = qty > Number(product.stock_qty);
    const qtyHint = isTooMuch ? `<div class="hint-error">Only ${Number(product.stock_qty).toFixed(2)} available</div>` : "";

    row.innerHTML = `
      <div><strong>${product.name}</strong></div>
      <div>${product.category || "-"}</div>
      <div>${product.unit}</div>
      <div>${Number(product.stock_qty).toFixed(2)}</div>
      <div>${formatMoney(product.price)}</div>
      <div>
        <input
          class="qty-input ${isTooMuch ? "invalid" : ""}"
          data-product-id="${product.id_product}"
          type="number"
          min="0"
          step="0.01"
          value="${qty > 0 ? qty : ""}"
          ${product.stock_qty <= 0 ? "disabled" : ""}
          title="${isTooMuch ? `Only ${Number(product.stock_qty).toFixed(2)} available` : ""}"
        >
        ${qtyHint}
      </div>
    `;
    return row;
  }

  function renderProducts() {
    const frequent = products.filter((p) => Number(p.freq) > 0).slice(0, 5);
    const nonFrequent = products.filter((p) => !frequent.some((f) => f.id_product === p.id_product));
    frequentListEl.innerHTML = "";
    productListEl.innerHTML = "";

    frequent.forEach((p) => frequentListEl.appendChild(renderProductRow(p, true)));
    nonFrequent.forEach((p) => productListEl.appendChild(renderProductRow(p, false)));
  }

  function cartLines() {
    return products
      .map((product) => ({
        product,
        quantity: getQuantity(product.id_product)
      }))
      .filter((item) => item.quantity > 0);
  }

  function renderCart() {
    const lines = cartLines();
    if (!lines.length) {
      cartItemsEl.innerHTML = `<div class="cart-row"><div>Cart is empty</div><div></div><div></div><div></div></div>`;
      cartTotalEl.textContent = "0.00 BYN";
      return;
    }

    let total = 0;
    cartItemsEl.innerHTML = lines.map(({ product, quantity }) => {
      const lineTotal = Number(quantity) * Number(product.price);
      total += lineTotal;
      return `
        <div class="cart-row">
          <div>${product.name}</div>
          <div>${Number(quantity).toFixed(2)}</div>
          <div>${product.unit}</div>
          <div>${formatMoney(lineTotal)}</div>
        </div>
      `;
    }).join("");

    cartTotalEl.textContent = formatMoney(total);
  }

  function syncAllQtyInputs() {
    document.querySelectorAll(".qty-input").forEach((input) => {
      const id = Number(input.dataset.productId);
      const product = productsById.get(id);
      const qty = getQuantity(id);
      const tooMuch = qty > Number(product.stock_qty);
      input.value = qty > 0 ? qty : "";
      input.classList.toggle("invalid", tooMuch);
      input.title = tooMuch ? `Only ${Number(product.stock_qty).toFixed(2)} available` : "";
      const hint = input.parentElement.querySelector(".hint-error");
      if (tooMuch && !hint) {
        const h = document.createElement("div");
        h.className = "hint-error";
        h.textContent = `Only ${Number(product.stock_qty).toFixed(2)} available`;
        input.parentElement.appendChild(h);
      }
      if (!tooMuch && hint) {
        hint.remove();
      }
    });
  }

  function hasStockErrors() {
    return cartLines().some(({ product, quantity }) => Number(quantity) > Number(product.stock_qty));
  }

  function getOrderPayload() {
    return {
      date_delivery: deliveryDateInput.value,
      comment: (commentInput.value || "").trim(),
      lines: cartLines().map(({ product, quantity }) => ({
        id_product: product.id_product,
        quantity: Number(quantity)
      }))
    };
  }

  async function submitOrder() {
    clearMessage();
    if (!deliveryDateInput.value) {
      showMessage("error", "Delivery date is required.");
      return;
    }

    const lines = cartLines();
    if (!lines.length) {
      showMessage("warning", "Cart is empty.");
      return;
    }

    if (hasStockErrors()) {
      showMessage("error", "Some quantities exceed stock.");
      return;
    }

    const response = await apiPost("/api/orders", getOrderPayload());

    if (response.status === "confirmed") {
      showMessage("success", `Order #${response.id_order} confirmed for ${response.date_delivery}.`);
      clearQuantities();
      renderCart();
      syncAllQtyInputs();
      return;
    }

    if (response.status === "deficit") {
      openDeficitModal(response.deficit_lines || []);
      return;
    }
  }

  function clearQuantities() {
    products.forEach((p) => setQuantity(p.id_product, 0));
  }

  function openDeficitModal(deficitLines) {
    pendingDeficit = deficitLines;
    deficitBody.innerHTML = "";

    deficitLines.forEach((line, idx) => {
      const tr = document.createElement("tr");
      const alternatives = line.alternatives || [];
      tr.innerHTML = `
        <td>${line.name}</td>
        <td>${Number(line.requested).toFixed(2)}</td>
        <td>${Number(line.available).toFixed(2)}</td>
        <td>
          <select data-deficit-index="${idx}">
            <option value="remove">Remove this line</option>
            ${alternatives.map((alt) => `<option value="${alt.id_product}">${alt.name} (${Number(alt.stock_qty).toFixed(2)} ${productsById.get(alt.id_product)?.unit || ""})</option>`).join("")}
          </select>
        </td>
      `;
      deficitBody.appendChild(tr);
    });

    deficitModal.classList.add("active");
    deficitModal.setAttribute("aria-hidden", "false");
  }

  function closeDeficitModal() {
    deficitModal.classList.remove("active");
    deficitModal.setAttribute("aria-hidden", "true");
  }

  function applyDeficitChoices() {
    // Reset items that were in deficit before applying chosen replacements.
    pendingDeficit.forEach((line) => setQuantity(line.id_product, 0));

    const selectors = deficitBody.querySelectorAll("select[data-deficit-index]");
    selectors.forEach((selectEl) => {
      const idx = Number(selectEl.dataset.deficitIndex);
      const line = pendingDeficit[idx];
      const choice = selectEl.value;
      if (!line) return;

      if (choice !== "remove") {
        const altId = Number(choice);
        const alt = (line.alternatives || []).find((a) => Number(a.id_product) === altId);
        if (alt) {
          // Keep requested quantity, capped by alternative stock to avoid immediate repeat deficit.
          const qty = Math.min(Number(line.requested), Number(alt.stock_qty));
          setQuantity(altId, qty);
        }
      }
    });
  }

  async function loadProducts() {
    products = await apiGet("/api/products");
    productsById.clear();
    products.forEach((p) => {
      productsById.set(Number(p.id_product), p);
      if (!quantities.has(Number(p.id_product))) {
        setQuantity(Number(p.id_product), 0);
      }
    });
    renderProducts();
    renderCart();
  }

  document.addEventListener("input", (event) => {
    const target = event.target;
    if (!target.classList.contains("qty-input")) return;

    const id = Number(target.dataset.productId);
    const nextValue = Number(target.value || 0);
    setQuantity(id, nextValue);
    syncAllQtyInputs();
    renderCart();
  });

  orderForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitOrder().catch((error) => {
      showMessage("error", error.message || "Failed to submit order.");
    });
  });

  clearBtn.addEventListener("click", () => {
    clearQuantities();
    commentInput.value = "";
    clearMessage();
    renderCart();
    syncAllQtyInputs();
  });

  cancelDeficitBtn.addEventListener("click", () => {
    closeDeficitModal();
    clearQuantities();
    commentInput.value = "";
    renderCart();
    syncAllQtyInputs();
  });

  resubmitBtn.addEventListener("click", () => {
    if (!pendingDeficit) return;
    applyDeficitChoices();
    closeDeficitModal();
    renderCart();
    syncAllQtyInputs();
    submitOrder().catch((error) => {
      showMessage("error", error.message || "Failed to resubmit order.");
    });
  });

  deliveryDateInput.min = tomorrowDateISO();

  loadProducts().catch((error) => {
    showMessage("error", "Failed to load products.");
    productListEl.innerHTML = "";
    frequentListEl.innerHTML = "";
  });
})();
