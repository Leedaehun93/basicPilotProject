<!--C:\Work\08_Pilot_Project\01_Blog\00_JSLIB\frontend-npx\README.md -->

# 메뉴 라이브러리 설치
npm i react-router-dom

# jquery 라이브러리 설치
npm i --save-dev @types/jquery

npm i @types/jqueryui
# bootstrap 라이브러리 설치
npm i --save-dev @types/jquery

------------------------------------------------------------------------------------------------

# 3) countup lib : 숫자 올라가기 외부 lib
# 공홈 : https://github.com/bfintal/Counter-Up
# (cdn(링크), npm(설치))
# TODO : waypoints 필수 설치 필요
# 경로 : C:\Work\08_Pilot_Project\01_Blog\00_JSLIB\frontend-npx\public\lib\waypoints

------------------------------------------------------------------------------------------------

# 4) typed js lib : 화면에 타자처럼 타이핑 애니메이션 효과를 주는 lib
# => npm 설치 (cdn 있음)
# 공홈 : https://mattboldt.github.io/typed.js/
npm install typed.js
# typed.js import 방법 (MIT 라이선스)
import Typed from "typed.js";

------------------------------------------------------------------------------------------------

# 5) wow lib : GNU GPL 라이선스 v3(제약: 소스 공개 필요)
# 공홈 : https://wowjs.uk/
# 유사라이브러리 : AOS lib (MIT 라이선스)
# import js 라이브러리 설치
npm i wowjs
# wowjs import 방법
import { WOW } from "wowjs";
# animate.css import : App.tsx
# animate css import (wow 사용시 import 필요)
import "simplelightbox/dist/simple-lightbox.css";

------------------------------------------------------------------------------------------------

# 6) simplelightbox lib : SimpleLightbox 설치
# (cdn, npm(설치))
# 공홈 : https://simplelightbox.com/
npm install simplelightbox
# import SimpleLightbox from "simplelightbox" 설치 : initMain.js
import SimpleLightbox from "simplelightbox";
# simplelightbox css import : App.tsx
import "simplelightbox/dist/simple-lightbox.css";

------------------------------------------------------------------------------------------------

# 7) TODO: OwlCarousel lib
# 회전목마 : 여러 개의 사진이 자동으로 돌아가게 하는 lib
# 유사 lib : swiper
# (cdn(index.html 링크), npm(설치))
# 공홈 : https://owlcarousel2.github.io/OwlCarousel2/
# index.html : css link 삽입
# <link href="/lib/owlcarousel/assets/owl.carousel.css" rel="stylesheet" />
# index.html : js link (body) 삽입
# <script src="/lib/owlcarousel/owl.carousel.min.js"></script>
# type 설치
npm i @types/owl.carousel

------------------------------------------------------------------------------------------------

# 8) isotope lib
# (공홈: https://isotope.metafizzy.co/)
# 이미지들의 정렬을 해주는 lib
# (참고) npm install isotope-layout --save
npm i @types/isotope-layout
# (참고) npm i imagesloaded(이미지 버그 확인용)
npm i @types/imagesloaded
# cdn 설치 : index.html js 링크 걸기
# <!-- isotope : https://isotope.metafizzy.co/ -->
# <script src="/lib/isotope/isotope.pkgd.min.js"></script>
# <!-- isotope 이미지 겹침 문제로 사용 -->
# <script src="https://unpkg.com/imagesloaded@5/imagesloaded.pkgd.js"></script>

------------------------------------------------------------------------------------------------

# 9) easing 라이브러리
# (공홈 : https://gsgd.co.uk/sandbox/jquery/easing/)
# (cdn(진행), npm)
# 예) 처음(천천히) -> 중간(빨리) -> 끝(천천히) : 시간의 흐름(애니메이션)
# 예) 처음(빨리) -> 중간(빨리) -> 끝(천천히)   : 시간의 흐름(애니메이션)

------------------------------------------------------------------------------------------------

# 10) 달력 :
# 10-1) jquery-ui 달력 : (cdn 진행) index.html 
# 공홈 : https://jqueryui.com/datepicker/
# index.html : css link 삽입
# <link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
# index.html : js link (body) 삽입
# <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>

# 10-2) range calendar 달력 : (cdn 진행) index.html 
# 공홈 : https://www.daterangepicker.com/
# index.html : css link 삽입
# <link rel="stylesheet" href="css/daterangepicker.css" />
# index.html : js link (body) 삽입
# <script src="js/moment.min.js"></script>
# <script src="js/daterangepicker.js"></script>

------------------------------------------------------------------------------------------------

# TODO: 공통) 외부 lib 타입 없을 때 대처하는 방법

# 1) tsconfig.json 파일 - compilerOptions 속성에 아래 추가 : 
#     프로젝트시작위치/types - 이 위치에 타입을 인식하게 하는 경로 설정

"typeRoots": ["./types", "./node_modules/@types"], // 보통 types 폴더를 만들어 타입 정의

# 2) types/외부라이브러리명/index.d.ts 파일 생성 후 아래 추가

declare module '외부라이브러리명';

------------------------------------------------------------------------------------------------
