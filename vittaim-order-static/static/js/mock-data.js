(function initMockData() {
  const STORAGE_KEY = "vittaim_mock_state_v1";

  const INITIAL_PRODUCTS = [
    {"id_product": 1, "name": "Apples, Red Delicious, Class I", "category": "Fruits", "unit": "kg", "stock_qty": 1800.0, "price": 2.65, "freq": 22},
    {"id_product": 2, "name": "Apples, Golden Delicious, Class I", "category": "Fruits", "unit": "kg", "stock_qty": 1200.0, "price": 2.70, "freq": 19},
    {"id_product": 3, "name": "Apples, Granny Smith, Class I", "category": "Fruits", "unit": "kg", "stock_qty": 950.0, "price": 2.95, "freq": 17},
    {"id_product": 4, "name": "Apples, Gala, Class I", "category": "Fruits", "unit": "kg", "stock_qty": 2100.0, "price": 2.80, "freq": 24},
    {"id_product": 5, "name": "Apples, Fuji, Class I", "category": "Fruits", "unit": "kg", "stock_qty": 880.0, "price": 3.10, "freq": 14},
    {"id_product": 6, "name": "Apples, Braeburn, Class I", "category": "Fruits", "unit": "kg", "stock_qty": 640.0, "price": 3.05, "freq": 11},
    {"id_product": 7, "name": "Apples, Pink Lady / Cripps Pink, Class I", "category": "Fruits", "unit": "kg", "stock_qty": 520.0, "price": 3.45, "freq": 12},
    {"id_product": 8, "name": "Apples, Jonagold, Class I", "category": "Fruits", "unit": "kg", "stock_qty": 410.0, "price": 2.90, "freq": 9},
    {"id_product": 9, "name": "Apples, Idared, processing grade", "category": "Fruits", "unit": "kg", "stock_qty": 3200.0, "price": 1.55, "freq": 16},
    {"id_product": 10, "name": "Oranges, Navel, Class I", "category": "Fruits", "unit": "kg", "stock_qty": 2400.0, "price": 2.40, "freq": 21},
    {"id_product": 11, "name": "Oranges, Valencia, juice grade", "category": "Fruits", "unit": "kg", "stock_qty": 1800.0, "price": 1.85, "freq": 13},
    {"id_product": 12, "name": "Blood oranges, Tarocco", "category": "Fruits", "unit": "kg", "stock_qty": 0.0, "price": 3.95, "freq": 4},
    {"id_product": 13, "name": "Lemons, Eureka", "category": "Fruits", "unit": "kg", "stock_qty": 690.0, "price": 2.95, "freq": 15},
    {"id_product": 14, "name": "Limes, Persian", "category": "Fruits", "unit": "kg", "stock_qty": 540.0, "price": 3.85, "freq": 10},
    {"id_product": 15, "name": "Grapefruit, Ruby Red", "category": "Fruits", "unit": "kg", "stock_qty": 760.0, "price": 2.65, "freq": 8},
    {"id_product": 16, "name": "Bananas, Cavendish, ripe", "category": "Fruits", "unit": "kg", "stock_qty": 5200.0, "price": 1.95, "freq": 25},
    {"id_product": 17, "name": "Pears, Conference, Class I", "category": "Fruits", "unit": "kg", "stock_qty": 920.0, "price": 3.55, "freq": 14},
    {"id_product": 18, "name": "Pears, Bartlett, Class I", "category": "Fruits", "unit": "kg", "stock_qty": 480.0, "price": 3.65, "freq": 7},
    {"id_product": 19, "name": "Grapes, red seedless", "category": "Fruits", "unit": "kg", "stock_qty": 840.0, "price": 4.95, "freq": 18},
    {"id_product": 20, "name": "Grapes, green seedless", "category": "Fruits", "unit": "kg", "stock_qty": 710.0, "price": 4.85, "freq": 12},
    {"id_product": 21, "name": "Strawberries, tray", "category": "Fruits", "unit": "crt", "stock_qty": 280.0, "price": 8.75, "freq": 20},
    {"id_product": 22, "name": "Blueberries, clam shell (125 g)", "category": "Fruits", "unit": "pcs", "stock_qty": 9500.0, "price": 2.10, "freq": 11},
    {"id_product": 23, "name": "Cherries, sweet, Class I", "category": "Fruits", "unit": "kg", "stock_qty": 390.0, "price": 9.90, "freq": 6},
    {"id_product": 24, "name": "Plums, Stanley", "category": "Fruits", "unit": "kg", "stock_qty": 560.0, "price": 3.75, "freq": 8},
    {"id_product": 25, "name": "Peaches, yellow flesh, Class I", "category": "Fruits", "unit": "kg", "stock_qty": 620.0, "price": 4.65, "freq": 9},
    {"id_product": 26, "name": "Kiwi, Hayward", "category": "Fruits", "unit": "kg", "stock_qty": 440.0, "price": 4.05, "freq": 10},
    {"id_product": 27, "name": "Melon, watermelon, wholesale bin", "category": "Fruits", "unit": "pcs", "stock_qty": 180.0, "price": 12.90, "freq": 13},
    {"id_product": 101, "name": "Tomatoes, round, salad vine", "category": "Vegetables", "unit": "kg", "stock_qty": 4200.0, "price": 2.15, "freq": 23},
    {"id_product": 102, "name": "Tomatoes, Roma / plum", "category": "Vegetables", "unit": "kg", "stock_qty": 2900.0, "price": 2.35, "freq": 20},
    {"id_product": 103, "name": "Tomatoes, cherry, mixed punnet", "category": "Vegetables", "unit": "crt", "stock_qty": 640.0, "price": 6.95, "freq": 19},
    {"id_product": 104, "name": "Tomatoes, heirloom mix", "category": "Vegetables", "unit": "kg", "stock_qty": 420.0, "price": 4.95, "freq": 11},
    {"id_product": 105, "name": "Cucumbers, long, greenhouse", "category": "Vegetables", "unit": "kg", "stock_qty": 3100.0, "price": 2.45, "freq": 21},
    {"id_product": 106, "name": "Cucumbers, pickling / gherkin", "category": "Vegetables", "unit": "kg", "stock_qty": 880.0, "price": 2.95, "freq": 12},
    {"id_product": 107, "name": "Bell pepper, green", "category": "Vegetables", "unit": "kg", "stock_qty": 1550.0, "price": 3.85, "freq": 17},
    {"id_product": 108, "name": "Bell pepper, red", "category": "Vegetables", "unit": "kg", "stock_qty": 1180.0, "price": 4.45, "freq": 18},
    {"id_product": 109, "name": "Bell pepper, yellow", "category": "Vegetables", "unit": "kg", "stock_qty": 920.0, "price": 4.65, "freq": 15},
    {"id_product": 110, "name": "Chili peppers, mild mix", "category": "Vegetables", "unit": "kg", "stock_qty": 260.0, "price": 5.95, "freq": 8},
    {"id_product": 111, "name": "Eggplant / aubergine", "category": "Vegetables", "unit": "kg", "stock_qty": 740.0, "price": 3.25, "freq": 13},
    {"id_product": 112, "name": "Zucchini / courgette", "category": "Vegetables", "unit": "kg", "stock_qty": 1680.0, "price": 2.25, "freq": 16},
    {"id_product": 113, "name": "Broccoli crowns", "category": "Vegetables", "unit": "kg", "stock_qty": 890.0, "price": 3.95, "freq": 14},
    {"id_product": 114, "name": "Cauliflower, Class I", "category": "Vegetables", "unit": "kg", "stock_qty": 670.0, "price": 3.85, "freq": 13},
    {"id_product": 115, "name": "Cabbage, white", "category": "Vegetables", "unit": "kg", "stock_qty": 2400.0, "price": 1.05, "freq": 15},
    {"id_product": 116, "name": "Cabbage, red", "category": "Vegetables", "unit": "kg", "stock_qty": 920.0, "price": 1.65, "freq": 9},
    {"id_product": 117, "name": "Lettuce, iceberg, wholesale box", "category": "Vegetables", "unit": "crt", "stock_qty": 420.0, "price": 14.95, "freq": 16},
    {"id_product": 118, "name": "Lettuce, Romaine, wholesale box", "category": "Vegetables", "unit": "crt", "stock_qty": 390.0, "price": 15.95, "freq": 14},
    {"id_product": 119, "name": "Spinach, washed, bulk sack", "category": "Vegetables", "unit": "kg", "stock_qty": 780.0, "price": 3.95, "freq": 12},
    {"id_product": 120, "name": "Rocket / arugula, bulk", "category": "Vegetables", "unit": "kg", "stock_qty": 320.0, "price": 6.25, "freq": 11},
    {"id_product": 121, "name": "Celery, stalks wholesale", "category": "Vegetables", "unit": "crt", "stock_qty": 260.0, "price": 11.95, "freq": 10},
    {"id_product": 122, "name": "Onions, yellow, bulk", "category": "Vegetables", "unit": "kg", "stock_qty": 7600.0, "price": 0.85, "freq": 22},
    {"id_product": 123, "name": "Onions, red", "category": "Vegetables", "unit": "kg", "stock_qty": 2100.0, "price": 1.15, "freq": 18},
    {"id_product": 124, "name": "Shallots, bulk", "category": "Vegetables", "unit": "kg", "stock_qty": 680.0, "price": 2.95, "freq": 12},
    {"id_product": 125, "name": "Garlic, peeled bulk", "category": "Vegetables", "unit": "kg", "stock_qty": 440.0, "price": 5.90, "freq": 17},
    {"id_product": 126, "name": "Potatoes, russet, washing grade", "category": "Vegetables", "unit": "kg", "stock_qty": 9800.0, "price": 0.75, "freq": 20},
    {"id_product": 127, "name": "Potatoes, baby new", "category": "Vegetables", "unit": "kg", "stock_qty": 1540.0, "price": 1.25, "freq": 15},
    {"id_product": 128, "name": "Carrots, washed, bulk", "category": "Vegetables", "unit": "kg", "stock_qty": 6200.0, "price": 0.95, "freq": 19},
    {"id_product": 129, "name": "Beetroot / beets, trimmed", "category": "Vegetables", "unit": "kg", "stock_qty": 1120.0, "price": 1.45, "freq": 14},
    {"id_product": 130, "name": "Mushrooms, white button bulk", "category": "Vegetables", "unit": "kg", "stock_qty": 860.0, "price": 4.95, "freq": 17},
  ];

  const AUTH_BY_TOKEN = {
    LOCAL_DEV_CLIENT: { login: "client", role: "client", name: "Client Demo" },
    LOCAL_DEV_MANAGER: { login: "manager", role: "manager", name: "Manager Demo" },
  };

  function cloneProducts() {
    return INITIAL_PRODUCTS.map((p) => ({ ...p }));
  }

  function defaultState() {
    const today = new Date().toISOString().slice(0, 10);
    return {
      orderSeq: 1002,
      products: cloneProducts(),
      orders: [
        {
          id_order: 1001,
          client_name: "Client Demo",
          client_login: "client",
          date_created: today,
          date_delivery: today,
          status: "accepted",
          total: 542.5,
          comment: "Standing weekly delivery",
          lines: [
            { name: "Apples, Gala, Class I", quantity: 120, unit: "kg", price_fixed: 2.8, line_total: 336 },
            { name: "Tomatoes, round, salad vine", quantity: 80, unit: "kg", price_fixed: 2.15, line_total: 172 },
            { name: "Carrots, washed, bulk", quantity: 45, unit: "kg", price_fixed: 0.95, line_total: 42.75 },
          ],
        },
      ],
    };
  }

  function loadState() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      return JSON.parse(raw);
    } catch (error) {
      return defaultState();
    }
  }

  function saveState(state) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  let state = loadState();

  function findProduct(id) {
    return state.products.find((p) => Number(p.id_product) === Number(id));
  }

  function lineTotal(lines) {
    let total = 0;
    lines.forEach((line) => {
      const p = findProduct(line.id_product);
      if (p) total += Number(line.quantity) * Number(p.price);
    });
    return Math.round(total * 100) / 100;
  }

  function resolveAuth(token) {
    if (!token) return null;
    return AUTH_BY_TOKEN[token] || null;
  }

  function requireAuth(token, role) {
    const auth = resolveAuth(token);
    if (!auth) {
      const err = new Error("Unauthorized");
      err.status = 401;
      throw err;
    }
    if (role && auth.role !== role) {
      const err = new Error("Forbidden");
      err.status = 403;
      throw err;
    }
    return auth;
  }

  window.MockStore = {
    handle(method, path, body, token) {
      if (method === "POST" && path === "/api/logout") {
        return { ok: true };
      }

      if (method === "GET" && path === "/api/products") {
        requireAuth(token);
        const sorted = [...state.products].sort(
          (a, b) => -Number(a.freq) + Number(b.freq) || a.name.localeCompare(b.name)
        );
        return sorted;
      }

      if (method === "GET" && path === "/api/orders") {
        const auth = requireAuth(token);
        return state.orders
          .filter((o) => auth.role === "manager" || o.client_login === auth.login)
          .map((o) => ({
            id_order: o.id_order,
            date_created: o.date_created,
            date_delivery: o.date_delivery,
            status: o.status,
            total: o.total,
          }));
      }

      const orderMatch = path.match(/^\/api\/orders\/(\d+)$/);
      if (method === "GET" && orderMatch) {
        const auth = requireAuth(token);
        const id = Number(orderMatch[1]);
        const order = state.orders.find((o) => Number(o.id_order) === id);
        if (!order) {
          const err = new Error("Order not found");
          err.status = 404;
          throw err;
        }
        if (auth.role !== "manager" && order.client_login !== auth.login) {
          const err = new Error("Forbidden");
          err.status = 403;
          throw err;
        }
        return order;
      }

      if (method === "POST" && path === "/api/orders") {
        const auth = requireAuth(token, "client");
        const lines = body?.lines || [];
        const dateDelivery = body?.date_delivery;
        const comment = String(body?.comment || "").slice(0, 500);
        const deficitLines = [];

        lines.forEach((line) => {
          const pid = Number(line.id_product);
          const qty = Number(line.quantity);
          const p = findProduct(pid);
          if (!p) return;
          if (qty > Number(p.stock_qty)) {
            deficitLines.push({
              id_product: pid,
              name: p.name,
              requested: qty,
              available: p.stock_qty,
              alternatives: state.products
                .filter(
                  (alt) =>
                    alt.category === p.category &&
                    Number(alt.id_product) !== pid &&
                    Number(alt.stock_qty) > 0
                )
                .map((alt) => ({
                  id_product: alt.id_product,
                  name: alt.name,
                  stock_qty: alt.stock_qty,
                  price: alt.price,
                })),
            });
          }
        });

        if (deficitLines.length) {
          return { status: "deficit", deficit_lines: deficitLines };
        }

        lines.forEach((line) => {
          const p = findProduct(line.id_product);
          if (p) {
            p.stock_qty = Math.max(0, Math.round((Number(p.stock_qty) - Number(line.quantity)) * 100) / 100);
          }
        });

        state.orderSeq += 1;
        const now = new Date().toISOString().slice(0, 10);
        const fullLines = lines
          .map((line) => {
            const p = findProduct(line.id_product);
            if (!p) return null;
            const qty = Number(line.quantity);
            return {
              name: p.name,
              quantity: qty,
              unit: p.unit,
              price_fixed: p.price,
              line_total: Math.round(qty * Number(p.price) * 100) / 100,
            };
          })
          .filter(Boolean);

        const order = {
          id_order: state.orderSeq,
          client_name: auth.name,
          client_login: auth.login,
          date_created: now,
          date_delivery: dateDelivery,
          status: "confirmed",
          total: lineTotal(lines),
          comment,
          lines: fullLines,
        };
        state.orders.push(order);
        saveState(state);
        return { status: "confirmed", id_order: state.orderSeq, date_delivery: dateDelivery };
      }

      if (method === "GET" && path === "/api/manager/orders") {
        requireAuth(token, "manager");
        return state.orders.map((o) => ({
          id_order: o.id_order,
          client_name: o.client_name,
          date_created: o.date_created,
          date_delivery: o.date_delivery,
          status: o.status,
          total: o.total,
        }));
      }

      const statusMatch = path.match(/^\/api\/manager\/orders\/(\d+)\/status$/);
      if (method === "PATCH" && statusMatch) {
        requireAuth(token, "manager");
        const id = Number(statusMatch[1]);
        const status = body?.status;
        if (!["confirmed", "dispatched"].includes(status)) {
          const err = new Error("Unsupported status");
          err.status = 400;
          throw err;
        }
        const order = state.orders.find((o) => Number(o.id_order) === id);
        if (!order) {
          const err = new Error("Order not found");
          err.status = 404;
          throw err;
        }
        order.status = status;
        saveState(state);
        return { ok: true, status };
      }

      const err = new Error("Not found");
      err.status = 404;
      throw err;
    },
  };
})();
