# 1) 패키지 설치 목록
# 1-1) react-router-dom : 메뉴 라이브러리
npm i react-router-dom
# 1-2) axios            : 벡엔드 연동 라이브러리
npm i axios
# 1-5) node-sass        : css precompiler
npm i sass

# 2) Material Page component 업그레이드 
# 과거 v4 -> v5 변경 설치
npm install @mui/material @emotion/react @emotion/styled

# 2-1) 소스에서 임포트 사용법 : <Pagination />
import Pagination from '@mui/material/Pagination';

# 3) npm install typed.js  : npm 설치
npm install typed.js

# 3-1) import 방법
import Typed from "typed.js";

# 4) npm i aos 설치
npm i aos
npm i @types/aos



# * 외부 라이브러리 타입이 없을 경우 처리 : 타입 설정
# 1) tsconfig.json 파일 - compilerOptions 속성에 아래 추가 : 프로젝트시작위치/types - 이 위치에 타입을 인식하게 하는 경로 설정
"typeRoots": ["./types", "./node_modules/@types"], // 보통 types 폴더를 만들어 타입 정의
# 2) types/외부라이브러리명/index.d.ts 파일 생성 후 아래 추가
declare module '외부라이브러리명';