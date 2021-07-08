"use strict";

const navbar = document.querySelector("#navbar");
const navbarLogo = document.querySelector(".navbar__logo");
const navbarMenu = document.querySelector(".navbar__menu");
const navbarHeight = navbar.getBoundingClientRect().height;

const sections = document.querySelectorAll(".section");

function reformNavbar() {
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

function navHighlightOnScroll() {
  let scrollY = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navbar__menu li[data-link*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navbar__menu li[data-link*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

document.addEventListener("scroll", reformNavbar);
navbarMenu.addEventListener("click", scrollToSection);
window.addEventListener("scroll", navHighlightOnScroll);
