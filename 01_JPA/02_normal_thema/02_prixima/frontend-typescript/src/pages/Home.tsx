/* C:\Work\08_Pilot_Project\01_Blog\01_JPA\02_normal_thema\02_prixima\frontend-typescript\src\pages\Home.tsx */
import React, { useEffect, useState } from "react";
import Nav from "../components/common/Nav";

// 개발자가 직접 만든 css import
import "../assets/css/style.css";
import initMain from "../assets/js/app";

// qna import
import AddQna from "./basic/qna/AddQna";
import QnaList from "./basic/qna/QnaList";
import Qna from "./basic/qna/Qna";

export default function Home() {
  // TODO: 변수 정의
  // 화면명 저장 변수
  const [viewQna, setViewQna] = useState<string>("");
  // 기본키 저장 변수
  const [pid, setPid] = useState<Number>(0);

  // TODO: 함수 정의
  useEffect(() => {
    initMain();
  }, []);

  // qna 메뉴를 클릭했을 때 실행되는 함수
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
        // TODO: props : Qna 컴포넌트에 qno 로 데이터 전송
        return <Qna qno={pid} />; // qno 로 데이터 전송
      } 
    }

  return (
    // TODO: TypeScript와 JSX (TSX)
    <>
      {/* <!-- TOP NAV --> */}{" "}
      <div className="top-nav" id="home">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-auto">
              <p>
                {" "}
                <i className="bx bxs-envelope"></i> info@example.com
              </p>
              <p>
                {" "}
                <i className="bx bxs-phone-call"></i> 123 456-7890
              </p>
            </div>
            <div className="col-auto social-icons">
              <a href="#">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#">
                <i className="bx bxl-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- BOTTOM NAV --> */}
      <Nav />
      {/* <!-- SLIDER --> */}
      <div className="owl-carousel owl-theme hero-slider">
        <div className="slide slide1">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center text-white">
                <h6 className="text-white text-uppercase">
                  design Driven for professional
                </h6>
                <h1 className="display-3 my-4">
                  We craft digital
                  <br />
                  experiances
                </h1>
                <a href="#" className="btn btn-brand">
                  Get Started
                </a>
                <a href="#" className="btn btn-outline-light ms-3">
                  Our work
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="slide slide2">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-10 offset-lg-1 text-white">
                <h6 className="text-white text-uppercase">
                  We craft digital experiances
                </h6>
                <h1 className="display-3 my-4">
                  Design Driven For <br />
                  Professionals
                </h1>
                <a href="#" className="btn btn-brand">
                  Get Started
                </a>
                <a href="#" className="btn btn-outline-light ms-3">
                  Our work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ABOUT --> */}
      <section id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 py-5">
              <div className="row">
                <div className="col-12">
                  <div className="info-box">
                    <img src="img/icon6.png" alt="" />
                    <div className="ms-4">
                      <h5>Digital Marketing</h5>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-4">
                  <div className="info-box">
                    <img src="img/icon4.png" alt="" />
                    <div className="ms-4">
                      <h5>E-mail Marketing</h5>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-4">
                  <div className="info-box">
                    <img src="img/icon5.png" alt="" />
                    <div className="ms-4">
                      <h5>Buisness Marketing</h5>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <img src="img/about.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- MILESTONE --> */}
      <section id="milestone">
        <div className="container">
          <div className="row text-center justify-content-center gy-4">
            <div className="col-lg-2 col-sm-6">
              <h1 className="display-4">90K+</h1>
              <p className="mb-0">Happy Clients</p>
            </div>
            <div className="col-lg-2 col-sm-6">
              <h1 className="display-4">45M</h1>
              <p className="mb-0">Lines of code</p>
            </div>
            <div className="col-lg-2 col-sm-6">
              <h1 className="display-4">190</h1>
              <p className="mb-0">Total Downloads</p>
            </div>
            <div className="col-lg-2 col-sm-6">
              <h1 className="display-4">380K</h1>
              <p className="mb-0">YouTube Subscribers</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- 1 --> */}
      <section id="services" className="text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="intro">
                <h6>Our Services</h6>
                <h1>What We Do?</h1>
                <p className="mx-auto">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="service">
                <img src="img/icon1.png" alt="" />
                <h5>Digital Marketing</h5>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service">
                <img src="img/icon2.png" alt="" />
                <h5>Logo Designing</h5>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service">
                <img src="img/icon3.png" alt="" />
                <h5>Buisness consulting</h5>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service">
                <img src="img/icon4.png" alt="" />
                <h5>Videography</h5>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service">
                <img src="img/icon5.png" alt="" />
                <h5>Brand Identity</h5>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service">
                <img src="img/icon6.png" alt="" />
                <h5>Ethical Hacking</h5>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- 2 --> */}
      <section className="bg-light" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="intro">
                <h6>Work</h6>
                <h1>Successful projects</h1>
                <p className="mx-auto">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="projects-slider" className="owl-theme owl-carousel">
          <div className="project">
            <div className="overlay"></div>
            <img src="img/project1.jpg" alt="" />
            <div className="content">
              <h2>Consulting Marketing</h2>
              <h6>Website Design</h6>
            </div>
          </div>
          <div className="project">
            <div className="overlay"></div>
            <img src="img/project2.jpg" alt="" />
            <div className="content">
              <h2>Consulting Marketing</h2>
              <h6>Website Design</h6>
            </div>
          </div>
          <div className="project">
            <div className="overlay"></div>
            <img src="img/project3.jpg" alt="" />
            <div className="content">
              <h2>Consulting Marketing</h2>
              <h6>Website Design</h6>
            </div>
          </div>
          <div className="project">
            <div className="overlay"></div>
            <img src="img/project4.jpg" alt="" />
            <div className="content">
              <h2>Consulting Marketing</h2>
              <h6>Website Design</h6>
            </div>
          </div>
          <div className="project">
            <div className="overlay"></div>
            <img src="img/project5.jpg" alt="" />
            <div className="content">
              <h2>Consulting Marketing</h2>
              <h6>Website Design</h6>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- 3 --> */}
      <section id="team">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="intro">
                <h6>Team</h6>
                <h1>Team Members</h1>
                <p className="mx-auto">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-8">
              <div className="team-member">
                <div className="image">
                  <img src="img/team_1.jpg" alt="" />
                  <div className="social-icons">
                    <a href="#">
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="bx bxl-pinterest"></i>
                    </a>
                  </div>
                  <div className="overlay"></div>
                </div>

                <h5>Marvin McKinney</h5>
                <p>Marketing Coordinator</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <div className="team-member">
                <div className="image">
                  <img src="img/team_2.jpg" alt="" />
                  <div className="social-icons">
                    <a href="#">
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="bx bxl-pinterest"></i>
                    </a>
                  </div>
                  <div className="overlay"></div>
                </div>

                <h5>Kathryn Murphy</h5>
                <p>Ethical Hacker</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <div className="team-member">
                <div className="image">
                  <img src="img/team_3.jpg" alt="" />
                  <div className="social-icons">
                    <a href="#">
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="bx bxl-pinterest"></i>
                    </a>
                  </div>
                  <div className="overlay"></div>
                </div>

                <h5>Darrell Steward</h5>
                <p>Software Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  <!-- 4 --> */}
      <section className="bg-light" id="reviews">
        <div className="owl-theme owl-carousel reviews-slider container">
          <div className="review">
            <div className="person">
              <img src="img/team_1.jpg" alt="" />
              <h5>Ralph Edwards</h5>
              <small>Market Development Manager</small>
            </div>
            <h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              quis, rem culpa labore voluptate ullam! In, nostrum. Dicta, vero
              nihil. Delectus minus vitae rerum voluptatum, excepturi incidunt
              ut, enim nam exercitationem optio ducimus!
            </h3>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <i className="bx bxs-quote-alt-left"></i>
          </div>
          <div className="review">
            <div className="person">
              <img src="img/team_2.jpg" alt="" />
              <h5>Ralph Edwards</h5>
              <small>Market Development Manager</small>
            </div>
            <h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              quis, rem culpa labore voluptate ullam! In, nostrum. Dicta, vero
              nihil. Delectus minus vitae rerum voluptatum, excepturi incidunt
              ut, enim nam exercitationem optio ducimus!
            </h3>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <i className="bx bxs-quote-alt-left"></i>
          </div>
          <div className="review">
            <div className="person">
              <img src="img/team_3.jpg" alt="" />
              <h5>Ralph Edwards</h5>
              <small>Market Development Manager</small>
            </div>
            <h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
              quis, rem culpa labore voluptate ullam! In, nostrum. Dicta, vero
              nihil. Delectus minus vitae rerum voluptatum, excepturi incidunt
              ut, enim nam exercitationem optio ducimus!
            </h3>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <i className="bx bxs-quote-alt-left"></i>
          </div>
        </div>
      </section>
      {/* <!-- TODO: 5 블로그 --> */}
      {/* qna 게시판 메뉴 */}
      <section id="blog">
        <div className="container">
          {/* Blog Post 시작 */}
          <div className="row">
            <div className="col-12">
              <div className="intro">
                <h6>Blog</h6>
                <h1>Blog Posts</h1>
                <p className="mx-auto">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old
                </p>
              </div>
            </div>
          </div>
          {/* Blog Post 끝 */}

          {/* qna 게시판 시작 */}
          <div className="row">
            {/* qna 게시판 */}
            <div className="col-md-4">
              <article className="blog-post">
                <img src="img/project5.jpg" alt="" />
                {/* 제목 시작 */}
                <a href="#" className="tag">
                  Q & A 예제
                </a>
                {/* 제목 끝 */}
                {/* 본문 시작 */}
                <div className="content">
                  <small>React & Springboot & Oracle</small>
                  <h5>Q & A 게시판 예제</h5>
                  <p>
                    <button className="btn btn-primary btn-sm"
                    onClick={()=>handleChangeQna("qnaList")}
                    >Q&A 조회</button>
                    &nbsp; &nbsp;
                    <button className="btn btn-success btn-sm"
                    onClick={()=>handleChangeQna("addQna")}
                    >Q&A 추가</button>
                  </p>
                </div>
                {/* 본문 끝 */}
              </article>
            </div>
            {/* programming */}
            <div className="col-md-4">
              <article className="blog-post">
                <img src="img/project4.jpg" alt="" />
                <a href="#" className="tag">
                  Programming
                </a>
                <div className="content">
                  <small>01 Dec, 2022</small>
                  <h5>Web Design trends in 2022</h5>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from
                  </p>
                </div>
              </article>
            </div>
            {/* marketing */}
            <div className="col-md-4">
              <article className="blog-post">
                <img src="img/project2.jpg" alt="" />
                <a href="#" className="tag">
                  Marketing
                </a>
                <div className="content">
                  <small>01 Dec, 2022</small>
                  <h5>Web Design trends in 2022</h5>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from
                  </p>
                </div>
              </article>
            </div>
          </div>
          {/* qna 게시판 끝 */}

          {/* qna 결과 화면 */}
          <div className="row">
            <div className="col-md-12">
              {/* 게시판 실행 */}
              {changeQna()}
              </div>
          </div>
        </div>
      </section>
      {/* <!-- footer --> */}
      <footer>
        <div className="footer-top text-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h4 className="navbar-brand">
                  Prixima<span className="dot">.</span>
                </h4>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from
                </p>
                <div className="col-auto social-icons">
                  <a href="#">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxl-pinterest"></i>
                  </a>
                </div>
                <div className="col-auto conditions-section">
                  <a href="#">privacy</a>
                  <a href="#">terms</a>
                  <a href="#">disclaimer</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <p className="mb-0">Copyright vicpra 2022. All rights Reserved</p>{" "}
          Distributed By <a href="https://themewagon.com">ThemeWagon</a>
        </div>
      </footer>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-body p-0">
              <div className="container-fluid">
                <div className="row gy-4">
                  <div
                    className="col-lg-4 col-sm-12 bg-cover"
                    style={{
                      backgroundImage: "url(img/c2.jpg)",
                      minHeight: 300 + "px",
                    }}
                  >
                    <div></div>
                  </div>
                  <div className="col-lg-8">
                    <form className="p-lg-5 col-12 row g-3">
                      <div>
                        <h1>Get in touch</h1>
                        <p>
                          Fell free to contact us and we will get back to you as
                          soon as possible
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="userName" className="form-label">
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Jon"
                          id="userName"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="userName" className="form-label">
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Doe"
                          id="userName"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="userName" className="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Johndoe@example.com"
                          id="userName"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-12">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Enter Message
                        </label>
                        <textarea
                          name=""
                          placeholder="This is looking great and nice."
                          className="form-control"
                          id=""
                          rows={4}
                        ></textarea>
                      </div>

                      <div className="col-12">
                        <button type="submit" className="btn btn-brand">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ); // end of HTML return
} // end of Home
