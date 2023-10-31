// C:\Work\08_Pilot_Project\01_Blog\00_JSLIB\frontend-npx\src\App.tsx

// TODO : external lib import
// animate css import (wow 사용 시 import 필요)
import "wowjs/css/libs/animate.css";
// simplelightbox css import
import "simplelightbox/dist/simple-lightbox.css";

// TODO : internal import
import "./App.css";
import HeaderCom from "./components/common/HeaderCom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BootstrapIcons from "./pages/BootstrapIcons";
import CountUp from "./pages/CountUp";
import CountUpExam from "./pages/CountUpExam";
import TypedCom from "./pages/TypedCom";
import TypedExam from "./pages/TypedExam";
import WowCom from "./pages/WowCom";
import SimpleLightboxCom from "./pages/SimpleLightboxCom";
import SimpleLightboxComExam from "./pages/SimpleLightboxComExam";
import OwlCarouselCom from "./pages/OwlCarouselCom";
import OwlCarouselComExam from "./pages/OwlCarouselComExam";
import IsotopeCom from "./pages/IsotopeCom";
import IsotopeComExam from "./pages/IsotopeComExam";
import EasingCom from "./pages/EasingCom";
import DatepickerCom from "./pages/DatepickerCom";
import DaterangePicker from "./pages/DaterangePicker ";

function App() {
  return (
    <div className="App">
      {/* 머리말 */}
      <HeaderCom />

      {/* 본문 */}
      <div className="container mt-3">
        <Routes>
          {/* TODO: 1) / : 홈메뉴(1st 페이지) */}
          <Route path="/" element={<Home />} />
          {/* TODO: 2) Simple_ bootstrap-icons 아이콘과 텍스트 페이지 만들기 */}
          <Route path="/bootstrap-icons" element={<BootstrapIcons />} />

          {/* TODO: 3) Simple_ CountUp 숫자 카운팅 페이지 만들기 */}
          <Route path="/countup" element={<CountUp />} />
          {/* 3-2) Simple_ CountUpExam 숫자 카운팅 페이지 만들기 예제 */}
          {/* 연습1) 1,234,567.00 줄바꿈, 1.99 줄바꿈, 12345 줄바꿈 화면 카운팅하세요 */}
          <Route path="/countup-exam" element={<CountUpExam />} />

          {/* TODO: 4) Simple_ TypedCom 텍스트 타이핑 애니메이션 페이지 만들기 */}
          <Route path="/typed" element={<TypedCom />} />
          {/* 4-2) Simple_ TypedExam텍스트 타이핑 애니메이션 페이지 만들기 예제 */}
          {/* 연습2) ["안녕하세요", "또 만납시다.", "잘가세요."]
              <!-- backSpeed: 0, typeSpeed: 0 으로 사용해 보세요 --> */}
          <Route path="/typed-exam" element={<TypedExam />} />

          {/* TODO: 5) Simple_  WowCom 텍스트 위치 변화 애니메이션 페이지 만들기 */}
          <Route path="/wow" element={<WowCom />} />

          {/* TODO: 6) Complex_ SimpleLightboxCom 이미지 애니메이션 페이지 만들기 */}
          <Route path="/simple-lightbox" element={<SimpleLightboxCom />} />
          {/* 6-2) Complex_ SimpleLightboxComExam 이미지 애니메이션 페이지 만들기 예제 */}
          {/* 연습3) simple-lightbox-exam div(gallery)
          "../assets/img/gallery/full/01.jpg" ~ 06.jpg: 풀이미지 (화면이미지) a태그
          "../assets/img/gallery/thumb/01.jpg" ~ 06.jpg : 작은이미지 (클릭시 나오는 이미지) img 태그 */}
          <Route
            path="/simple-lightbox-exam"
            element={<SimpleLightboxComExam />}
          />

          {/* TODO: 7) Complex_ OwlCarousel.js 이미지 회전목마(여러 개의 사진이 자동으로 돌아가게 하는) 애니메이션 페이지 만들기 */}
          <Route path="/owl-carousel" element={<OwlCarouselCom />} />
          {/* 7-2) Complex_ SimpleLightboxComExam 이미지 애니메이션 페이지 만들기 예제 */}
          {/* 연습4) ../assets/img/gallery/thumb/01.jpg ~ ../assets/img/gallery/thumb/06.jpg 까지 캐러셀을 구현하세요. */}
          {/*  gallery 이미지 6개를 사용해 화면에 기본 2개를 보여주고, 이미지가 계속 돌아가게 하세요. */}
          <Route path="/owl-carousel-exam" element={<OwlCarouselComExam />} />

          {/* TODO: Complex_ isotope 동위원소(그리드 형식으로 정렬된 요소들을 필터링하고 재정렬 페이지) */}
          <Route path="/isotope" element={<IsotopeCom />} />
          {/* 8-2) Complex_ isotopeExam동위원소(그리드 형식으로 정렬된 요소들을 필터링하고 재정렬 페이지) */}
          {/* 연습 5) first, second, third 로 div 태그를 지정하고 isotope 기능을 추가하세요 */}
          <Route path="/isotope-exam" element={<IsotopeComExam />} />

          {/* TODO: 9) Complex_ easing 라이브러리는 웹 애니메이션 및 트랜지션에서 사용되는 타이밍 함수(처음(천천히) -> 중간(빨리) -> 끝(천천히) : 시간의 흐름(애니메이션)) */}
          <Route path="/easing" element={<EasingCom />} />
  
          {/* TODO: 10-1) Complex_ datepicker 사용자가 캘린더에서 날짜를 선택할 수 있는 입력 요소(선택, 지정 날짜) alert 화면 출력 */}
          <Route path="/datepicker" element={<DatepickerCom />} />
          {/* TODO: 10-2) Complex_ daterangepicker 사용자가 캘린더에서 날짜를 선택할 수 있는 입력 요소(선택, 지정 날짜) alert 화면 출력 */}
          <Route path="/daterange-picker" element={<DaterangePicker  />} />

        

        </Routes>
      </div>
    </div>
  );
}

export default App;
