(function initVerifyPage() {
  if (sessionStorage.getItem("verified") === "1") {
    const role = sessionStorage.getItem("role");
    window.location.href = role === "manager" ? "manager_dashboard.html" : "order_form.html";
    return;
  }

  const form = document.getElementById("verifyForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const login = (form.login.value || "guest").trim();
    const role = form.role.value === "manager" ? "manager" : "client";
    const displayName = login.charAt(0).toUpperCase() + login.slice(1);

    sessionStorage.setItem("verified", "1");
    sessionStorage.setItem("login", login);
    sessionStorage.setItem("displayName", displayName);
    sessionStorage.setItem("role", role);
    sessionStorage.setItem("token", role === "manager" ? "LOCAL_DEV_MANAGER" : "LOCAL_DEV_CLIENT");

    window.location.href = role === "manager" ? "manager_dashboard.html" : "order_form.html";
  });
})();
