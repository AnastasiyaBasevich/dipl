(function initLayout() {
  const path = window.location.pathname;
  const file = path.split("/").pop() || "index.html";

  function isManagerPage() {
    return file === "manager_dashboard.html";
  }

  function isClientPage() {
    return file === "order_form.html" || file === "order_history.html" || file === "index.html";
  }

  if (isManagerPage()) {
    sessionStorage.setItem("token", "LOCAL_DEV_MANAGER");
    sessionStorage.setItem("role", "manager");
  } else if (isClientPage()) {
    sessionStorage.setItem("token", "LOCAL_DEV_CLIENT");
    sessionStorage.setItem("role", "client");
  } else if (!sessionStorage.getItem("token")) {
    sessionStorage.setItem("token", "LOCAL_DEV_CLIENT");
    sessionStorage.setItem("role", "client");
  }

  const role = sessionStorage.getItem("role");
  const nav = document.getElementById("mainNav");
  const navLinks = document.getElementById("navLinks");
  if (!nav || !navLinks) return;

  nav.style.display = "flex";

  const links = role === "manager"
    ? [{ href: "manager_dashboard.html", label: "All Orders" }]
    : [
        { href: "order_form.html", label: "New Order" },
        { href: "order_history.html", label: "My Orders" },
        { href: "manager_dashboard.html", label: "Manager view" },
      ];

  links.forEach((link) => {
    const a = document.createElement("a");
    a.className = "nav__link";
    a.href = link.href;
    a.textContent = link.label;
    navLinks.appendChild(a);
  });

  const resetBtn = document.createElement("button");
  resetBtn.className = "btn btn-text";
  resetBtn.textContent = "Reset session";
  resetBtn.addEventListener("click", () => {
    sessionStorage.clear();
    window.location.href = "order_form.html";
  });
  navLinks.appendChild(resetBtn);
})();
