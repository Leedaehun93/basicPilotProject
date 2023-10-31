/* C:\Work\08_Pilot_Project\01_Blog\01_JPA\01_easy_thema\02_creative-gh\frontend-typescript\src\assets\js\scripts.js */

/*!
 * Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
 */
//
// Scripts

// TODO : bootstrap npm 설치 (cdn 주석 막음)
import * as bootstrap from "bootstrap";

// TODO : simplelightbox import(npm 설치)
import SimpleLightbox from "simplelightbox";

/* window.addEventListener('DOMContentLoaded', event => {
 Navbar shrink function
var navbarShrink = function () { });*/
// TODO : HTML => REACT export 받기(코드 수정)
export default function initMain() {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Activate SimpleLightbox plugin for portfolio items
  //  사용법 : new SimpleLightbox(선택자)
  new SimpleLightbox("#portfolio a.portfolio-box");
}
