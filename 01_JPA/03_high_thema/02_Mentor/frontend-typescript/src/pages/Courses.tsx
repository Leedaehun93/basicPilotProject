/* C:\Work\08_Pilot_Project\01_Blog\01_JPA\03_high_thema\02_Mentor\frontend-typescript\src\pages\Courses.tsx */
import React, { useEffect } from "react";
import initMain from "../assets/js/main";

export default function Courses() {
  useEffect(() => {
    initMain();
  }, []);

  return (
    // TODO: JSX
    <>
      <main id="main" data-aos="fade-in">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <div className="breadcrumbs">
          <div className="container">
            <h2>Courses</h2>
            <p>
              Est dolorum ut non facere possimus quibusdam eligendi voluptatem.
              Quia id aut similique quia voluptas sit quaerat debitis. Rerum
              omnis ipsam aperiam consequatur laboriosam nemo harum praesentium.{" "}
            </p>
          </div>
        </div>
        {/* <!-- End Breadcrumbs --> */}

        {/* <!-- ======= Courses Section ======= --> */}
        <section id="courses" className="courses">
          <div className="container" data-aos="fade-up">
            <div className="row" data-aos="zoom-in" data-aos-delay="100">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="course-item">
                  <img
                    src="assets/img/course-1.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4>Web Development</h4>
                      <p className="price">$169</p>
                    </div>

                    <h3>
                      <a href="course-details.html">Website Design</a>
                    </h3>
                    <p>
                      Et architecto provident deleniti facere repellat nobis
                      iste. Id facere quia quae dolores dolorem tempore.
                    </p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <img
                          src="assets/img/trainers/trainer-1.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <span>Antonio</span>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <i className="bx bx-user"></i>&nbsp;50 &nbsp;&nbsp;
                        <i className="bx bx-heart"></i>&nbsp;65
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Course Item--> */}

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="course-item">
                  <img
                    src="assets/img/course-2.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4>Marketing</h4>
                      <p className="price">$250</p>
                    </div>

                    <h3>
                      <a href="course-details.html">
                        Search Engine Optimization
                      </a>
                    </h3>
                    <p>
                      Et architecto provident deleniti facere repellat nobis
                      iste. Id facere quia quae dolores dolorem tempore.
                    </p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <img
                          src="assets/img/trainers/trainer-2.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <span>Lana</span>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <i className="bx bx-user"></i>&nbsp;35 &nbsp;&nbsp;
                        <i className="bx bx-heart"></i>&nbsp;42
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Course Item--> */}

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="course-item">
                  <img
                    src="assets/img/course-3.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4>Content</h4>
                      <p className="price">$180</p>
                    </div>

                    <h3>
                      <a href="course-details.html">Copywriting</a>
                    </h3>
                    <p>
                      Et architecto provident deleniti facere repellat nobis
                      iste. Id facere quia quae dolores dolorem tempore.
                    </p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <img
                          src="assets/img/trainers/trainer-3.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <span>Brandon</span>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <i className="bx bx-user"></i>&nbsp;20 &nbsp;&nbsp;
                        <i className="bx bx-heart"></i>&nbsp;85
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Course Item--> */}
            </div>
          </div>
        </section>
        {/* <!-- End Courses Section --> */}
      </main>
      {/* <!-- End #main --> */}
    </>
  );
}
