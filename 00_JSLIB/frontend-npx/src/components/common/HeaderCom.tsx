// src/components/common/HeaderCom.tsx : rfce
import React from "react";

import { Link } from "react-router-dom";

function headerCom() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Simple Coding
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            {/* Simple 메뉴 시작 */}
            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Simple
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to={"/bootstrap-icons"} className="dropdown-item">
                    Bootstrap-icons
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to={"/countup"} className="dropdown-item">
                    CountUp
                  </Link>
                </li>
                <li>
                  <Link to={"/countup-exam"} className="dropdown-item">
                    CountUp-Exam
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to={"/typed"} className="dropdown-item">
                    Typed
                  </Link>
                </li>
                <li>
                  <Link to={"/typed-exam"} className="dropdown-item">
                    Typed-Exam
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to={"/wow"} className="dropdown-item">
                    Wow
                  </Link>
                </li>
                <li>
                  <Link to={"/wow-exam"} className="dropdown-item">
                    Wow-Exam
                  </Link>
                </li>
              </ul>
            </li>
            {/* Simple 메뉴 끝 */}

            {/* Complex 메뉴 시작 */}
            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Complex
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to={"/simple-lightbox"} className="dropdown-item">
                    Simple-lightbox
                  </Link>
                </li>
                <li>
                  <Link to={"/simple-lightbox-exam"} className="dropdown-item">
                    Simple-lightbox-exam
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to={"/owl-carousel"} className="dropdown-item">
                    Carousel
                  </Link>
                </li>
                <li>
                  <Link to={"/owl-carousel-exam"} className="dropdown-item">
                    Carousel-Exam
                  </Link>
                </li>
                <li>
                  <Link to={"/owl-carousel-wow-exam"} className="dropdown-item">
                    Carousel-Wow-Exam
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to={"/isotope"} className="dropdown-item">
                    Isotope
                  </Link>
                </li>
                <li>
                  <Link to={"/isotope-exam"} className="dropdown-item">
                    Isotope-Exam
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to={"/easing"} className="dropdown-item">
                    Easing
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to={"/datepicker"} className="dropdown-item">datepicker Calendar</Link>
                </li>
                <li>
                  <Link to={"/daterange-picker"} className="dropdown-item">
                    daterange-picker Calendar
                  </Link>
                </li>
              </ul>
            </li>
            {/* Complex 메뉴 끝 */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default headerCom;
