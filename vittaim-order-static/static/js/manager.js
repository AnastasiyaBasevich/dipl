(function initManagerDashboard() {
  const body = document.getElementById("managerOrdersBody");
  const statusFilterEl = document.getElementById("statusFilter");
  const fromDateEl = document.getElementById("fromDate");
  const toDateEl = document.getElementById("toDate");

  let allOrders = [];

  function statusBadge(status) {
    return `<span class="badge badge-${status}">${status}</span>`;
  }

  function inDateRange(orderDate, fromDate, toDate) {
    if (fromDate && orderDate < fromDate) return false;
    if (toDate && orderDate > toDate) return false;
    return true;
  }

  function filteredOrders() {
    const wantedStatus = statusFilterEl.value;
    const fromDate = fromDateEl.value;
    const toDate = toDateEl.value;

    return allOrders.filter((order) => {
      const statusOk = wantedStatus === "all" || order.status === wantedStatus;
      const dateOk = inDateRange(order.date_created, fromDate, toDate);
      return statusOk && dateOk;
    });
  }

  function renderRows() {
    const rows = filteredOrders();
    body.innerHTML = rows.map((order) => `
      <tr data-order-id="${order.id_order}">
        <td>${order.id_order}</td>
        <td>${order.client_name}</td>
        <td>${order.date_created}</td>
        <td>${order.date_delivery}</td>
        <td>${statusBadge(order.status)}</td>
        <td>${formatMoney(order.total)}</td>
        <td>
          <div class="row">
            <select class="status-select">
              <option value="confirmed" ${order.status === "confirmed" ? "selected" : ""}>confirmed</option>
              <option value="dispatched" ${order.status === "dispatched" ? "selected" : ""}>dispatched</option>
            </select>
            <button class="btn btn-secondary save-status-btn" type="button">Save</button>
          </div>
        </td>
      </tr>
    `).join("");
  }

  async function saveStatus(orderId, status) {
    await apiPatch(`/api/manager/orders/${orderId}/status`, { status });
    allOrders = allOrders.map((order) => (
      Number(order.id_order) === Number(orderId) ? { ...order, status } : order
    ));
    renderRows();
  }

  async function loadOrders() {
    allOrders = await apiGet("/api/manager/orders");
    renderRows();
  }

  [statusFilterEl, fromDateEl, toDateEl].forEach((el) => {
    el.addEventListener("input", renderRows);
  });

  body.addEventListener("click", (event) => {
    const btn = event.target.closest(".save-status-btn");
    if (!btn) return;
    const row = btn.closest("tr");
    const select = row.querySelector(".status-select");
    const idOrder = row.dataset.orderId;
    saveStatus(idOrder, select.value).catch((error) => {
      alert(error.message || "Failed to update status.");
    });
  });

  loadOrders().catch(() => {
    body.innerHTML = `<tr><td colspan="7">Failed to load manager orders.</td></tr>`;
  });
})();
