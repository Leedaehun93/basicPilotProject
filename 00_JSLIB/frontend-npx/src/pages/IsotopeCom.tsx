// C:\Work\08_Pilot_Project\01_Blog\00_JSLIB\frontend-npx\src\pages\IsotopeCom.tsx : rfce
import React, { useEffect } from "react";
import initMain from "../assets/js/initMain";

export default function IsotopeCom() {
  useEffect(() => {
    initMain();
  }, []);

  return (
    // TODO: HTML
    <div>
      {/* isotope 소메뉴 부분 시작 */}
      <div className="row g-3">
        <div className="col-lg-12 text-center">
          <ul className="list-inline" id="portfolio-flters">
            {/* <!-- isotopo 필터 정의 --> */}
            <li className="mx-3 active" data-filter="*">
              All Projects
            </li>
            <li className="mx-3" data-filter=".first">
              Basic Develop
            </li>
            <li className="mx-3" data-filter=".second">
              Advanced Develop
            </li>
          </ul>
        </div>
      </div>
      {/* isotope 소메뉴 부분 끝 */}

      {/* <!-- isotope 필터 : .first, .second --> 시작 */}
      <div className="row g-3 portfolio-container">
        <div className="col-lg-3 col-md-6 portfolio-item first">
          <div className="portfolio-img rounded overflow-hidden">
            <img
              className="img-fluid"
              src={require("../assets/img/project/project-1.jpg")}
              alt=""
            />
          </div>
        </div>

        <div className="col-lg-3 col-md-6 portfolio-item second">
          <div className="portfolio-img rounded overflow-hidden">
            <img
              className="img-fluid"
              src={require("../assets/img/project/project-2.jpg")}
              alt=""
            />
          </div>
        </div>

        <div className="col-lg-3 col-md-6 portfolio-item first">
          <div className="portfolio-img rounded overflow-hidden">
            <img
              className="img-fluid"
              src={require("../assets/img/project/project-3.jpg")}
              alt=""
            />
          </div>
        </div>

        <div className="col-lg-3 col-md-6 portfolio-item second">
          <div className="portfolio-img rounded overflow-hidden">
            <img
              className="img-fluid"
              src={require("../assets/img/project/project-4.jpg")}
              alt=""
            />
          </div>
        </div>

        <div className="col-lg-3 col-md-6 portfolio-item first">
          <div className="portfolio-img rounded overflow-hidden">
            <img
              className="img-fluid"
              src={require("../assets/img/project/project-5.jpg")}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <!-- isotope 필터 : .first, .second --> 끝 */}
    </div>
  );
}
