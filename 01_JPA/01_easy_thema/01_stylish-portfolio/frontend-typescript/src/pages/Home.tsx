// C:\Work\08_Pilot_Project\01_Blog\01_JPA\01_easy_thema\01_stylish-portfolio\frontend-typescript\src\pages\Home.tsx : rfce
import React, { useEffect, useState } from "react";
import initMain from "../assets/js/scripts";

// styles.css import : react 의 최고 부모 컴포넌트 (App.tsx)
import "../assets/css/styles.css";
import DeptList from "./basic/dept/DeptList";
import AddDept from "./basic/dept/AddDept";
import CustomerList from "./basic/customer/CustomerList";
import AddCustomer from "./basic/customer/AddCustomer";
import Dept from "./basic/dept/Dept";

export default function Home() {
  // TODO: 바인딩 변수
  // 화면명을 저장 할 변수
  const [viewName, setViewName] = useState<string>("");
  // TODO : 기본키를 저장 할 변수
  const [pid, setPid] = useState<number>(0);
  // 화면이 뜰 때 실행되는 이벤트
  useEffect(() => {
    initMain(); // 사이트 메뉴 실행}
  }, []);

  // TODO : 함수 정의
  // 버튼 메뉴에 따라 다른 화면 보여주기 함수 : 클릭 이벤트 함수
  const handleChange = (viewName: string, pid = 0) => {
    setViewName(viewName); // 클릭하면 viewName 변수에 저장(화면에 저장)
    setPid(pid); // 기본키 저장
  };

  // 화면 바꿔 보여주기 함수
  const changeView = () => {
    if (viewName === "deptList") {
    // props : 자식쪽으로 함수(handleChange) 전달
      return <DeptList handleChange={handleChange} />;
    } else if (viewName === "addDept") {
      return <AddDept />;
    } else if(viewName === "dept") {
      // props : 자식쪽으로 변수(dno) 전달
      return <Dept dno={pid} />
    } else if (viewName === "customerList") {
      return <CustomerList />;
    } else if (viewName === "addCustomer") {
      return <AddCustomer />;
    }
  };

  return (
    // TODO: HTML
    <div id="page-top">
      {/* <!-- Navigation--> */}
      <a className="menu-toggle rounded" href="#">
        <i className="fas fa-bars"></i>
      </a>
      <nav id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <a href="#page-top">Start Bootstrap</a>
          </li>
          <li className="sidebar-nav-item">
            <a href="#page-top">Home</a>
          </li>
          <li className="sidebar-nav-item">
            <a href="#about">About</a>
          </li>
          <li className="sidebar-nav-item">
            <a href="#services">Services</a>
          </li>
          <li className="sidebar-nav-item">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="sidebar-nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {/* <!-- Header--> */}
      <header className="masthead d-flex align-items-center">
        <div className="container px-4 px-lg-5 text-center">
          <h1 className="mb-1">Simple Coding</h1>
          <h3 className="mb-5">
            <em>안녕하세요 저의 블로거에 오신것을 환영합니다.</em>
          </h3>
          <a className="btn btn-primary btn-xl" href="#about">
            Find Out More
          </a>
        </div>
      </header>
      {/* <!-- About--> */}
      <section className="content-section bg-light" id="about">
        <div className="container px-4 px-lg-5 text-center">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-10">
              <h2>
                Stylish Portfolio is the perfect theme for your next project!
              </h2>
              <p className="lead mb-5">
                This theme features a flexible, UX friendly sidebar menu and
                stock photos from our friends at
                <a href="https://unsplash.com/">Unsplash</a>!
              </p>
              <a className="btn btn-dark btn-xl" href="#services">
                What We Offer
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Services--> */}
      <section
        className="content-section bg-primary text-white text-center"
        id="services"
      >
        <div className="container px-4 px-lg-5">
          <div className="content-section-heading">
            <h3 className="text-secondary mb-0">Services</h3>
            <h2 className="mb-5">What We Offer</h2>
          </div>
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className="icon-screen-smartphone"></i>
              </span>
              <h4>
                <strong>Responsive</strong>
              </h4>
              <p className="text-faded mb-0">Looks great on any screen size!</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className="icon-pencil"></i>
              </span>
              <h4>
                <strong>Redesigned</strong>
              </h4>
              <p className="text-faded mb-0">
                Freshly redesigned for Bootstrap 5.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className="icon-like"></i>
              </span>
              <h4>
                <strong>Favorited</strong>
              </h4>
              <p className="text-faded mb-0">
                Millions of users
                <i className="fas fa-heart"></i>
                Start Bootstrap!
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className="icon-mustache"></i>
              </span>
              <h4>
                <strong>Question</strong>
              </h4>
              <p className="text-faded mb-0">I mustache you a question...</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Callout--> */}
      <section className="callout">
        <div className="container px-4 px-lg-5 text-center">
          <h2 className="mx-auto mb-5">
            Welcome to
            <em>your</em>
            next website!
          </h2>
          <a
            className="btn btn-primary btn-xl"
            href="https://startbootstrap.com/theme/stylish-portfolio/"
          >
            Download Now!
          </a>
        </div>
      </section>

      {/* <!-- Portfolio : 부서/고객 메뉴 -->
       */}
      <section className="content-section" id="portfolio">
        <div className="container px-4 px-lg-5">
          <div className="content-section-heading text-center">
            <h3 className="text-secondary mb-0">Portfolio</h3>
            <h2 className="mb-5">Recent Projects</h2>
          </div>
          {/* 부서 시작 */}
          <div className="row gx-0">
            <div className="col-lg-6">
              <a className="portfolio-item" href="#!">
                <div className="caption">
                  <div className="caption-content">
                    <div className="h2">Department 예제</div>
                    <p className="mb-0">
                      부서게시판을 만들면서 <br />
                      React & Springboot & Oracle 연동하기
                    </p>
                    <span
                      className="badge text-bg-success"
                      onClick={() => handleChange("deptList")}
                    >
                      Department 조회
                    </span>

                    <span
                      className="badge text-bg-danger"
                      onClick={() => handleChange("addDept")}
                    >
                      Department 추가
                    </span>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio-1.jpg"
                  alt="..."
                />
              </a>
            </div>
            {/* 부서 끝 */}

            {/* 고객 시작 */}
            <div className="col-lg-6">
              <a className="portfolio-item" href="#!">
                <div className="caption">
                  <div className="caption-content">
                    <div className="h2">Customer 예제</div>
                    <p className="mb-0">
                      Customer 게시판을 만들면서 <br />
                      React & Springboot & Oracle 연동 예제 2
                    </p>
                    {/* 버튼 메뉴 시작 */}
                    <span
                      className="badge text-bg-warning"
                      onClick={() => handleChange("customerList")}
                    >
                      Customer 조회
                    </span>

                    <span
                      className="badge text-bg-info"
                      onClick={() => handleChange("addCustomer")}
                    >
                      Customer 추가
                    </span>
                    {/* 버튼 메뉴 끝 */}
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio-2.jpg"
                  alt="..."
                />
              </a>
            </div>
            {/* 고객 끝 */}

            <div className="col-lg-6">
              <a className="portfolio-item" href="#!">
                <div className="caption">
                  <div className="caption-content">
                    <div className="h2">Strawberries</div>
                    <p className="mb-0">
                      Strawberries are such a tasty snack, especially with a
                      little sugar on top!
                    </p>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio-3.jpg"
                  alt="..."
                />
              </a>
            </div>
            <div className="col-lg-6">
              <a className="portfolio-item" href="#!">
                <div className="caption">
                  <div className="caption-content">
                    <div className="h2">Workspace</div>
                    <p className="mb-0">
                      A yellow workspace with some scissors, pencils, and other
                      objects.
                    </p>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio-4.jpg"
                  alt="..."
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TODO: 여기 */}
      {/* <!-- Portfolio - result : 부서/고객 결과 --> */}
      <section className="content-section" id="portfolio">
        <div className="container px-4 px-lg-5">
          {/* 제목 시작 */}
          <div className="content-section-heading text-center">
            <h3 className="text-secondary mb-0">맛보기 샘플 - 결과</h3>
            <h2 className="mb-5">Recent Result</h2>
          </div>
          {/* 제목 끝 */}
          {/* 게시판 결과 시작 */}
          <div className="row gx-0">
            <div className="col-lg-12">{changeView()}</div>
          </div>
          {/* 게시판 결과 끝 */}
        </div>
      </section>

      {/* <!-- Call to Action--> */}
      <section className="content-section bg-primary text-white">
        <div className="container px-4 px-lg-5 text-center">
          <h2 className="mb-4">
            The buttons below are impossible to resist...
          </h2>
          <a className="btn btn-xl btn-light me-4" href="#!">
            Click Me!
          </a>
          <a className="btn btn-xl btn-dark" href="#!">
            Look at Me!
          </a>
        </div>
      </section>

      {/* <!-- Map--> */}
      <div className="map" id="contact">
        <iframe src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed"></iframe>
        <br />
        <small>
          <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A"></a>
        </small>
      </div>
      {/* <!-- Footer--> */}
      <footer className="footer text-center">
        <div className="container px-4 px-lg-5">
          <ul className="list-inline mb-5">
            <li className="list-inline-item">
              <a
                className="social-link rounded-circle text-white mr-3"
                href="#!"
              >
                <i className="icon-social-facebook"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="social-link rounded-circle text-white mr-3"
                href="#!"
              >
                <i className="icon-social-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="social-link rounded-circle text-white" href="#!">
                <i className="icon-social-github"></i>
              </a>
            </li>
          </ul>
          <p className="text-muted small mb-0">
            Copyright &copy; Your Website 2023
          </p>
        </div>
      </footer>
      {/* <!-- Scroll to Top Button--> */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
      {/* <!-- Bootstrap core JS--> */}
      {/* <!-- Core theme JS--> */}
    </div>
  );
}
