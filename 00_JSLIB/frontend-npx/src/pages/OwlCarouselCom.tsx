// C:\Work\08_Pilot_Project\01_Blog\00_JSLIB\frontend-npx\src\pages\OwlCarouselCom.tsx : rfce
import React, { useEffect } from "react";

import initMain from "../assets/js/initMain";

// 내가 만든 css(이미지 픽셀이 커서 조정)
import "../assets/css/OwlCarouselCom.css";

export default function OwlCarouselCom() {
  useEffect(() => {
    initMain();
  }, []);

  return (
    // TODO: HTML
    <div>
      <div className="owl-carousel carousel-div owl-theme">
        <div className="position-relative mb-5">
          <img
            className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
            src={require("../assets/img/testimonial/testimonial-1.jpg")}
            alt=""
          />
        </div>

        <div className="position-relative mb-5">
          <img
            className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
            src={require("../assets/img/testimonial/testimonial-2.jpg")}
            alt=""
          />
        </div>

        <div className="position-relative mb-5">
          <img
            className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
            src={require("../assets/img/testimonial/testimonial-3.jpg")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
