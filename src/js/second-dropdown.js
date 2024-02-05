let input = document.querySelectorAll(".drop__input");
let bookingWrapper = document.querySelector('.wrapper');
let guestsDelete = document.getElementById("guestsDelete");

input.forEach(element => {
    element.addEventListener("click", (e) => {
        let buttonClicked = e.target;
        let d = buttonClicked.parentElement.children[2];
        let i = buttonClicked.parentElement.children[1];
        bookingWrapper.classList.add('wrapper-active');
        d.classList.toggle("drop__active");
        i.classList.toggle("drop__img-active")
    });
});