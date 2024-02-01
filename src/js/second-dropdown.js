let input = document.querySelector(".drop__input");
let dropDown = document.querySelector(".drop__dropdown");
let img = document.querySelector(".drop__img");

input.addEventListener("click", () => {
    dropDown.classList.toggle("drop__active");
    img.classList.toggle("drop__img-active")
})
