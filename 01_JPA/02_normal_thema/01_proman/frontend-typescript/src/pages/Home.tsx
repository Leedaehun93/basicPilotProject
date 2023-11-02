// C:\Work\08_Pilot_Project\01_Blog\01_JPA\02_normal_thema\01_proman\frontend-typescript\src\pages\Home.tsx : rfce
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// 개발자 작성 css
import "../assets/css/style.css";
import initMain from "../assets/js/main";
// EMP import
import EmpList from "./basic/emp/EmpList";
import AddEmp from "./basic/emp/AddEmp";
import Emp from "./basic/emp/Emp";
// QNA import
import AddQna from "./basic/qna/AddQna";
import QnaList from "./basic/qna/QnaList";
import Qna from "./basic/qna/Qna";

// TODO: html -> react 고칠때 주의점
// 1) class -> className 수정
// 2) label 태그 for -> htmlFor 수정
// 3) html 태그 여느태그 반드시 닫는태그
// 예) <input id="detp"> => <input id="detp" />
//     <img src="경로"> => <img src="경로" />
// 4) html 속성에러발생시 빨간글씨로 에러 가이드 있음
//   예) tabindex="-1" => tabIndex={-1}

export default function Home() {
  // TODO: 바인딩 변수
  // emp 게시판 이름 저장 변수
  const [viewBoard, setViewBoard] = useState<String>("");

  // qna 게시판 이름 저장 변수
  const [viewQna, setViewQna] = useState<String>("");

  // 기본키(상세화면)를 저장 할 변수
  const [pid, setPid] = useState<Number>(0);

  // TODO: 함수 정의
  useEffect(() => {
    initMain();
  }, []);

  // emp 사원조회/추가 버튼 클릭 시 실행
  const handleChangeBoard = (viewBoard: string, pid = 0) => {
    setViewBoard(viewBoard); // 화면명 저장
    setPid(pid); // 기본키 저장
  };

  // emp 화면명에 따라 다른 컴포넌트를 보여주는 함수
  const changeBoard = () => {
    if (viewBoard === "empList") {
      // TODO: props : handleChangeBoard 함수를 전송
      return <EmpList handleChangeBoard={handleChangeBoard} />; // 전체조회
    } else if (viewBoard === "addEmp") {
      return <AddEmp />; // 추가생성
    } else if (viewBoard === "emp") {
      // TODO: props : Emp 컴포넌트에 eno 로 데이터 전송
      return <Emp eno={pid} />; // eno 로 데이터 전송
    } 
  };

  // qna 조회/추가 버튼 클릭시 실행되는 함수
  const handleChangeQna = (viewQna: string, pid = 0) => {
    setViewQna(viewQna); // 화면명 저장
    setPid(pid); // 기본키 저장
  };

  // qna 화면명에 따라 다른 컴포넌트를 보여주는 함수
  const changeQna = () => {
    if (viewQna === "qnaList") {
    // TODO: props : handleChangeQna 함수를 전송
      return <QnaList handleChangeQna={handleChangeQna} />; // 전체조회
    } else if (viewQna === "addQna") {
      return <AddQna />; // 추가생성
    } else if (viewQna === "qna") {
      // TODO: props : Emp 컴포넌트에 eno 로 데이터 전송
      return <Qna qno={pid} />; // qno 로 데이터 전송
    } 
  }

  return (
    // TODO: HTML
    <div data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="51">
      {/* <!-- Header Start (비데오 버튼) --> */}
      <div className="container-fluid bg-light my-6 mt-0" id="home">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 py-6 pb-0 pt-lg-0">
              <h3 className="text-primary mb-3">I'm</h3>
              <h1 className="display-3 mb-3">Kang TaeGyung</h1>
              <h2 className="typed-text-output d-inline"></h2>
              <div className="typed-text d-none">
                Web Designer, Web Developer, Front End Developer, Apps Designer,
                Apps Developer
              </div>
              <div className="d-flex align-items-center pt-5">
                <a href="" className="btn btn-primary py-3 px-4 me-5">
                  Download CV
                </a>
                {/* TODO: 유튜브 경로 추가 */}
                <button
                  type="button"
                  className="btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/embed/bZ3zapq9Jaw?si=IlHEcNig4jUMI7Wa"
                  data-bs-target="#videoModal"
                >
                  <span></span>
                </button>
                <h5 className="ms-4 mb-0 d-none d-sm-block">Play Video</h5>
              </div>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid" src="img/my-photo-1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}

      {/* <!-- Video Modal Start --> */}
      <div
        className="modal modal-video fade"
        id="videoModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">
                Youtube Video
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* <!-- 16:9 aspect ratio --> */}
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  id="video"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Video Modal End --> */}

      {/* <!-- About Start --> */}
      <div className="container-xxl py-6" id="about">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="d-flex align-items-center mb-5">
                <div className="years flex-shrink-0 text-center me-4">
                  <h1 className="display-1 mb-0">50</h1>
                  <h5 className="mb-0">Years</h5>
                </div>
                <h3 className="lh-base mb-0">
                  of working experience as a web designer & developer
                </h3>
              </div>
              <p className="mb-4">다수의 대규모 프로젝트를 통한 실무 경험</p>
              <p className="mb-3">
                <i className="far fa-check-circle text-primary me-3"></i>
                Afordable Prices
              </p>
              <p className="mb-3">
                <i className="far fa-check-circle text-primary me-3"></i>High
                Quality Product
              </p>
              <p className="mb-3">
                <i className="far fa-check-circle text-primary me-3"></i>On Time
                Project Delivery
              </p>
              <a className="btn btn-primary py-3 px-5 mt-3" href="">
                Read More
              </a>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <img
                    className="img-fluid rounded"
                    src="img/about-1.jpg"
                    alt=""
                  />
                </div>
                <div className="col-sm-6">
                  <img
                    className="img-fluid rounded"
                    src="img/about-2.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <h5 className="border-end pe-3 me-3 mb-0">Happy Clients</h5>
                <h2
                  className="text-primary fw-bold mb-0"
                  data-toggle="counter-up"
                >
                  900
                </h2>
              </div>
              <p className="mb-4">고객들에게 최상의 웹 경험을 전해드림</p>
              <div className="d-flex align-items-center mb-3">
                <h5 className="border-end pe-3 me-3 mb-0">
                  Projects Completed
                </h5>
                <h2
                  className="text-primary fw-bold mb-0"
                  data-toggle="counter-up"
                >
                  20
                </h2>
              </div>
              <p className="mb-0">
                SK , LG , 정부통합청사 등 다수의 프로젝트를 완벽히 수행한 경험
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Expertise Start --> */}
      <div className="container-xxl py-6 pb-5" id="skill">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h1 className="display-5 mb-5">Skills & Experience</h1>
              <p className="mb-4">실무형 프론트 & 벡엔드 경험을 보유</p>
              <h3 className="mb-4">My Skills</h3>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="font-weight-bold">
                        HTML & CSS & JS & Jquery
                      </h6>
                      <h6 className="font-weight-bold">95%</h6>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        aria-valuenow={95}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                  <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="font-weight-bold">React & Vue</h6>
                      <h6 className="font-weight-bold">85%</h6>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                  <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="font-weight-bold">
                        JSP & Java & Springboot
                      </h6>
                      <h6 className="font-weight-bold">90%</h6>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="font-weight-bold">Oracle DB</h6>
                      <h6 className="font-weight-bold">90%</h6>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                  <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="font-weight-bold">Docker & Kubernates</h6>
                      <h6 className="font-weight-bold">95%</h6>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-dark"
                        role="progressbar"
                        aria-valuenow={95}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                  <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="font-weight-bold">AWS & Oracle Cloud</h6>
                      <h6 className="font-weight-bold">85%</h6>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <ul className="nav nav-pills rounded border border-2 border-primary mb-5">
                <li className="nav-item w-50">
                  <a
                    className="nav-link w-100 py-3 fs-5 active"
                    data-bs-toggle="pill"
                    href="#tab-1"
                  >
                    Experience
                  </a>
                </li>
                <li className="nav-item w-50">
                  <a
                    className="nav-link w-100 py-3 fs-5"
                    data-bs-toggle="pill"
                    href="#tab-2"
                  >
                    Education
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <div className="row gy-5 gx-4">
                    <div className="col-sm-6">
                      <h5>UI Designer</h5>
                      <hr className="text-primary my-2" />
                      <p className="text-primary mb-1">2000 - 2045</p>
                      <h6 className="mb-0">Apex Software Inc</h6>
                    </div>
                    <div className="col-sm-6">
                      <h5>Product Designer</h5>
                      <hr className="text-primary my-2" />
                      <p className="text-primary mb-1">2000 - 2045</p>
                      <h6 className="mb-0">Apex Software Inc</h6>
                    </div>
                    <div className="col-sm-6">
                      <h5>Web Designer</h5>
                      <hr className="text-primary my-2" />
                      <p className="text-primary mb-1">2000 - 2045</p>
                      <h6 className="mb-0">Apex Software Inc</h6>
                    </div>
                    <div className="col-sm-6">
                      <h5>Apps Designer</h5>
                      <hr className="text-primary my-2" />
                      <p className="text-primary mb-1">2000 - 2045</p>
                      <h6 className="mb-0">Apex Software Inc</h6>
                    </div>
                  </div>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                  <div className="row gy-5 gx-4">
                    <div className="col-sm-6">
                      <h5>UI Design Course</h5>
                      <hr className="text-primary my-2" />
                      <p className="text-primary mb-1">2000 - 2045</p>
                      <h6 className="mb-0">Cambridge University</h6>
                    </div>
                    <div className="col-sm-6">
                      <h5>IOS Development</h5>
                      <hr className="text-primary my-2" />
                      <p className="text-primary mb-1">2000 - 2045</p>
                      <h6 className="mb-0">Cambridge University</h6>
                    </div>
                    <div className="col-sm-6">
                      <h5>Web Design</h5>
                      <hr className="text-primary my-2" />
                      <p className="text-primary mb-1">2000 - 2045</p>
                      <h6 className="mb-0">Cambridge University</h6>
                    </div>
                    <div className="col-sm-6">
                      <h5>Apps Design</h5>
                      <hr className="text-primary my-2" />
                      <p className="text-primary mb-1">2000 - 2045</p>
                      <h6 className="mb-0">Cambridge University</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Expertise End --> */}

      {/* <!-- Board Start --> */}
      <div className="container-fluid bg-light my-5 py-6" id="service">
        <div className="container">
          <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-6">
              <h1 className="display-5 mb-0">EMP</h1>
            </div>
            <div className="col-lg-6 text-lg-end">
              <Link
                to="#!"
                className="btn btn-primary py-3 px-5"
                onClick={() => handleChangeBoard("empList")}
              >
                Emp 조회
              </Link>
              <Link
                to="#!"
                className="btn btn-success py-3 px-5 ms-3"
                onClick={() => handleChangeBoard("addEmp")}
              >
                새글 쓰기
              </Link>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item bg-white rounded h-100 p-4 p-lg-5">
                {/* 답변형 게시판 화면 시작 */}
                {changeBoard()}
                {/* 답변형 게시판 화면 시작 */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Board End --> */}

      {/* <!-- Projects Start --> */}
      <div className="container-xxl py-6 pt-5" id="project">
        <div className="container">
          <div
            className="row g-5 mb-5 align-items-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="col-lg-6">
              <h1 className="display-5 mb-0">My Projects</h1>
            </div>
            <div className="col-lg-6 text-lg-end">
              <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
                <li className="mx-3 active" data-filter="*">
                  All Projects
                </li>
                <li className="mx-3" data-filter=".first">
                  UI/UX Design
                </li>
                <li className="mx-3" data-filter=".second">
                  Graphic Design
                </li>
              </ul>
            </div>
          </div>
          <div
            className="row g-4 portfolio-container wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="col-lg-4 col-md-6 portfolio-item first">
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src="img/project-1.jpg" alt="" />
                <div className="portfolio-btn">
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href="img/project-1.jpg"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye"></i>
                  </a>
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href=""
                  >
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item second">
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src="img/project-2.jpg" alt="" />
                <div className="portfolio-btn">
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href="img/project-2.jpg"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye"></i>
                  </a>
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href=""
                  >
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item first">
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src="img/project-3.jpg" alt="" />
                <div className="portfolio-btn">
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href="img/project-3.jpg"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye"></i>
                  </a>
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href=""
                  >
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item second">
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src="img/project-4.jpg" alt="" />
                <div className="portfolio-btn">
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href="img/project-4.jpg"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye"></i>
                  </a>
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href=""
                  >
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item first">
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src="img/project-5.jpg" alt="" />
                <div className="portfolio-btn">
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href="img/project-5.jpg"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye"></i>
                  </a>
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href=""
                  >
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item second">
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src="img/project-6.jpg" alt="" />
                <div className="portfolio-btn">
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href="img/project-6.jpg"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye"></i>
                  </a>
                  <a
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href=""
                  >
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Projects End --> */}

      {/* <!-- Team Start --> */}
      <div className="container-xxl py-6 pb-5" id="team">
        <div className="container">
          <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
            {/* 제목 시작 */}
            <div className="col-lg-6">
              <h1 className="display-5 mb-0">Q&A</h1>
            </div>
            {/* 제목 끝 */}
            {/* 버튼 시작 */}
            <div className="col-lg-6 text-lg-end">
              <a
                href="#!"
                className="btn btn-primary py-3 px-5"
                onClick={() => handleChangeQna("qnaList")}
              >
                Q&A 조회
              </a>
              <a
                href="#!"
                className="btn btn-success py-3 px-5 ms-3"
                onClick={() => handleChangeQna("addQna")}
              >
                새글 쓰기
              </a>
            </div>
            {/* 버튼 끝 */}
          </div>
          {/* team-text : 사용하면 글이 왼쪽에서 나옴 */}
          <div className="row g-4">
            <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item bg-white rounded h-100 p-4 p-lg-5">
                {/* TODO: Q&A 게시판 메뉴 #2 */}
                {changeQna()}
                {/* TODO: Q&A 게시판 메뉴 #2 */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}

      {/* <!-- Testimonial Start --> */}
      <div className="container-fluid bg-light py-5 my-5" id="testimonial">
        <div className="container-fluid py-5">
          <h1
            className="display-5 text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            Testimonial
          </h1>
          <div className="row justify-content-center">
            <div className="col-lg-3 d-none d-lg-block">
              <div className="testimonial-left h-100">
                <img
                  className="img-fluid wow fadeIn"
                  data-wow-delay="0.1s"
                  src="img/testimonial-1.jpg"
                  alt=""
                />
                <img
                  className="img-fluid wow fadeIn"
                  data-wow-delay="0.3s"
                  src="img/testimonial-2.jpg"
                  alt=""
                />
                <img
                  className="img-fluid wow fadeIn"
                  data-wow-delay="0.5s"
                  src="img/testimonial-3.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="owl-carousel testimonial-carousel">
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-5">
                    <img
                      className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
                      src="img/testimonial-1.jpg"
                      alt=""
                    />
                    <div className="testimonial-icon">
                      <i className="fa fa-quote-left text-primary"></i>
                    </div>
                  </div>
                  <p className="fs-5 fst-italic">
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor erat.
                  </p>
                  <hr className="w-25 mx-auto" />
                  <h5>Client Name</h5>
                  <span>Profession</span>
                </div>
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-5">
                    <img
                      className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
                      src="img/testimonial-2.jpg"
                      alt=""
                    />
                    <div className="testimonial-icon">
                      <i className="fa fa-quote-left text-primary"></i>
                    </div>
                  </div>
                  <p className="fs-5 fst-italic">
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor erat.
                  </p>
                  <hr className="w-25 mx-auto" />
                  <h5>Client Name</h5>
                  <span>Profession</span>
                </div>
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-5">
                    <img
                      className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
                      src="img/testimonial-3.jpg"
                      alt=""
                    />
                    <div className="testimonial-icon">
                      <i className="fa fa-quote-left text-primary"></i>
                    </div>
                  </div>
                  <p className="fs-5 fst-italic">
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor erat.
                  </p>
                  <hr className="w-25 mx-auto" />
                  <h5>Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-none d-lg-block">
              <div className="testimonial-right h-100">
                <img
                  className="img-fluid wow fadeIn"
                  data-wow-delay="0.1s"
                  src="img/testimonial-1.jpg"
                  alt=""
                />
                <img
                  className="img-fluid wow fadeIn"
                  data-wow-delay="0.3s"
                  src="img/testimonial-2.jpg"
                  alt=""
                />
                <img
                  className="img-fluid wow fadeIn"
                  data-wow-delay="0.5s"
                  src="img/testimonial-3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}

      {/* <!-- Contact Start --> */}
      <div className="container-xxl pb-5" id="contact">
        <div className="container py-5">
          <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-6">
              <h1 className="display-5 mb-0">Let's Work Together</h1>
            </div>
            <div className="col-lg-6 text-lg-end">
              <a className="btn btn-primary py-3 px-5" href="">
                Say Hello
              </a>
            </div>
          </div>
          <div className="row g-5">
            <div
              className="col-lg-5 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <p className="mb-2">My office:</p>
              <h3 className="fw-bold">123 Street, New York, USA</h3>
              <hr className="w-100" />
              <p className="mb-2">Call me:</p>
              <h3 className="fw-bold">+012 345 6789</h3>
              <hr className="w-100" />
              <p className="mb-2">Mail me:</p>
              <h3 className="fw-bold">info@example.com</h3>
              <hr className="w-100" />
              <p className="mb-2">Follow me:</p>
              <div className="d-flex pt-2">
                <a className="btn btn-square btn-primary me-2" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-square btn-primary me-2" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-square btn-primary me-2" href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-square btn-primary me-2" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-7 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <p className="mb-4">
                The contact form is currently inactive. Get a functional and
                working contact form with Ajax & PHP in a few minutes. Just copy
                and paste the files, add a little code and you're done.{" "}
                <a href="https://htmlcodex.com/contact-form">Download Now</a>.
              </p>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: 100 + "px" }}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary py-3 px-5" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}

      {/* <!-- Map Start --> */}
      <div
        className="container-xxl pt-5 px-0 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container-xxl pt-5 px-0">
          <div className="bg-dark">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              frameBorder="0"
              style={{ width: 100 + "%", height: 450 + "px", border: 0 }}
              allowFullScreen={true}
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </div>
      </div>
      {/* <!-- Map End --> */}

      {/* <!-- Copyright Start --> */}
      <div className="container-fluid bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a className="border-bottom text-secondary" href="#">
                Your Site Name
              </a>
              , All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By{" "}
              <a
                className="border-bottom text-secondary"
                href="https://htmlcodex.com"
              >
                HTML Codex
              </a>
              <br />
              Distributed By:{" "}
              <a
                className="border-bottom"
                href="https://themewagon.com"
                target="_blank"
              >
                ThemeWagon
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Copyright End --> */}

      {/* <!-- Back to Top --> */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
} // end of Home
