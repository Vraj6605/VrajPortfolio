const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn_burger");
const nav = document.querySelector(".nav");
const menunav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav_item");


let showMenu = false;

menuBtn.addEventListener("click", togleMenu);

function togleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menunav.classList.add("open");

    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menunav.classList.remove("open");  
    navItems.forEach(item => item.classList.remove('open'));
    showMenu = false;
  }
}
