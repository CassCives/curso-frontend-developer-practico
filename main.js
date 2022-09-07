const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const hamburguesaMenu = document.querySelector(".menu");
const carritoMenu = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

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

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Pantalla",
    price: 10,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Moto",
    price: 180,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
*/
for (product of productList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    const productFigure = document.createElement("figure");
    const carritoImg = document.createElement("img");
    carritoImg.setAttribute("src", "./icons/bt_add_to_cart.svg");


    productInfoDiv.append(productPrice, productName);

    productFigure.append(carritoImg);

    productInfo.append(productInfoDiv, productFigure);
    productCard.append(img, productInfo);
    cardsContainer.append(productCard);
}