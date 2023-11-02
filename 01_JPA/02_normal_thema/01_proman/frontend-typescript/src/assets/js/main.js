/* C:\Work\08_Pilot_Project\01_Blog\01_JPA\02_normal_thema\01_proman\frontend-typescript\src\assets\js\main.js */

// TODO : 생성자new wowjs import(npm 설치했던 부분)
import { WOW } from "wowjs";
// TODO : 생성자 new typed.js import(npm 설치했던 부분)
import Typed from "typed.js";

// TODO: export 감싸기
// TODO : eslint-disable : jQuery, $ 등을 eslint 문법검사 기능에서 에러로 처리함 -> 이 기능을 비활성화하는 키워드
/* eslint-disable */
export default function initMain() {
  (function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
      setTimeout(function () {
        if ($("#spinner").length > 0) {
          $("#spinner").removeClass("show");
        }
      }, 1);
    };
    spinner();

    // TODO : Initiate the wowjs import 받기
    new WOW().init();

    // Navbar on scrolling
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".navbar").fadeIn("slow").css("display", "flex");
      } else {
        $(".navbar").fadeOut("slow").css("display", "none");
      }
    });

    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();

        $("html, body").animate(
          {
            scrollTop: $(this.hash).offset().top - 45,
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".navbar-nav").length) {
          $(".navbar-nav .active").removeClass("active");
          $(this).closest("a").addClass("active");
        }
      }
    });

    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".back-to-top").fadeIn("slow");
      } else {
        $(".back-to-top").fadeOut("slow");
      }
    });
    $(".back-to-top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
      return false;
    });

    // Typed Initiate
     // TODO : Typed import 받기
    if ($(".typed-text-output").length == 1) {
      var typed_strings = $(".typed-text").text();
      var typed = new Typed(".typed-text-output", {
        strings: typed_strings.split(", "),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true,
      });
    }

    // Modal Video
    var $videoSrc;
    $(".btn-play").click(function () {
      $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $("#videoModal").on("shown.bs.modal", function (e) {
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
      );
    });
    $("#videoModal").on("hide.bs.modal", function (e) {
      $("#video").attr("src", $videoSrc);
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 2000,
    });

    // Skills
    $(".skill").waypoint(
      function () {
        $(".progress .progress-bar").each(function () {
          $(this).css("width", $(this).attr("aria-valuenow") + "%");
        });
      },
      { offset: "80%" }
    );

    // Portfolio isotope and filter
    var portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });
    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("active");
      $(this).addClass("active");

      portfolioIsotope.isotope({ filter: $(this).data("filter") });
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      items: 1,
      dots: true,
      loop: true,
    });
  })(jQuery);
}
