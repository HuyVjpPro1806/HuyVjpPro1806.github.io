const header = document.querySelector(".topbar");

function updateHeader() {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 16);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
