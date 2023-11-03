/* C:\Work\08_Pilot_Project\01_Blog\01_JPA\03_high_thema\01_tour\frontend-typescript\src\assets\js\scripts.js */
/* <!-- TODO: 개발자가 직접 코딩 js #1 : 파일명 : scripts.js => src/assets/js 이관  --> */

import Typed from "typed.js";

/* eslint-disable */
export default function initScripts() {
  // 여기
  $(function () {
    // .typed-words(css 클래스) 있을때만 Typed 생성자 함수 실행
    if (document.querySelector(".typed-words")) {
      // 여기다가
      var slides = $(".slides"),
        images = slides.find("img");

      images.each(function (i) {
        $(this).attr("data-id", i + 1);
      });
      // 타이프 lib (npm 설치)
      var typed = new Typed(".typed-words", {
        strings: [
          "San Francisco.",
          " Paris.",
          " New Zealand.",
          " Maui.",
          " London.",
        ],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 4000,
        startDelay: 1000,
        loop: true,
        showCursor: true,
        preStringTyped: (arrayPos, self) => {
          arrayPos++;
          console.log(arrayPos);
          $(".slides img").removeClass("active");
          $('.slides img[data-id="' + arrayPos + '"]').addClass("active");
        },
      });
    }
  });
}
