/* C:\Work\08_Pilot_Project\01_Blog\01_JPA\03_high_thema\02_Menhrefr\frontend-typescript\src\components\common\HeaderCom.tsx */
import React from "react";

export default function HeaderCom() {
  return (
    <>
      {/* <!-- ======= Header ======= --> */}
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="/">Mentor</a>
          </h1>
          {/* <!-- Uncomment below if you prefer href use an image logo --> */}
          {/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <a className="active" href="/">
                  Home
                </a>
              </li>

              {/* About 메뉴 */}
              <li>
                <a href="/about">About</a>
              </li>

              {/* Courses 메뉴 */}
              <li>
                <a href="/courses">Courses</a>
              </li>

              {/* Trainers 메뉴 */}
              <li>
                <a href="/trainers">Trainers</a>
              </li>

              {/* Events 메뉴 */}
              <li>
                <a href="/events">Events</a>
              </li>

              {/* Pricing 메뉴 */}
              <li>
                <a href="/pricing">Pricing</a>
              </li>

              {/* customer 메뉴 */}
              <li className="dropdown">
                {/* 대메뉴 시작 */}
                <a href="#">
                  <span>고객</span> <i className="bi bi-chevron-down"></i>
                </a>
                {/* 대메뉴 끝 */}
                {/* 중메뉴 시작 */}
                <ul>
                  {/* 중메뉴 #1 */}
                  <li>
                    <a href="/customer">고객 조회</a>
                  </li>
                  {/* 중메뉴 #2 */}
                  <li>
                    <a href="/add-customer">고객 추가</a>
                  </li>
                </ul>
                {/* 중메뉴 끝 */}
              </li>

              {/* qna 메뉴 */}
              <li className="dropdown">
                {/* 대메뉴 시작 */}
                <a href="#">
                  <span>Q&A</span> <i className="bi bi-chevron-down"></i>
                </a>
                {/* 대메뉴 끝 */}
                {/* 중메뉴 시작 */}
                <ul>
                  {/* 중메뉴 #1 */}
                  <li>
                    <a href="/qna">Q&A 조회</a>
                  </li>
                  {/* 중메뉴 #2 */}
                  <li>
                    <a href="/add-qna">Q&A 추가</a>
                  </li>
                </ul>
                {/* 중메뉴 끝 */}
              </li>

              {/* Contact 메뉴 */}
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          {/* <!-- .navbar --> */}
          <a href="courses.html" className="get-started-btn">
            Get Started
          </a>
        </div>
      </header>
      {/* <!-- End Header --> */}
    </>
  );
}
