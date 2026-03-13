const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
const siteHeader = document.querySelector(".site-header");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (siteHeader) {
  const syncHeaderState = () => {
    siteHeader.classList.toggle("scrolled", window.scrollY > 12);
  };

  syncHeaderState();
  window.addEventListener("scroll", syncHeaderState, { passive: true });
}

const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}
