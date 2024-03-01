let guestsPlus = document.querySelectorAll(".guests__plus");
let guestsMinus = document.querySelectorAll(".guests__minus");

let bedrooms = 0;

let beds = 0;

let bathrooms = 0;

for (let i = 0; i < guestsPlus.length; i++) {
  let button = guestsPlus[i];

  button.addEventListener("click", function(event) {
    let buttonClicked = event.target;

    let input = buttonClicked.parentElement.children[1];

    let inputValue = input.innerHTML;

    let newValue = parseInt(inputValue) + 1;

    input.innerHTML = newValue;

    getTotal();

    if (document.getElementById("comfort")) {
      getComforts(this.id, "increment");
    }
  });
}

for (let i = 0; i < guestsMinus.length; i++) {
  let button = guestsMinus[i];
  button.addEventListener("click", function (event) {
    let buttonClicked = event.target;

    let input = buttonClicked.parentElement.children[1];

    let inputValue = input.innerHTML;

    let newValue = parseInt(inputValue) - 1;

    input.innerHTML = newValue;

    if (newValue >= 0) {
      input.innerHTML = newValue;
    } else {
      input.innerHTML = 0;
    }

    getTotal();

    if (document.getElementById("comfort")) {
      getComforts(this.id, "decrement");
    }
  });
}

function getTotal() {
  let arr = document.querySelectorAll(".guests__num");

  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i].innerHTML)) {
      total += parseInt(arr[i].innerHTML);
    }
  }

  document.getElementById("howManyGuests").value = total;

  if ((document.getElementById("howManyGuests").value = total <= 0)) {
    document.getElementById("howManyGuests").value = total + "Сколько гостей";
  } else if ((document.getElementById("howManyGuests").value = total === 1)) {
    document.getElementById("howManyGuests").value = total + " гость";
  } else if ((document.getElementById("howManyGuests").value = total <= 4)) {
    document.getElementById("howManyGuests").value = total + " гостя";
  } else {
    document.getElementById("howManyGuests").value = total + " гостей";
  }
}

function getComforts(id) {
  let string = "";

  if (id == "plusBedrooms" || id == "minusBedrooms") {
    bedrooms = parseInt(document.getElementById("bedrooms").innerHTML);
  } else if (id == "plusBeds" || id == "minusBeds") {
    beds = parseInt(document.getElementById("beds").innerHTML);
  } else {
    bathrooms = parseInt(document.getElementById("bathrooms").innerHTML);
  }

  if (bedrooms > 0) {
    string += bedrooms + " спальня";
    if (beds > 0 || bathrooms > 0) {
      string += ", ";
    }
  }

  if (beds > 0) {
    string += beds + " кровати";
    if (bathrooms > 0) {
      string += ", ";
    }
  }

  if (bathrooms > 0) {
    string += bathrooms + " ванны";
  }

  document.getElementById("comfort").value = string;
}

let guestsDelete = document.getElementById("guestsDelete");

guestsDelete.addEventListener("click", function deleteGuests() {
  document.getElementById("howManyGuests").value = "Сколько гостей";

  let arr = document.querySelectorAll(".guests__num");

  for (let i = 0; i < arr.length; i++) {
    arr[i].innerHTML = 0;
  }
});
