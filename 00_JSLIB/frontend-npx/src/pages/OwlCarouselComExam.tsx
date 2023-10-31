// C:\Work\08_Pilot_Project\01_Blog\00_JSLIB\frontend-npx\src\pages\OwlCarouselComExam.tsx : rfce
import React, { useEffect } from "react";

import initMain from "../assets/js/initMain";

export default function OwlCarouselComExam() {
  useEffect(() => {
    initMain();
  }, []);

  return (
    // TODO: HTML
    <div>
      <div className="owl-carousel carousel-div-exam owl-theme">
        <div className="position-relative mb-5">
          <img
            className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
            src={require("../assets/img/gallery/thumb/01.jpg")}
            alt=""
          />
        </div>
        
        <div className="position-relative mb-5">
          <img
            className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
            src={require("../assets/img/gallery/thumb/02.jpg")}
            alt=""
          />
        </div>

        <div className="position-relative mb-5">
          <img
            className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
            src={require("../assets/img/gallery/thumb/03.jpg")}
            alt=""
          />
        </div>

        <div className="position-relative mb-5">
          <img
            className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
            src={require("../assets/img/gallery/thumb/04.jpg")}
            alt=""
          />
        </div>

        <div className="position-relative mb-5">
          <img
            className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
            src={require("../assets/img/gallery/thumb/05.jpg")}
            alt=""
          />
        </div>
        
        <div className="position-relative mb-5">
          <img
            className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
            src={require("../assets/img/gallery/thumb/06.jpg")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
