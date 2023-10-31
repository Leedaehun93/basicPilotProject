// C:\Work\08_Pilot_Project\01_Blog\01_JPA\01_easy_thema\01_stylish-portfolio\frontend-typescript\src\pages\Home.tsx : rfce
import React, { useEffect } from "react";
import initMain from "../assets/js/scripts";

// styles.css import : react 의 최고 부모 컴포넌트 (App.tsx)
import "../assets/css/styles.css";

export default function Home() {
  // 화면이 뜰 때 실행되는 이벤트
  useEffect(() => {
    initMain(); // 사이트 메뉴 실행}
  }, []);

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
          <h1 className="mb-1">Stylish Portfolio</h1>
          <h3 className="mb-5">
            <em>A Free Bootstrap Theme by Start Bootstrap</em>
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
      {/* <!-- Portfolio--> */}
      <section className="content-section" id="portfolio">
        <div className="container px-4 px-lg-5">
          <div className="content-section-heading text-center">
            <h3 className="text-secondary mb-0">Portfolio</h3>
            <h2 className="mb-5">Recent Projects</h2>
          </div>
          <div className="row gx-0">
            <div className="col-lg-6">
              <a className="portfolio-item" href="#!">
                <div className="caption">
                  <div className="caption-content">
                    <div className="h2">Stationary</div>
                    <p className="mb-0">
                      A yellow pencil with envelopes on a clean, blue backdrop!
                    </p>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio-1.jpg"
                  alt="..."
                />
              </a>
            </div>
            <div className="col-lg-6">
              <a className="portfolio-item" href="#!">
                <div className="caption">
                  <div className="caption-content">
                    <div className="h2">Ice Cream</div>
                    <p className="mb-0">
                      A dark blue background with a colored pencil, a clip, and
                      a tiny ice cream cone!
                    </p>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio-2.jpg"
                  alt="..."
                />
              </a>
            </div>
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
