let input = document.querySelectorAll(".drop__input");
let bookingWrapper = document.querySelector('.wrapper');
let guestsDelete = document.getElementById("guestsDelete");

input.forEach(element => {
    element.addEventListener("click", (e) => {
        let buttonClicked = e.target;
        let d = buttonClicked.parentElement.children[2];
        let i = buttonClicked.parentElement.children[1];
        d.classList.toggle("drop__active");
        i.classList.toggle("drop__img-active")
        if(!bookingWrapper){
            bookingWrapper.classList.add('wrapper-active');
        }
        guestsSubmit.addEventListener('click', () => {
            d.classList.remove("drop__active");
            i.classList.remove("drop__img-active")
        });
    });
});

let guestsSubmit = document.getElementById("guestsSubmit");

