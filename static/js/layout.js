(function initLayout() {
  const path = window.location.pathname;
  const file = path.split("/").pop() || "index.html";

  if (file !== "verify.html" && sessionStorage.getItem("verified") !== "1") {
    window.location.href = "verify.html";
    return;
  }

  const role = sessionStorage.getItem("role");
  const nav = document.getElementById("mainNav");
  const navLinks = document.getElementById("navLinks");
  if (!nav || !navLinks) return;

  nav.style.display = "flex";

  const displayName = sessionStorage.getItem("displayName") || "User";
  const nameSpan = document.createElement("span");
  nameSpan.className = "nav__link";
  nameSpan.style.cursor = "default";
  nameSpan.textContent = displayName;
  navLinks.appendChild(nameSpan);

  const links = role === "manager"
    ? [{ href: "manager_dashboard.html", label: "All Orders" }]
    : [
        { href: "order_form.html", label: "New Order" },
        { href: "order_history.html", label: "My Orders" },
      ];

  links.forEach((link) => {
    const a = document.createElement("a");
    a.className = "nav__link";
    a.href = link.href;
    a.textContent = link.label;
    navLinks.appendChild(a);
  });

  const logoutBtn = document.createElement("button");
  logoutBtn.className = "btn btn-text";
  logoutBtn.textContent = "Log out";
  logoutBtn.addEventListener("click", () => {
    sessionStorage.clear();
    window.location.href = "verify.html";
  });
  navLinks.appendChild(logoutBtn);
})();
