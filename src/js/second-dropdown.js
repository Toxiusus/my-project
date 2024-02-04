let input = document.querySelectorAll(".drop__input");

input.forEach(element => {
    element.addEventListener("click", (e) => {
        let buttonClicked = e.target;
        let d = buttonClicked.parentElement.children[2];
        let i = buttonClicked.parentElement.children[1];
        d.classList.toggle("drop__active");
        i.classList.toggle("drop__img-active")
    });
});


