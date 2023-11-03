/* C:\Work\08_Pilot_Project\01_Blog\01_JPA\03_high_thema\01_tour\frontend-typescript\src\components\common\Nav.tsx */
// 메뉴만 옮겨가는 공통 컴포넌트

import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      {/* 여기 */}
      {/* <!-- 머리말 시작 --> */}
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
      {/* <!-- 머리말 끝 --> */}

      {/* <!-- 메뉴 시작 --> */}
      <nav className="site-nav">
        <div className="container">
          <div className="site-navigation">
            <Link to="/" className="logo m-0">
              Tour <span className="text-primary">.</span>
            </Link>
            {/* 메뉴들 시작 */}
            <ul className="js-clone-nav d-none d-lg-inline-block text-left site-menu float-right">
              {/* home 메뉴 시작 */}
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              {/* home 메뉴 끝 */}

              {/* 드롭다운 메뉴 시작 */}
              <li className="has-children">
                <a href="#">Dropdown</a>
                <ul className="dropdown">
                  <li>
                    <Link to="/elements">Elements</Link>
                  </li>
                  <li>
                    <a href="#">Menu One</a>
                  </li>
                  <li className="has-children">
                    <a href="#">Menu Two</a>
                    <ul className="dropdown">
                      <li>
                        <a href="#">Sub Menu One</a>
                      </li>
                      <li>
                        <a href="#">Sub Menu Two</a>
                      </li>
                      <li>
                        <a href="#">Sub Menu Three</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Menu Three</a>
                  </li>
                </ul>
              </li>
              {/* 드롭다운 메뉴 끝 */}

              {/* 고객 시작 */}
              <li className="has-children">
                <Link to="#">고객</Link>
                <ul className="dropdown">
                  {/* 1st 드롭 메뉴 */}
                  <li>
                    <Link to="/customer">고객 조회</Link>
                  </li>
                  {/* 2nd 드롭 메뉴 */}
                  <li>
                    <Link to="/add-customer">고객 추가</Link>
                  </li>
                </ul>
              </li>
              {/* 고객 끝 */}

              {/* Q & A 시작 */}
              <li className="has-children">
                <Link to="#">Q & A</Link>
                <ul className="dropdown">
                  {/* 1st 드롭 메뉴 */}
                  <li>
                    <Link to="/qna">Q & A 조회</Link>
                  </li>
                  {/* 2nd 드롭 메뉴 */}
                  <li>
                    <Link to="/add-qna">Q & A 추가</Link>
                  </li>
                </ul>
              </li>
              {/* Q & A 끝 */}

              {/* 서비스 메뉴 시작 */}
              <li>
                <Link to="/services">Services</Link>
              </li>
              {/* 서비스 메뉴 끝 */}

              {/* 어바웃 메뉴 시작 */}
              <li>
                <Link to="/about">About</Link>
              </li>
              {/* 어바웃 메뉴 끝 */}

              {/* 컨택트 메뉴 시작 */}
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              {/* 컨택트 메뉴 끝 */}
            </ul>
            {/* 메뉴들 끝 */}

            <a
              href="#"
              className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              <span></span>
            </a>
          </div>
        </div>
      </nav>
      {/* <!-- 메뉴 끝 --> */}
    </>
  );
}
