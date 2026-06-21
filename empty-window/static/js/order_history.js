(function initOrderHistory() {
  const body = document.getElementById("ordersBody");
  const expandedRows = new Set();

  function statusBadge(status) {
    const klass = `badge badge-${status || ""}`;
    return `<span class="${klass}">${status || ""}</span>`;
  }

  function renderLinesRow(orderId, lines) {
    const tr = document.createElement("tr");
    tr.dataset.detailsFor = orderId;
    const td = document.createElement("td");
    td.colSpan = 5;
    td.innerHTML = lines.length
      ? `<div class="table-wrap"><table>
          <thead><tr><th>Name</th><th>Qty</th><th>Unit</th><th>Price</th><th>Line total</th></tr></thead>
          <tbody>${lines.map((line) => `
            <tr>
              <td>${line.name}</td>
              <td>${Number(line.quantity).toFixed(2)}</td>
              <td>${line.unit}</td>
              <td>${formatMoney(line.price_fixed)}</td>
              <td>${formatMoney(line.line_total)}</td>
            </tr>
          `).join("")}</tbody>
        </table></div>`
      : "No lines";
    tr.appendChild(td);
    return tr;
  }

  async function toggleDetails(orderId, hostRow) {
    if (expandedRows.has(orderId)) {
      const details = body.querySelector(`tr[data-details-for="${orderId}"]`);
      if (details) details.remove();
      expandedRows.delete(orderId);
      return;
    }

    const order = await apiGet(`/api/orders/${orderId}`);
    const detailsRow = renderLinesRow(orderId, order.lines || []);
    hostRow.insertAdjacentElement("afterend", detailsRow);
    expandedRows.add(orderId);
  }

  async function loadOrders() {
    const orders = await apiGet("/api/orders");
    body.innerHTML = "";

    orders.forEach((order) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${order.id_order}</td>
        <td>${order.date_created}</td>
        <td>${order.date_delivery}</td>
        <td>${statusBadge(order.status)}</td>
        <td>${formatMoney(order.total)}</td>
      `;
      tr.addEventListener("click", () => {
        toggleDetails(order.id_order, tr).catch(() => {
          alert("Cannot load order details.");
        });
      });
      body.appendChild(tr);
    });
  }

  loadOrders().catch(() => {
    body.innerHTML = `<tr><td colspan="5">Failed to load orders.</td></tr>`;
  });
})();
