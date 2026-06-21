function getToken() {
  return sessionStorage.getItem("token");
}

async function apiRequest(method, path, body) {
  await new Promise((resolve) => setTimeout(resolve, 40));

  try {
    return window.MockStore.handle(method, path, body, getToken());
  } catch (error) {
    if (error.status === 401) {
      throw new Error("Unauthorized: session token missing or invalid.");
    }
    throw error;
  }
}

async function apiGet(path) {
  return apiRequest("GET", path);
}

async function apiPost(path, body) {
  return apiRequest("POST", path, body);
}

async function apiPatch(path, body) {
  return apiRequest("PATCH", path, body);
}

function formatMoney(value) {
  return `${Number(value || 0).toFixed(2)} BYN`;
}
