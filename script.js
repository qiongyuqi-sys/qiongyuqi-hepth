(function () {
  // year
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // active nav
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href.endsWith(path)) a.classList.add("active");
  });

  // theme
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") root.dataset.theme = saved;

  const btn = document.getElementById("themeBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      const now = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = now;
      localStorage.setItem("theme", now);
    });
  }
})();

