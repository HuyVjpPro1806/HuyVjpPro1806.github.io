const navbar = document.querySelector("[data-navbar]");
const backTop = document.querySelector("[data-back-top]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const year = document.querySelector("[data-year]");
const loader = document.querySelector("#loading-overlay");

function updateScrollState() {
  const active = window.scrollY > 24;
  navbar?.classList.toggle("scrolled", active);
  backTop?.classList.toggle("visible", window.scrollY > 420);
}

function closeLoader() {
  loader?.classList.add("hidden");
}

year.textContent = new Date().getFullYear();
updateScrollState();

window.addEventListener("scroll", updateScrollState, { passive: true });
window.addEventListener("load", () => {
  window.setTimeout(closeLoader, 350);
});

window.setTimeout(closeLoader, 1400);

backTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("light");
});
