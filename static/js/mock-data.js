(function initMockData() {
  const STORAGE_KEY = "vittaim_mock_state_v2";

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

  function daysAgo(n) {
    const d = new Date();
    d.setDate(d.getDate() - n);
    return d.toISOString().slice(0, 10);
  }

  function daysAhead(n) {
    const d = new Date();
    d.setDate(d.getDate() + n);
    return d.toISOString().slice(0, 10);
  }

  function defaultState() {
    return {
      orderSeq: 1015,
      products: cloneProducts(),
      orders: [
        {
          id_order: 1001,
          client_name: "FreshMart LLC",
          client_login: "freshmart",
          date_created: daysAgo(14),
          date_delivery: daysAgo(12),
          status: "dispatched",
          total: 1842.5,
          comment: "Weekly produce restock",
          is_demo: true,
          lines: [
            { name: "Apples, Gala, Class I", quantity: 200, unit: "kg", price_fixed: 2.8, line_total: 560 },
            { name: "Bananas, Cavendish, ripe", quantity: 150, unit: "kg", price_fixed: 1.95, line_total: 292.5 },
            { name: "Tomatoes, round, salad vine", quantity: 120, unit: "kg", price_fixed: 2.15, line_total: 258 },
            { name: "Cucumbers, long, greenhouse", quantity: 90, unit: "kg", price_fixed: 2.45, line_total: 220.5 },
            { name: "Potatoes, russet, washing grade", quantity: 300, unit: "kg", price_fixed: 0.75, line_total: 225 },
            { name: "Onions, yellow, bulk", quantity: 180, unit: "kg", price_fixed: 0.85, line_total: 153 },
          ],
        },
        {
          id_order: 1002,
          client_name: "Green Basket",
          client_login: "greenbasket",
          date_created: daysAgo(12),
          date_delivery: daysAgo(10),
          status: "confirmed",
          total: 967.35,
          comment: "Salad bar replenishment",
          is_demo: true,
          lines: [
            { name: "Lettuce, Romaine, wholesale box", quantity: 18, unit: "crt", price_fixed: 15.95, line_total: 287.1 },
            { name: "Bell pepper, red", quantity: 45, unit: "kg", price_fixed: 4.45, line_total: 200.25 },
            { name: "Carrots, washed, bulk", quantity: 80, unit: "kg", price_fixed: 0.95, line_total: 76 },
            { name: "Broccoli crowns", quantity: 55, unit: "kg", price_fixed: 3.95, line_total: 217.25 },
            { name: "Strawberries, tray", quantity: 20, unit: "crt", price_fixed: 8.75, line_total: 175 },
          ],
        },
        {
          id_order: 1003,
          client_name: "City Foods",
          client_login: "cityfoods",
          date_created: daysAgo(11),
          date_delivery: daysAgo(9),
          status: "accepted",
          total: 1245.0,
          comment: "Store opening delivery",
          is_demo: true,
          lines: [
            { name: "Apples, Red Delicious, Class I", quantity: 100, unit: "kg", price_fixed: 2.65, line_total: 265 },
            { name: "Oranges, Navel, Class I", quantity: 120, unit: "kg", price_fixed: 2.4, line_total: 288 },
            { name: "Grapes, red seedless", quantity: 40, unit: "kg", price_fixed: 4.95, line_total: 198 },
            { name: "Tomatoes, cherry, mixed punnet", quantity: 35, unit: "crt", price_fixed: 6.95, line_total: 243.25 },
            { name: "Mushrooms, white button bulk", quantity: 50, unit: "kg", price_fixed: 4.95, line_total: 247.5 },
          ],
        },
        {
          id_order: 1004,
          client_name: "FreshMart LLC",
          client_login: "freshmart",
          date_created: daysAgo(9),
          date_delivery: daysAgo(7),
          status: "deficit",
          total: 612.0,
          comment: "Urgent top-up — partial stock",
          is_demo: true,
          lines: [
            { name: "Blood oranges, Tarocco", quantity: 60, unit: "kg", price_fixed: 3.95, line_total: 237 },
            { name: "Cherries, sweet, Class I", quantity: 25, unit: "kg", price_fixed: 9.9, line_total: 247.5 },
            { name: "Rocket / arugula, bulk", quantity: 20, unit: "kg", price_fixed: 6.25, line_total: 125 },
          ],
        },
        {
          id_order: 1005,
          client_name: "Market Line",
          client_login: "marketline",
          date_created: daysAgo(8),
          date_delivery: daysAgo(5),
          status: "dispatched",
          total: 438.75,
          comment: "",
          is_demo: true,
          lines: [
            { name: "Pears, Conference, Class I", quantity: 35, unit: "kg", price_fixed: 3.55, line_total: 124.25 },
            { name: "Plums, Stanley", quantity: 28, unit: "kg", price_fixed: 3.75, line_total: 105 },
            { name: "Peaches, yellow flesh, Class I", quantity: 22, unit: "kg", price_fixed: 4.65, line_total: 102.3 },
            { name: "Kiwi, Hayward", quantity: 25, unit: "kg", price_fixed: 4.05, line_total: 101.25 },
          ],
        },
        {
          id_order: 1006,
          client_name: "Green Basket",
          client_login: "greenbasket",
          date_created: daysAgo(7),
          date_delivery: daysAgo(4),
          status: "confirmed",
          total: 2156.8,
          comment: "Large weekend order",
          is_demo: true,
          lines: [
            { name: "Potatoes, russet, washing grade", quantity: 500, unit: "kg", price_fixed: 0.75, line_total: 375 },
            { name: "Cabbage, white", quantity: 200, unit: "kg", price_fixed: 1.05, line_total: 210 },
            { name: "Bell pepper, green", quantity: 80, unit: "kg", price_fixed: 3.85, line_total: 308 },
            { name: "Zucchini / courgette", quantity: 70, unit: "kg", price_fixed: 2.25, line_total: 157.5 },
            { name: "Eggplant / aubergine", quantity: 45, unit: "kg", price_fixed: 3.25, line_total: 146.25 },
            { name: "Garlic, peeled bulk", quantity: 30, unit: "kg", price_fixed: 5.9, line_total: 177 },
            { name: "Tomatoes, Roma / plum", quantity: 150, unit: "kg", price_fixed: 2.35, line_total: 352.5 },
          ],
        },
        {
          id_order: 1007,
          client_name: "North Retail",
          client_login: "northretail",
          date_created: daysAgo(6),
          date_delivery: daysAgo(3),
          status: "accepted",
          total: 789.2,
          comment: "Trial shipment",
          is_demo: true,
          lines: [
            { name: "Apples, Granny Smith, Class I", quantity: 80, unit: "kg", price_fixed: 2.95, line_total: 236 },
            { name: "Lemons, Eureka", quantity: 40, unit: "kg", price_fixed: 2.95, line_total: 118 },
            { name: "Limes, Persian", quantity: 35, unit: "kg", price_fixed: 3.85, line_total: 134.75 },
            { name: "Celery, stalks wholesale", quantity: 12, unit: "crt", price_fixed: 11.95, line_total: 143.4 },
            { name: "Spinach, washed, bulk sack", quantity: 40, unit: "kg", price_fixed: 3.95, line_total: 158 },
          ],
        },
        {
          id_order: 1008,
          client_name: "City Foods",
          client_login: "cityfoods",
          date_created: daysAgo(5),
          date_delivery: daysAgo(2),
          status: "dispatched",
          total: 1534.0,
          comment: "Branch #3 supply",
          is_demo: true,
          lines: [
            { name: "Bananas, Cavendish, ripe", quantity: 200, unit: "kg", price_fixed: 1.95, line_total: 390 },
            { name: "Melon, watermelon, wholesale bin", quantity: 40, unit: "pcs", price_fixed: 12.9, line_total: 516 },
            { name: "Tomatoes, round, salad vine", quantity: 100, unit: "kg", price_fixed: 2.15, line_total: 215 },
            { name: "Cucumbers, pickling / gherkin", quantity: 60, unit: "kg", price_fixed: 2.95, line_total: 177 },
            { name: "Beetroot / beets, trimmed", quantity: 90, unit: "kg", price_fixed: 1.45, line_total: 130.5 },
          ],
        },
        {
          id_order: 1009,
          client_name: "FreshMart LLC",
          client_login: "freshmart",
          date_created: daysAgo(4),
          date_delivery: daysAhead(1),
          status: "confirmed",
          total: 945.5,
          comment: "Standing weekly delivery",
          is_demo: true,
          lines: [
            { name: "Apples, Gala, Class I", quantity: 120, unit: "kg", price_fixed: 2.8, line_total: 336 },
            { name: "Tomatoes, round, salad vine", quantity: 80, unit: "kg", price_fixed: 2.15, line_total: 172 },
            { name: "Carrots, washed, bulk", quantity: 45, unit: "kg", price_fixed: 0.95, line_total: 42.75 },
            { name: "Onions, red", quantity: 70, unit: "kg", price_fixed: 1.15, line_total: 80.5 },
            { name: "Bell pepper, yellow", quantity: 55, unit: "kg", price_fixed: 4.65, line_total: 255.75 },
          ],
        },
        {
          id_order: 1010,
          client_name: "Green Basket",
          client_login: "greenbasket",
          date_created: daysAgo(3),
          date_delivery: daysAhead(2),
          status: "accepted",
          total: 672.4,
          comment: "Organic section",
          is_demo: true,
          lines: [
            { name: "Tomatoes, heirloom mix", quantity: 35, unit: "kg", price_fixed: 4.95, line_total: 173.25 },
            { name: "Cauliflower, Class I", quantity: 40, unit: "kg", price_fixed: 3.85, line_total: 154 },
            { name: "Cabbage, red", quantity: 50, unit: "kg", price_fixed: 1.65, line_total: 82.5 },
            { name: "Blueberries, clam shell (125 g)", quantity: 120, unit: "pcs", price_fixed: 2.1, line_total: 252 },
          ],
        },
        {
          id_order: 1011,
          client_name: "Market Line",
          client_login: "marketline",
          date_created: daysAgo(2),
          date_delivery: daysAhead(3),
          status: "confirmed",
          total: 1120.0,
          comment: "",
          is_demo: true,
          lines: [
            { name: "Apples, Fuji, Class I", quantity: 90, unit: "kg", price_fixed: 3.1, line_total: 279 },
            { name: "Grapes, green seedless", quantity: 55, unit: "kg", price_fixed: 4.85, line_total: 266.75 },
            { name: "Potatoes, baby new", quantity: 100, unit: "kg", price_fixed: 1.25, line_total: 125 },
            { name: "Shallots, bulk", quantity: 40, unit: "kg", price_fixed: 2.95, line_total: 118 },
            { name: "Chili peppers, mild mix", quantity: 25, unit: "kg", price_fixed: 5.95, line_total: 148.75 },
          ],
        },
        {
          id_order: 1012,
          client_name: "North Retail",
          client_login: "northretail",
          date_created: daysAgo(1),
          date_delivery: daysAhead(4),
          status: "accepted",
          total: 556.25,
          comment: "Morning delivery slot",
          is_demo: true,
          lines: [
            { name: "Lettuce, iceberg, wholesale box", quantity: 10, unit: "crt", price_fixed: 14.95, line_total: 149.5 },
            { name: "Tomatoes, cherry, mixed punnet", quantity: 15, unit: "crt", price_fixed: 6.95, line_total: 104.25 },
            { name: "Apples, Pink Lady / Cripps Pink, Class I", quantity: 45, unit: "kg", price_fixed: 3.45, line_total: 155.25 },
            { name: "Grapefruit, Ruby Red", quantity: 55, unit: "kg", price_fixed: 2.65, line_total: 145.75 },
          ],
        },
        {
          id_order: 1013,
          client_name: "City Foods",
          client_login: "cityfoods",
          date_created: daysAgo(0),
          date_delivery: daysAhead(5),
          status: "confirmed",
          total: 2890.0,
          comment: "Festival season prep",
          is_demo: true,
          lines: [
            { name: "Apples, Idared, processing grade", quantity: 400, unit: "kg", price_fixed: 1.55, line_total: 620 },
            { name: "Oranges, Valencia, juice grade", quantity: 300, unit: "kg", price_fixed: 1.85, line_total: 555 },
            { name: "Carrots, washed, bulk", quantity: 250, unit: "kg", price_fixed: 0.95, line_total: 237.5 },
            { name: "Onions, yellow, bulk", quantity: 400, unit: "kg", price_fixed: 0.85, line_total: 340 },
            { name: "Bell pepper, red", quantity: 100, unit: "kg", price_fixed: 4.45, line_total: 445 },
          ],
        },
        {
          id_order: 1014,
          client_name: "FreshMart LLC",
          client_login: "freshmart",
          date_created: daysAgo(0),
          date_delivery: daysAhead(6),
          status: "accepted",
          total: 324.5,
          comment: "Small add-on order",
          is_demo: true,
          lines: [
            { name: "Apples, Braeburn, Class I", quantity: 50, unit: "kg", price_fixed: 3.05, line_total: 152.5 },
            { name: "Pears, Bartlett, Class I", quantity: 30, unit: "kg", price_fixed: 3.65, line_total: 109.5 },
            { name: "Plums, Stanley", quantity: 15, unit: "kg", price_fixed: 3.75, line_total: 56.25 },
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
    if (!token || sessionStorage.getItem("verified") !== "1") return null;
    const base = AUTH_BY_TOKEN[token];
    if (!base) return null;
    return {
      login: sessionStorage.getItem("login") || base.login,
      role: sessionStorage.getItem("role") || base.role,
      name: sessionStorage.getItem("displayName") || base.name,
    };
  }

  function canViewOrder(auth, order) {
    if (auth.role === "manager") return true;
    return Boolean(order.is_demo) || order.client_login === auth.login;
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
          .filter((o) => canViewOrder(auth, o))
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
        if (!canViewOrder(auth, order)) {
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
