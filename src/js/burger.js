const menuBtn = document.querySelector(".nav__btn");
const menuMobile = document.querySelector(".nav__list");

menuBtn.addEventListener("click", () => {
    menuMobile.classList.toggle("nav__open");
});