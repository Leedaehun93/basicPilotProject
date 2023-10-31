// C:\Work\08_Pilot_Project\01_Blog\00_JSLIB\frontend-npx\src\pages\IsotopeComExam.tsx : rfec
import React, { useEffect } from "react";
import initMain from "../assets/js/initMain";

function IsotopeComExam() {
    useEffect(() => {
        initMain();
      }, []);

  return (
    // TODO: HTML
    <div>
      <div className="row g-3">
        <div className="col-lg-12 text-center">
          <ul className="list-inline" id="exam-flters">
            {/* <!-- isotope 필터 정의 --> */}
            <li className="mx-3 active" data-filter="*">
              All Projects
            </li>
            <li className="mx-3" data-filter=".first">
              Gallery
            </li>
            <li className="mx-3" data-filter=".second">
              Portfolio
            </li>
            <li className="mx-3" data-filter=".third">
              Project
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- isotope 필터 : .first, .second --> */}
      <div className="row g-3 exam-container">
        <div className="col-lg-2 col-md-6 exam-item first">
          <div className="exam-img rounded overflow-hidden">
            <img
              className="img-fluid"
              src={require("../assets/img/gallery/thumb/01.jpg")}
              alt=""
            />
          </div>
        </div>

        <div className="col-lg-2 col-md-6 exam-item second">
          <div className="exam-img rounded overflow-hidden">
            <img
              className="img-fluid"
              src={require("../assets/img/portfolio/thumbnails/1.jpg")}
              alt=""
            />
          </div>
        </div>

        <div className="col-lg-2 col-md-6 exam-item third">
          <div className="exam-img rounded overflow-hidden">
            <img
              className="img-fluid"
              src={require("../assets/img/project/project-1.jpg")}
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-2 col-md-6 exam-item first">
          <div className="exam-img rounded overflow-hidden">
            <img
              className="img-fluid"
              src={require("../assets/img/gallery/thumb/02.jpg")}
              alt=""
            />
          </div>
        </div>

        <div className="col-lg-2 col-md-6 exam-item second">
          <div className="exam-img rounded overflow-hidden">
            <img
              className="img-fluid"
              src={require("../assets/img/portfolio/thumbnails/2.jpg")}
              alt=""
            />
          </div>
        </div>

        <div className="col-lg-2 col-md-6 exam-item third">
          <div className="exam-img rounded overflow-hidden">
            <img
              className="img-fluid"
              src={require("../assets/img/project/project-2.jpg")}
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-2 col-md-6 exam-item first">
          <div className="exam-img rounded overflow-hidden">
            <img
              className="img-fluid"
              src={require("../assets/img/gallery/thumb/03.jpg")}
              alt=""
            />
          </div>
        </div>

        <div className="col-lg-2 col-md-6 exam-item second">
          <div className="exam-img rounded overflow-hidden">
            <img
              className="img-fluid"
              src={require("../assets/img/portfolio/thumbnails/3.jpg")}
              alt=""
            />
          </div>
        </div>

        <div className="col-lg-2 col-md-6 exam-item third">
          <div className="exam-img rounded overflow-hidden">
            <img
              className="img-fluid"
              src={require("../assets/img/project/project-3.jpg")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IsotopeComExam;
