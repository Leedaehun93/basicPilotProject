// C:\Work\08_Pilot_Project\01_Blog\00_JSLIB\frontend-npx\src\pages\CountUp.tsx : rfce
// 컴포넌트 이름 : 첫글자 대문자로 만들기(안만들면 에러발생)

import React, { useEffect } from "react";

import initMain from "../assets/js/initMain";

function CountUp() {
  // 화면이 뜰 때 실행되는 이벤트 :
  useEffect(() => {
    // 실행문
    initMain();
  }, []);

  return (
    // TODO: HTML
    <div>
      {/* 사용법 : 
            => TODO: html 부분
                <태그 data-toggle="변수명">
                    숫자
                </태그>
            => TODO: js 부분
                ($(선택자) as any).counterUp({
                    delay: 숫자, // 지연시간(1/1000초)
                    time: 숫자   // 화면표시가 끝나는 시간(1/1000초)
                })
         */}
      <h2 className="text-primary fw-bold mb-0" data-toggle="counter-up">
        10000
      </h2>
    </div>
  );
}

export default CountUp;
