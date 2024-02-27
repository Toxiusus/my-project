let guestsPlus = document.querySelectorAll(".guests__plus");
let guestsMinus = document.querySelectorAll(".guests__minus");

for (let i = 0; i < guestsPlus.length; i++) {
  let button = guestsPlus[i];

  button.addEventListener("click", function (event) {
    let buttonClicked = event.target;

    let input = buttonClicked.parentElement.children[1];

    let inputValue = input.innerHTML;

    let newValue = parseInt(inputValue) + 1;

    input.innerHTML = newValue;

    getTotal();

    if (document.getElementById("comfort")) {
      getComforts();
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
      getComforts();
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

function getComforts() {
  let spans = document.querySelectorAll(".guests__comfots");

  let total = 0;

  let arr = [];

  for (let i = 0; i < arr.length; i++) {
    
  }
  // spans.forEach((span => {
  //   arr.push({
  //     id: span.id,
  //     value: parseInt(span.textContent, 10),
  //   });
  // }));
  document.getElementById("comfort").value = total;
  // let arr = document.querySelectorAll(".guests__comfots");

  // let total = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   if (parseInt(arr[i].innerHTML)) {
  //     total += parseInt(arr[i].innerHTML);
  //   }
  // }
  // document.getElementById("comfort").value = total;
}

let guestsDelete = document.getElementById("guestsDelete");

guestsDelete.addEventListener("click", function deleteGuests() {
  document.getElementById("howManyGuests").value = "Сколько гостей";

  let arr = document.querySelectorAll(".guests__num");

  for (let i = 0; i < arr.length; i++) {
    arr[i].innerHTML = 0;
  }
});
