// C:\Work\08_Pilot_Project\01_Blog\00_JSLIB\frontend-npx\src\pages\WowCom.tsx : rfce
import React, { useEffect } from "react";

import initMain from "../assets/js/initMain";

export default function WowCom() {
  useEffect(() => {
    initMain();
  }, []);

  return (
    // TODO: HTML
    <div className="container-xxl py-6" id="about">
      <div className="container">
        <div className="row g-5">
          {/* 1st wow 시작 */}
          {/* 사용법 : wow bounceInUp data-wow-delay="0.1s" */}
          {/*   => html :  
          <div className="wow 애니메이션상수" data-wow-delay="지연시간s">
            대상태그
          </div>
         */}
          {/*   => js   :  
          new WOW().init();
        */}
          <div className="col-lg-3 wow bounceInUp" data-wow-delay="0.1s">
            <p className="mb-4">
              맛보기 강의자료와 유/무료 강의자료로 어려운 IT 기술을 쉽게 취득할
              수 있도록 도움을 드립니다.
            </p>
          </div>
          {/* 1st wow 끝 */}

          {/* 2nd wow 시작 */}
          {/* 사용법 : wow slideInLeft data-wow-delay="0.1s" */}
          <div className="col-lg-3 wow slideInLeft" data-wow-delay="0.5s">
            <p className="mb-4">
              이 때까지 온라인 강의 및 피드백을 들은 고객들에게 진심으로
              감사드립니다.
            </p>
          </div>
          {/* 2nd wow 끝 */}

          {/* 3rd wow 시작 */}
          {/* 사용법 : wow fadeInUp data-wow-delay="0.1s" */}
          <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.5s">
            <p className="mb-4">
              이 때까지 온라인 강의 및 피드백을 들은 고객들에게 진심으로
              감사드립니다.
            </p>
          </div>
          {/* 3rd wow 끝 */}

          {/* 4th wow 시작 */}
          {/* 사용법 : wow flipInX data-wow-delay="0.1s" */}
          <div className="col-lg-3 wow flipInX" data-wow-delay="0.5s">
            <p className="mb-4">
              이 때까지 온라인 강의 및 피드백을 들은 고객들에게 진심으로
              감사드립니다.
            </p>
          </div>
          {/* 4th wow 끝 */}
        </div>
      </div>
    </div>
  );
}
