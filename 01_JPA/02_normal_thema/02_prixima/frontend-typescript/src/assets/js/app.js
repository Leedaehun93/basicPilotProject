/* C:\Work\08_Pilot_Project\01_Blog\01_JPA\02_normal_thema\02_prixima\frontend-typescript\src\assets\js\app.js */

// $(document).ready(function () : 화면이 뜰 때 실행되는 이벤트 함수(jQuery)
// useEffect()를 사용하기 떄문에 주석 또는 삭제하고 export export default function initMain() 사용하기
/* $(document).ready(function () {
    //Owl 캐러셀 1
$(".hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: false,
    navText: ["PREV", "NEXT"],
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 7000,
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      },
    },
  });
  
  //Owl 캐러셀 2
  $("#projects-slider").owlCarousel({
    loop: true,
    nav: false,
    items: 2,
    dots: true,
    smartSpeed: 600,
    center: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
        margin: 8,
      },
    },
  });
  
  //Owl 캐러셀 3
  $(".reviews-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 900,
    items: 1,
    margin: 24,
    autoplay: true,
    autoplayTimeout: 4000,
  });
  }); */

  /* eslint-disable */
export default function initMain() {
  //Owl 캐러셀 1
  $(".hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: false, // 하단에 ... 이동 메뉴 없앰
    navText: ["PREV", "NEXT"], // 메뉴명 PREV, NEXT
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 7000, // 오토플레이가 실행될 때 시간 : 7초
    
    responsive: {          // 반응형 : 0 ~ 765화면(핸드폰/테블릿) : 메뉴(nav) 없음
      0: {                 // 반응형 : 768화면(pc버전) : 메뉴(nav) 있음
        nav: false,
      },
      768: {
        nav: true,
      },
    },
  });

  //Owl 캐러셀 2
  $("#projects-slider").owlCarousel({
    loop: true,
    nav: false,
    items: 2,
    dots: true,
    smartSpeed: 600,
    center: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
        margin: 8,
      },
    },
  });

  //Owl 캐러셀 3
  $(".reviews-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 900,
    items: 1,
    margin: 24,
    autoplay: true,
    autoplayTimeout: 4000,
  });
}

