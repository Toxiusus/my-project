const sidebarBtn = document.querySelector(".aside__btn");
const sidebar = document.querySelector(".aside__hidebox");
console.log(sidebar);
console.log(sidebarBtn);

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("aside__open");
});
