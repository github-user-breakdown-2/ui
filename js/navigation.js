const navigationButton = document.querySelector(".nav-button");
const navigationMenu = document.querySelector(".nav-menu");

navigationButton.addEventListener("click", _ => toggleNav());

function toggleNav() {
  navigationMenu.classList.toggle("nav-menu-active");
}
