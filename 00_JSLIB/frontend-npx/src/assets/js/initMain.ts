// C:\Work\08_Pilot_Project\01_Blog\00_JSLIB\frontend-npx\src\assets\js\initMain.ts

// TODO : typed import
import Typed from "typed.js";

// TODO: C:\Work\08_Pilot_Project\01_Blog\00_JSLIB\frontend-npx\types index.d.ts 회피 경로 (※모듈 에러 발생 타입 회피)
// TODO : 5) wow import
// types/외부라이브러리명/index.d.ts 파일 생성시 타입 회피됨
import { WOW } from "wowjs";
// TODO : 6) simplelightbox import
import SimpleLightbox from "simplelightbox";

export default function initMain() {
  // TODO : 3) countup lib 사용
  // TODO : 사용법 : $(선택자).cunterUp({옵션설정});
  // TODO : jquery 타입 무시 : ($(선택자) as any)
  ($('[data-toggle="counter-up"]') as any).counterUp({
    delay: 10,
    time: 2000,
  });
  // 3-2) 연습 counterup lib
  // 연습1) 1,234,567.00 줄바꿈, 1.99 줄바꿈, 12345 줄바꿈 화면 카운팅하세요
  ($(".counter") as any).counterUp({
    delay: 10,
    time: 2000,
  });

  // TODO : 4) typed.js lib
  //     => html : <span id="변수명"></span>
  //     => js : new Typed(#변수명, {옵션})

  // 바닐라 코딩
  let typed1 = document.querySelector("#typed1");

  // typed1 있으면 타이핑 객체 생성
  if (typed1 != null) {
    new Typed("#typed1", {
      // 타이핑 대상 글자 : strings: ["화면표시1", ... , "화면표시n"]
      strings: ["원하는 글씨를", "순서대로", "출력해 줍니다."],
      typeSpeed: 100, // 타이핑 되는 속도
      backSpeed: 100, // 지워지는 속도
      cursorChar: "_",
      loop: true, // 글자 순환
    });
  }

  // 연습 4-2) TypedExam
  let typedExam = document.querySelector("#typedExam");

  // typedExam 있으면 타이핑 객체 생성
  if (typedExam != null) {
    new Typed("#typedExam", {
      // 타이핑 대상 글자 : strings: ["화면표시1", ... , "화면표시n"]
      strings: ["안녕하세요", "또 만납시다.", "잘가세요."],
      typeSpeed: 0, // 타이핑 되는 속도
      backSpeed: 0, // 지워지는 속도
      cursorChar: "_",
      loop: true, // 글자 순환
    });
  }

  // TODO : 5) wow.js lib
  // 사용법 : new WOW().init()
  new WOW().init();

  // TODO : 6) SimpleLighbox
  new SimpleLightbox(".portfolio a");
  // TODO : 6-2) SimpleLightboxComExam
  new SimpleLightbox(".gallery a");

  // TODO : 7) owl-carousel
  // 사용법 : $(선택자).owlCarousel({옵션});
  $(".carousel-div").owlCarousel({
    // 옵션
    autoplay: true,
    smartSpeed: 1000,
    nav: true,
    items: 1,
    loop: true,
  });
  // TODO : 7-2) owl-carousel
  // 사용법 : $(선택자).owlCarousel({옵션});
  $(".carousel-div-exam").owlCarousel({
    // 옵션
    autoplay: true,
    smartSpeed: 1000,
    nav: true,
    items: 2,
    loop: true,
  });

  // TODO : 8) isotope
  // 버그 : 이미지 겹치는 버그
  // 소제목 부분 :
  // 필터 부분   : portfolio-container 클래스
  // 사용법 : ($("필터선택자") as any).imagesLoaded(function () {
  //                 isotope 필터 설정 코딩
  //                 let 변수명 = $(필터선택자).isotope({
  //                     itemSelector: "필터선택자의 자식선택자(div여러개)",(**)
  //                     layoutMode: "화면모드"
  //                  })
  //                 isotope 소제목 설정 코딩
  //
  //          }
  ($(".portfolio-container") as any).imagesLoaded(function () {
    // 필터 선택자 : portfolio-container 태그를 선택해서 isotope 객체 생성
    let portfolioIsotope = ($(".portfolio-container") as any).isotope({
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    // 소제목 선택자 : #portfolio-flters li
    // 소제목을 클릭했을때 실행됨
    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("active"); // active 클래스 제거
      $(this).addClass("active"); // 현재 클릭한 소제목에 active 클래스 추가

      // data-filter=값 , 값 : *(필터명), .first(필터명), .second(필터명)
      // 현재 클릭한 필터의 값을 선택해서 isotope 를 적용함
      //   isotope 객체 생성 : $(필터선택자).isotope({
      //        filter: 필터명
      //   });
      //  $(this).data("filter") => data-filter="값" 을 가져오는 함수
      portfolioIsotope.isotope({ filter: $(this).data("filter") });
    });
  });

  // TODO : 8-2) isotope
  ($(".exam-container") as any).imagesLoaded(function () {
    let examIsotope = ($(".exam-container") as any).isotope({
      itemSelector: ".exam-item",
      layoutMode: "fitRows",
    });

    $("#exam-flters li").on("click", function () {
      $("#exam-flters li").removeClass("active");
      $(this).addClass("active");

      examIsotope.isotope({ filter: $(this).data("filter") });
    });
  });
  // TODO : 9) easing
  $(function () {
    $("#boxing").click(function () {
      $("#boxing")
        // .animate({css속성:값}, 지속시간, easing(애니메이션)_효과
        // easeOutElastic 함수 : easing.js 에 라이브러리 함수가 정의되어 있음
        .animate({ marginLeft: "50px" }, 1000, "easeOutElastic")
        .animate({ marginTop: "50px" }, 1000, "easeOutBounce")
        .animate({ marginLeft: "-150px" }, 1000, "easeOutQuad")
        .animate({ marginTop: "-150px" }, 1000, "easeInOutBack")
        .animate({ height: "100px", marginTop: "0px", width: "50px" }, 1000, "easeOutElastic" )
        .animate({ height: "50px", marginTop: "25px", width: "50px" }, 1000, "easeOutBounce" )
        .animate({ height: "50px", marginTop: "25px", width: "100px" },1000, "easeOutQuad" )
        .animate( { height: "100px", marginTop: "0px", width: "100px" }, 1000, "easeInOutBack" );
    });
  });




} // end of initMain
