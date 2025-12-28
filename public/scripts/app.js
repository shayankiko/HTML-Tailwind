const toggleThemeBtns = document.querySelectorAll(".toggle-theme");

toggleThemeBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});

const mobileNavBars = document.querySelector("#mobile-nav-bars");
const mobileNav = document.querySelector("#mobile-nav");
const overlay = document.querySelector("#overlay");
const closeNav = document.querySelector("#close-nav");

mobileNavBars.addEventListener("click", () => {
  mobileNav.classList.add("right-nav-0");
  overlay.classList.add("block-nav");
});

closeNav.addEventListener("click", () => {
  mobileNav.classList.remove("right-nav-0");
  overlay.classList.remove("block-nav");
});

const mobileMenuLinks = document.querySelector("#mobile-menu-links");
const mobileSubMenu = document.querySelector("#mobile-sub-menu");
const chevronRotate = document.querySelector("#chevron-rotate");

mobileMenuLinks.addEventListener("click", () => {
  mobileSubMenu.classList.toggle("hidden");
  chevronRotate.classList.toggle("rotate-chavron");
});

const shoppingCartMobile = document.querySelector("#shopping-cart-mobile");
const mobileCart = document.querySelector("#mobile-cart");
const xMarkCart = document.querySelector("#x-mark-cart");

shoppingCartMobile.addEventListener("click", () => {
  mobileCart.classList.add("left-0");
  overlay.classList.add("block-nav");
});
xMarkCart.addEventListener("click", () => {
  mobileCart.classList.remove("left-0");
  overlay.classList.remove("block-nav");
});
overlay.addEventListener("click", () => {
  mobileNav.classList.remove("right-nav-0");
  overlay.classList.remove("block-nav");
});
