const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const hamburguesaMenu = document.querySelector(".menu");
const carritoMenu = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
hamburguesaMenu.addEventListener("click", toggleMobileMenu);
carritoMenu.addEventListener("click", togglecarritoMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    aside.classList.add("inactive");
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
    aside.classList.add("inactive");
}
function togglecarritoMenu() {
    aside.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
}