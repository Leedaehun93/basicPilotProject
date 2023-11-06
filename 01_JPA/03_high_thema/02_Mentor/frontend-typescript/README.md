# 설치 패키지 
# 1) 메뉴 라이브러리 설치
npm i react-router-dom
npm i @types/react-router-dom

# 2) 벡엔드 연동 라이브러리 설치
npm i axios

# 3) pre css 컴파일러 : sass
npm i sass

# 4) Material Page component 업그레이드 
# 과거 v4 -> v5 변경 설치
npm i @mui/material @emotion/react @emotion/styled

# 4-1) 소스에서 임포트 사용법 : <Pagination />
import Pagination from '@mui/material/Pagination';

# 5) typescript jquery, jqueryui type 넣기
# 5-1) typescript jquery 사용
npm i --save-dev @types/jquery
npm i --save-dev @types/jqueryui


# 6) npm i aos 설치 === wowjs(날라다니는 lib)
npm i aos
npm i @types/aos

# 6-1) css import : App.tsx
import "aos/dist/aos.css";

# 6-2) js import : main.js
import AOS from "aos";

# 7) npm install typed.js  : npm 설치
# 공홈 : https://mattboldt.github.io/typed.js/ 
npm install typed.js 

# 7-1) import 방법
import Typed from "typed.js";

# 8) PureCounter npm
# 공홈 : https://github.com/srexi/purecounterjs
npm i @srexi/purecounterjs

# 8-1) PureCounter import : main.js
import PureCounter from "@srexi/purecounterjs";

# 공홈 : https://swiperjs.com/get-started#install-from-npm
# 9) npm i swiper === owl-carousel
npm i swiper
npm i @types/swiper

# 9-1) js import : main.js
import Swiper from 'swiper';

# 9-2) css import - App.tsx
import 'swiper/css';


# * 외부 라이브러리 타입이 없을 경우 처리 : 타입 설정
# 1) tsconfig.json 파일 - compilerOptions 속성에 아래 추가 : 프로젝트시작위치/types - 이 위치에 타입을 인식하게 하는 경로 설정
"typeRoots": ["./types", "./node_modules/@types"], // 보통 types 폴더를 만들어 타입 정의
# 2) types/외부라이브러리명/index.d.ts 파일 생성 후 아래 추가
declare module '외부라이브러리명';