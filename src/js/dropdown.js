let select = document.querySelector(".select__input");
let dropDown = document.querySelector(".select__dropdown");
let img = document.querySelector(".select__img")

if (select) {
    select.addEventListener("click", () => {
        dropDown.classList.toggle("select__active");
        img.classList.toggle("select__img-active");
    });
};

let guestsSubmit = document.getElementById("guestsSubmit");

guestsSubmit.addEventListener("click",function submitGuests() {
});