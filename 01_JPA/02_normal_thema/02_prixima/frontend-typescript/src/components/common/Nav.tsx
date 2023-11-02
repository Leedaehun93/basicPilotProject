/* C:\Work\08_Pilot_Project\01_Blog\01_JPA\02_normal_thema\02_prixima\frontend-typescript\src\components\common\Nav.tsx */
// 메뉴만 옮겨가는 공통 컴포넌트
import React from "react";

function Nav() {
  return (
    <>
      {/* <!-- BOTTOM NAV --> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            Prixima<span className="dot">.</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#reviews">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">
                  Blog
                </a>
              </li>
            </ul>
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-brand ms-lg-3"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
