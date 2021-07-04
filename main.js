"use strict";

const navbar = document.querySelector("#navbar");
const navbarLogo = document.querySelector(".navbar__logo");
const navbarHeight = navbar.getBoundingClientRect().height;

const navbarMenu = document.querySelector(".navbar__menu");

function paintNavbar() {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar__dark");
    navbarLogo.classList.add("navbar__dark");
  } else {
    navbar.classList.remove("navbar__dark");
    navbarLogo.classList.remove("navbar__dark");
  }
}

function scrollToSection(event) {
  const target = event.target;
  const link = target.dataset.link;
  const selectedTarget = document.querySelector(".active");

  if (link != null) {
    const targetView = document.querySelector(link);
    targetView.scrollIntoView({
      behavior: "smooth",
    });
    selectedTarget.classList.remove("active");
    target.classList.add("active");
  } else {
    return;
  }
}

document.addEventListener("scroll", paintNavbar);
navbarMenu.addEventListener("click", scrollToSection);
