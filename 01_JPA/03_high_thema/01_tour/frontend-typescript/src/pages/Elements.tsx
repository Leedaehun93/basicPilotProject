// Element.tsx
import React, { useEffect } from "react";
import initScripts from "../assets/js/scripts";
import initCustom from "../assets/js/custom";

function Elements() {

  useEffect(()=>{
    initScripts();
    initCustom();
  },[])

  return (
    <>
      {/* 여기 */}
      <div className="hero hero-inner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mx-auto text-center">
              <div className="intro-wrap">
                <h1 className="mb-0">Elements</h1>
                <p className="text-white">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section">
        <div className="container my-5">
          <div className="mb-5">
            <div className="owl-single dots-absolute owl-carousel">
              <img
                src="images/slider-1.jpg"
                alt="Free HTML Template by Untree.co"
                className="img-fluid"
              />
              <img
                src="images/slider-2.jpg"
                alt="Free HTML Template by Untree.co"
                className="img-fluid"
              />
              <img
                src="images/slider-4.jpg"
                alt="Free HTML Template by Untree.co"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="custom-block" data-aos="fade-up">
                <h2 className="section-title">Accordion</h2>
                <div className="custom-accordion" id="accordion_1">
                  <div className="accordion-item">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        How to download and register?
                      </button>
                    </h2>

                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion_1"
                    >
                      <div className="accordion-body">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </div>
                    </div>
                  </div>
                  {/* <!-- .accordion-item --> */}

                  <div className="accordion-item">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        How to create your paypal account?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion_1"
                    >
                      <div className="accordion-body">
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </div>
                    </div>
                  </div>
                  {/* <!-- .accordion-item --> */}
                  <div className="accordion-item">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How to link your paypal and bank account?
                      </button>
                    </h2>

                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion_1"
                    >
                      <div className="accordion-body">
                        When she reached the first hills of the Italic
                        Mountains, she had a last view back on the skyline of
                        her hometown Bookmarksgrove, the headline of Alphabet
                        Village and the subline of her own road, the Line Lane.
                        Pityful a rethoric question ran over her cheek, then she
                        continued her way.
                      </div>
                    </div>
                  </div>
                  {/* <!-- .accordion-item --> */}
                </div>
              </div>
              {/* <!-- END .custom-block --> */}
              <div className="custom-block" data-aos="fade-up">
                <h2 className="section-title">Gallery</h2>
                <div className="row gutter-v2 gallery">
                  <div className="col-4">
                    <a
                      href="images/gal_1.jpg"
                      className="gal-item"
                      data-fancybox="gal"
                    >
                      <img
                        src="images/gal_1.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col-4">
                    <a
                      href="images/gal_2.jpg"
                      className="gal-item"
                      data-fancybox="gal"
                    >
                      <img
                        src="images/gal_2.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col-4">
                    <a
                      href="images/gal_3.jpg"
                      className="gal-item"
                      data-fancybox="gal"
                    >
                      <img
                        src="images/gal_3.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col-4">
                    <a
                      href="images/gal_4.jpg"
                      className="gal-item"
                      data-fancybox="gal"
                    >
                      <img
                        src="images/gal_4.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col-4">
                    <a
                      href="images/gal_5.jpg"
                      className="gal-item"
                      data-fancybox="gal"
                    >
                      <img
                        src="images/gal_5.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col-4">
                    <a
                      href="images/gal_6.jpg"
                      className="gal-item"
                      data-fancybox="gal"
                    >
                      <img
                        src="images/gal_6.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- END .custom-block --> */}

              <div className="custom-block" data-aos="fade-up">
                <h2 className="section-title">Video</h2>

                <a
                  href="https://vimeo.com/342333493"
                  data-fancybox
                  className="video-wrap"
                >
                  <span className="play-wrap">
                    <span className="icon-play"></span>
                  </span>
                  <img
                    src="images/bg_1.jpg"
                    alt="Image"
                    className="img-fluid rounded"
                  />
                </a>
              </div>
              {/* <!-- END .custom-block --> */}
            </div>
            <div className="col-lg-4">
              <div
                className="custom-block"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="section-title">Form</h2>
                <form className="contact-form bg-white">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="text-black" htmlFor="fname">
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fname"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="text-black" htmlFor="lname">
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lname"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="text-black" htmlFor="email">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label className="text-black" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-black" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      name=""
                      className="form-control"
                      id="message"
                      cols={30}
                      rows={5}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label className="text-black" htmlFor="select">
                      Select
                    </label>

                    <select name="" id="select" className="custom-select">
                      <option value="">Untree.co</option>
                      <option value="">
                        Offers high quality free template
                      </option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="control control--checkbox">
                      <span className="caption">Custom checkbox</span>
                      <input type="checkbox" checked={true} />
                      <div className="control__indicator"></div>
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>

              <div className="custom-block" data-aos="fade-up">
                <h2 className="section-title">Social Icons</h2>
                <ul className="list-unstyled social-icons light">
                  <li>
                    <a href="#">
                      <span className="icon-facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-linkedin"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-google"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-play"></span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- END .custom-block --> */}

              <div
                className="custom-block"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="text-center">
                  <h2 className="section-title text-center">Slider</h2>
                </div>
                <div className="owl-single owl-carousel no-nav">
                  <div className="testimonial mx-auto">
                    <figure className="img-wrap">
                      <img
                        src="images/person_2.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </figure>
                    <h3 className="name">Adam Aderson</h3>
                    <blockquote>
                      <p>
                        &ldquo;There live the blind texts. Separated they live
                        in Bookmarksgrove right at the coast of the Semantics, a
                        large language ocean.&rdquo;
                      </p>
                    </blockquote>
                  </div>

                  <div className="testimonial mx-auto">
                    <figure className="img-wrap">
                      <img
                        src="images/person_3.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </figure>
                    <h3 className="name">Lukas Devlin</h3>
                    <blockquote>
                      <p>
                        &ldquo;There live the blind texts. Separated they live
                        in Bookmarksgrove right at the coast of the Semantics, a
                        large language ocean.&rdquo;
                      </p>
                    </blockquote>
                  </div>

                  <div className="testimonial mx-auto">
                    <figure className="img-wrap">
                      <img
                        src="images/person_4.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </figure>
                    <h3 className="name">Kayla Bryant</h3>
                    <blockquote>
                      <p>
                        &ldquo;There live the blind texts. Separated they live
                        in Bookmarksgrove right at the coast of the Semantics, a
                        large language ocean.&rdquo;
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-5 section">
            <div className="col-lg-10">
              <div className="row mb-5">
                <div className="col text-center">
                  <h2 className="section-title text-center">Our Team</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 mb-4">
                  <div className="team">
                    <img
                      src="images/person_1.jpg"
                      alt="Image"
                      className="img-fluid mb-4"
                    />
                    <div className="px-3">
                      <h3 className="mb-0">James Watson</h3>
                      <p>Co-Founder &amp; CEO</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-4">
                  <div className="team">
                    <img
                      src="images/person_2.jpg"
                      alt="Image"
                      className="img-fluid mb-4"
                    />
                    <div className="px-3">
                      <h3 className="mb-0">Carl Anderson</h3>
                      <p>Co-Founder &amp; CEO</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 mb-4">
                  <div className="team">
                    <img
                      src="images/person_4.jpg"
                      alt="Image"
                      className="img-fluid mb-4"
                    />
                    <div className="px-3">
                      <h3 className="mb-0">Michelle Allison</h3>
                      <p>Co-Founder &amp; CEO</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-4">
                  <div className="team">
                    <img
                      src="images/person_3.jpg"
                      alt="Image"
                      className="img-fluid mb-4"
                    />
                    <div className="px-3">
                      <h3 className="mb-0">Drew Wood</h3>
                      <p>Co-Founder &amp; CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 cta-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h2 className="mb-2 text-white">
                Lets you Explore the Best. Contact Us Now
              </h2>
              <p className="mb-4 lead text-white text-white-opacity">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi, fugit?
              </p>
              <p className="mb-0">
                <a
                  href="booking.html"
                  className="btn btn-outline-white text-white btn-md font-weight-bold"
                >
                  Get in touch
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Elements;