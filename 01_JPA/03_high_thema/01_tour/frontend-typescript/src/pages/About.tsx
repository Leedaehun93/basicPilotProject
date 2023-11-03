// About.tsx
import React from "react";
import initScripts from "../assets/js/scripts";
import initCustom from "../assets/js/custom";
import { useEffect } from 'react';

function About() {

    useEffect(()=>{
        initScripts();
        initCustom();
    },[])

  return (
    <>
      {/* 여기 */}
      {/* <!-- 1 --> */}
      <div className="hero hero-inner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mx-auto text-center">
              <div className="intro-wrap">
                <h1 className="mb-0">About Us</h1>
                <p className="text-white">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- 2 --> */}
      <div className="untree_co-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="owl-single dots-absolute owl-carousel">
                <img
                  src="images/slider-1.jpg"
                  alt="Free HTML Template by Untree.co"
                  className="img-fluid rounded-20"
                />
                <img
                  src="images/slider-2.jpg"
                  alt="Free HTML Template by Untree.co"
                  className="img-fluid rounded-20"
                />
                <img
                  src="images/slider-3.jpg"
                  alt="Free HTML Template by Untree.co"
                  className="img-fluid rounded-20"
                />
                <img
                  src="images/slider-4.jpg"
                  alt="Free HTML Template by Untree.co"
                  className="img-fluid rounded-20"
                />
                <img
                  src="images/slider-5.jpg"
                  alt="Free HTML Template by Untree.co"
                  className="img-fluid rounded-20"
                />
                <img
                  src="images/slider-5.jpg"
                  alt="Free HTML Template by Untree.co"
                  className="img-fluid rounded-20"
                />
              </div>
            </div>
            <div className="col-lg-5 pl-lg-5 ml-auto">
              <h2 className="section-title mb-4">About Tours</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <ul className="list-unstyled two-col clearfix">
                <li>Outdoor recreation activities</li>
                <li>Airlines</li>
                <li>Car Rentals</li>
                <li>Cruise Lines</li>
                <li>Hotels</li>
                <li>Railways</li>
                <li>Travel Insurance</li>
                <li>Package Tours</li>
                <li>Insurance</li>
                <li>Guide Books</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- 3 --> */}
      <div className="untree_co-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-6 text-center">
              <h2 className="section-title mb-3 text-center">Team</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 mb-4">
              <div className="team">
                <img
                  src="images/person_1.jpg"
                  alt="Image"
                  className="img-fluid mb-4 rounded-20"
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
                  className="img-fluid mb-4 rounded-20"
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
                  className="img-fluid mb-4 rounded-20"
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
                  className="img-fluid mb-4 rounded-20"
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

      {/* <!-- 4 --> */}
      <div className="untree_co-section testimonial-section mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <h2 className="section-title text-center mb-5">Testimonials</h2>

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
                      &ldquo;There live the blind texts. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
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
                      &ldquo;There live the blind texts. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
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
                      &ldquo;There live the blind texts. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.&rdquo;
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- 5 --> */}
      <div className="untree_co-section">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <figure className="img-play-video">
                <a
                  id="play-video"
                  className="video-play-button"
                  href="https://www.youtube.com/watch?v=mwtbEGNABWU"
                  data-fancybox
                >
                  <span></span>
                </a>
                <img
                  src="images/hero-slider-2.jpg"
                  alt="Image"
                  className="img-fluid rounded-20"
                />
              </figure>
            </div>

            <div className="col-lg-5">
              <h2 className="section-title text-left mb-4">
                Take a look at Tour Video
              </h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>

              <p className="mb-4">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>

              <ul className="list-unstyled two-col clearfix">
                <li>Outdoor recreation activities</li>
                <li>Airlines</li>
                <li>Car Rentals</li>
                <li>Cruise Lines</li>
                <li>Hotels</li>
                <li>Railways</li>
                <li>Travel Insurance</li>
                <li>Package Tours</li>
                <li>Insurance</li>
                <li>Guide Books</li>
              </ul>

              <p>
                <a href="#" className="btn btn-primary">
                  Get Started
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- 6 --> */}
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

export default About;