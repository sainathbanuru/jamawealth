import React, { Component } from "react";
import "../css/style.css";
import "../css/testimonial.css";
import profile from "../assets/profile.PNG";
import Footer from "./Footer";
import Header from "./Header";
import WOW from "wowjs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

class testimonial extends Component {
  componentDidMount() {
    new WOW.WOW().init();
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Header />

        <div class="jama-testimonials-section">
          <div class="container w-percent-90">
            <div class="jars-section-title-heading">
              <h4
                style={{
                  marginTop: "32px",
                  marginBottom: "32px",
                  color: "#ffffff"
                }}
              >
                Testimonials
              </h4>
            </div>
            <div class="row m-0">
              <div class="col m6 l4">
                <div
                  class="jama-testimonials-cards wow fadeIn"
                  data-wow-delay="0s"
                >
                  <div class="Testimonial-profile">
                    <div class="row valign-wrapper testimonial-section-profile-details">
                      <div class="testimonial-pic-section">
                        <LazyLoadImage
                          class="profile-pic"
                          src={
                            "https://jamaappprod.s3-ap-southeast-1.amazonaws.com/Website/new/static/img/Image+5.png"
                          }
                          alt="jama_wealth_review"
                        />
                      </div>

                      <div class="testimonial-text">
                        <h6>Nageswara Rao Vasireddy</h6>
                        <p class="m-0">Sales Leader, Pharma Industry</p>
                      </div>
                    </div>
                    <div class="testimonial-description">
                      {/* <h6>The best of the best..</h6> */}
                      <p>
                        Jama financial advisors have made Financial Planning
                        truly comprehensive and unbiased.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col m6 l4">
                <div
                  class="jama-testimonials-cards wow fadeIn"
                  data-wow-delay="0.2s"
                >
                  <div class="Testimonial-profile">
                    <div class="row valign-wrapper testimonial-section-profile-details">
                      <div class="testimonial-pic-section">
                        <LazyLoadImage
                          class="profile-pic"
                          src={
                            "https://jamaappprod.s3-ap-southeast-1.amazonaws.com/Website/new/static/img/Image+6.png"
                          }
                        />
                      </div>

                      <div class="testimonial-text">
                        <h6>Abhijit Sen</h6>
                        <p class="m-0">Businessman</p>
                      </div>
                    </div>
                    <div class="testimonial-description">
                      {/* <h6>The best of the best..</h6> */}
                      <p>
                        Thanks to Jama Wealth Advisory, I could start my
                        business with confidence. Money works hard for me now.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col m6 l4">
                <div
                  class="jama-testimonials-cards wow fadeIn"
                  data-wow-delay="0.4s"
                >
                  <div class="Testimonial-profile">
                    <div class="row valign-wrapper testimonial-section-profile-details">
                      <div class="testimonial-pic-section">
                        <LazyLoadImage
                          class="profile-pic"
                          src={
                            "https://jamaappprod.s3-ap-southeast-1.amazonaws.com/Website/new/static/img/Image+7.png"
                          }
                        />
                      </div>

                      <div class="testimonial-text">
                        <h6>Gautam Khanna</h6>
                        <p class="m-0">Vice President, IT MNC</p>
                      </div>
                    </div>
                    <div class="testimonial-description">
                      {/* <h6>The best of the best..</h6> */}
                      <p>
                        Jama Wealth’s zero commission, zero brokerage advisory
                        model builds trust. It is refreshing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row m-0">
              <div class="col m6 l4">
                <div
                  class="jama-testimonials-cards wow fadeIn"
                  data-wow-delay="0s"
                  style={{ padding: 0, backgroundColor: "transparent" }}
                >
                  <iframe
                    src="https://player.vimeo.com/video/378717516"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%"
                    }}
                  ></iframe>
                </div>
              </div>

              <div class="col m6 l4">
                <div
                  class="jama-testimonials-cards wow fadeIn"
                  data-wow-delay="0.2s"
                  style={{ padding: 0, backgroundColor: "transparent" }}
                >
                  <iframe
                    src="https://player.vimeo.com/video/380443962"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%"
                    }}
                  ></iframe>
                </div>
              </div>

              <div class="col m6 l4">
                <div
                  class="jama-testimonials-cards wow fadeIn"
                  data-wow-delay="0.4s"
                  style={{ padding: 0, backgroundColor: "transparent" }}
                >
                  <iframe
                    src="https://player.vimeo.com/video/381501489"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%"
                    }}
                  ></iframe>
                </div>
              </div>
            </div>

            {/* <div class="See-more-btn">
              <Link to="/testimonial">
                {" "}
                <button
                  class="btn waves-effect waves-light center testimonial-see-more-btn"
                  type="submit"
                  name="action"
                >
                  See More
                </button>{" "}
              </Link>
            </div> */}
          </div>
        </div>

        <div class="research-invest-section">
          <div class="row">
            <div class="col s12 m6 offset-m3">
              <div class="research-invest-section-content">
                <h4 style={{ lineHeight: 1.5 }}>
                  Too Busy To Track Investments? Not Able To Take Timely
                  Portfolio Action?
                </h4>
                <p>
                  As a busy professional or a businessman, we know that your
                  primary focus is where it should be. Delegate the day to day
                  tracking of your investment portfolio to a trusted advisor who
                  helps grow your wealth with clean operating principles.
                </p>
                <div class="research-invest-btn-section">
                  <Link to="/contactus">
                    <a class="waves-effect waves-light btn btn-large btn-orange m-r-15">
                      Contact Advisor
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default testimonial;
