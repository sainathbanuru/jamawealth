import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import InvestPhilosphy from "./InvestPhilosphy";
import feature1 from "../assets/feature1.JPG";
import Jargraph from "../assets/jargraph.png";
import Group2284 from "../assets/Group 2284.svg";
import Downladebook from "./Downladebook";
import profile from "../assets/profile.PNG";
import Ram2x from "../assets/Ram@2x.png";
import Manoj2x from "../assets/Manoj@2x.png";
import linkedin from "../assets/linkedin-logo.svg";
import nocusmoney from "../assets/nocusmoney.svg";
import nocustomshare from "../assets/nocustomshare.svg";
import Group10 from "../assets/Group10.svg";
import Group11 from "../assets/Group11.svg";
import Group12 from "../assets/Group12.svg";
import Group13 from "../assets/Group13.svg";
import niftimg from "../assets/niftimg.png";
import homegraph from "../assets/homegraph.svg";
import videosectionbg from "../assets/videosectionbg.svg";
import testimonialbrcard from "../assets/testimonial-brcard.svg";
import Jarwebp from "../assets/jargraph.webp";
import NiftImage from "../assets/niftimg.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

class HomepageBodyContent extends Component {
  render() {
    return (
      <div class="homepage-body-bg">
        {/* <FeatureSection /> */}

        <div class="jars-section">
          <div class="container w-percent-90 ">
            <div class="jars-section-title-heading" style={{ marginTop: 64 }}>
              <h4>
                {" "}
                Jama Wealth Model Portfolio Outperforms All Other Investment
                Alternatives{" "}
              </h4>
            </div>
            <div class="row valign-wrapper">
              <div class="col s12 m12  no-padding">
                <div class="Jar-graph-img wow fadeIn">
                <picture>
                <source srcset={Jarwebp} type="image/webp" />
                <LazyLoadImage src={Jargraph} alt="jamawealth_graph" />
                
                
                </picture>
                  
                </div>
              </div>
              <div class="col s12 m12  no-padding">
                <div class="Jars-section-left">
                  <h4>
                    Jama Wealth Model Equity Portfolio Over Other Asset Classes
                  </h4>
                  <p>
                    The long-term focused quality stocks portfolio of JARS has
                    outperformed bank deposits, gold and the Nifty index.
                  </p>
                  {/* <div class="jars-btns">
                    <a class="waves-effect waves-light btn btn-large btn-orange m-r-15">
                      Contact Advisor
                    </a>
                    <Link to="/Jamaadvisorypage">
                      {" "}
                      <a class="waves-effect waves-light btn btn-large btn-outline">
                        Know more
                      </a>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>

            <div class="row valign-wrapper">
              <div class="col m12 l6 no-padding">
                <div class="Jars-section-left">
                  <h4>JARS vs Nifty Total Returns Index</h4>
                  <p>
                    The Model Portfolio of JARS has also outperformed the Nifty
                    TRI by a significant margin.
                  </p>
                  {/* <div class="jars-btns">
                    <a class="waves-effect waves-light btn btn-large btn-orange m-r-15">
                      Contact Advisor
                    </a>
                    <Link to="/Jamaadvisorypage">
                      {" "}
                      <a class="waves-effect waves-light btn btn-large btn-outline">
                        Know more
                      </a>
                    </Link>
                  </div> */}
                </div>
              </div>
              <div class="col m12 l6">
                <div class="Jar-graph-img wow fadeIn">
                <picture>
                <source srcset={NiftImage} type="image/webp" />
                  <LazyLoadImage src={niftimg} alt="nifty_vs_jama_wealth" />
                  </picture>
                </div>
              </div>
            </div>

            {/* <div style={{ textAlign: "center" }}>
              <a class="waves-effect waves-light btn btn-large btn-orange m-r-15">
                Contact Advisor
              </a>
            </div> */}
          </div>
        </div>

        {/* <div class="separator">          
          <a class="waves-effect waves-light btn btn-large btn-orange ">
            Contact Advisor
          </a>
        </div> */}

        <div class="jars-section Wealth-curated-section">
          <div class="container w-percent-90">
            <div class="jars-section-title-heading">
              <h4>Investment Advisors</h4>
            </div>
            <div class="row founders-section">
              <div class="col s12 m6" style={{ width: "100%", height: "100%" }}>
                <div
                  class="Curator-card-section wow fadeIn"
                  style={{ height: "100%" }}
                >
                  <div class="row valign-wrapper" style={{ marginBottom: 0 }}>
                    <div class="col s3 no-padding">
                      <LazyLoadImage
                        class="curators-profile-img responsive-img"
                        src={Manoj2x}
                      />
                    </div>
                    <div class="col s9">
                      <div class="curators-profile-title">
                        <h5>Manoj Trivedi</h5>
                        <h6 class="m-0">
                          Research & Advisory Head{" "}
                          <span>
                            <a
                              href="https://www.linkedin.com/in/manoj-trivedi-a517b014/"
                              target="_blank"
                            >
                              <LazyLoadImage src={linkedin} />
                            </a>
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <p class="SEBI-style">
                    SEBI Registered Investment Advisor INA 200006999
                  </p>

                  <div class="row m-b-0">
                    <div class="curator-description">
                      <ul class="m-0">
                        <li class="curator-description-li">
                          Certified Equity Research Analyst
                        </li>
                        <li class="curator-description-li">
                          Ex Consultant Global Top 10 IB & Wealth Management
                          Firm
                        </li>
                        <li class="curator-description-li">
                          Expert on Enterprise Valuation, Capital Structure &
                          Project Finance
                        </li>
                        {/* <li class="curator-description-li">
                          SEBI Registered Investment Advisor
                        </li> */}
                        <li class="curator-description-li">
                          PGDM from IIM Bangalore. CA, CWA Ranker
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col s12 m6" style={{ width: "100%", height: "100%" }}>
                <div
                  class="Curator-card-section wow fadeIn"
                  style={{ height: "100%" }}
                >
                  <div class="row valign-wrapper" style={{ marginBottom: 0 }}>
                    <div class="col s3 no-padding">
                      <LazyLoadImage
                        class="curators-profile-img responsive-img"
                        src={Ram2x}
                      />
                    </div>
                    <div class="col s9">
                      <div class="curators-profile-title">
                        <h5>Ram Kalyan Medury</h5>
                        <h6 class="m-0">
                          Founder & CEO{" "}
                          <span>
                            <a
                              href="https://www.linkedin.com/in/rammedury/"
                              target="_blank"
                            >
                              <LazyLoadImage src={linkedin} />
                            </a>
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>

                  <p class="SEBI-style">
                    SEBI Registered Investment Advisor INA 200006725
                  </p>

                  <div class="row m-b-0">
                    <div class="curator-description">
                      <ul class="m-0">
                        <li class="curator-description-li">
                          Ex CXO at BFSI Majors, Fin Services Leader at Infosys
                        </li>
                        <li class="curator-description-li">
                          Ex Consultant, Global Fortune 100 Firm in Financial
                          Services & Investment Advisory
                        </li>
                        {/* <li class="curator-description-li">
                          SEBI Registered Investment Advisor
                        </li> */}
                        <li class="curator-description-li">
                          PGDM from IIM Bangalore
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="jars-section video-section">
          <div class="container w-percent-90">
            <div class="jars-section-title-heading">
              <h4>In The News</h4>
            </div>
            <div class="row">
              <div class="col m8 s12 offset-m2 no-padding">
                <div class="video-container wow fadeIn">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/lNZEWlkBdE0?rel=0"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>

                  {/* <iframe width=“560” height=“315" src=“https://www.youtube.com/embed/UC6N94FWDmo” frameborder=“0" allow=“accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture” allowfullscreen></iframe> */}
                </div>
                <div
                  class="video-container wow fadeIn"
                  style={{ marginTop: 64 }}
                >
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/UC6N94FWDmo?rel=0"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div class="video-section-bg">
              <LazyLoadImage src={videosectionbg} />
            </div>
          </div>
        </div>
        <div>
          <div class="container how-jama-works-content w-percent-90">
            <div
              class="jars-section-title-heading"
              style={{ marginTop: 64, marginBottom: 0 }}
            >
              <h4>As Featured In</h4>
            </div>
          </div>
          <div className="featuredImageContainer">
            <LazyLoadImage
              src="https://jamaappprod.s3-ap-southeast-1.amazonaws.com/Website/entrepreneur_india.png"
              style={{ objectFit: "cover" }}
              alt="Entrepreneur India"
              className="featuredImages"
            />
            <LazyLoadImage
              src={
                "https://jamaappprod.s3-ap-southeast-1.amazonaws.com/Website/qrius.png"
              }
              style={{ objectFit: "cover" }}
              alt="Qrius"
              className="featuredImages"
            />
            <LazyLoadImage
              src={
                "https://jamaappprod.s3-ap-southeast-1.amazonaws.com/Website/money_control.png"
              }
              style={{ objectFit: "cover" }}
              alt="Money Control"
              className="featuredImages"
            />
            <LazyLoadImage
              src={
                "https://jamaappprod.s3-ap-southeast-1.amazonaws.com/Website/silicon_india.png"
              }
              style={{ objectFit: "cover" }}
              alt="Silicon India"
              className="featuredImages"
            />
            <LazyLoadImage
              src={
                "https://jamaappprod.s3-ap-southeast-1.amazonaws.com/Website/the_afternoon.png"
              }
              style={{ objectFit: "cover" }}
              alt="The Afternoon"
              className="featuredImages"
            />
          </div>
        </div>

        <div class="jars-section-portfolio">
          <div class="container w-percent-90">
            <div class="row valign-wrapper">
              <div class="col s12 m12 push-m6">
                <div class="portfolio-img-section wow fadeIn">
                  <LazyLoadImage src={Group2284} />
                </div>
              </div>
              <div class="col s12 m12 pull-m6">
                <div class="Jars-section-left">
                  <h4>Get a Free Portfolio Analysis Report</h4>
                  <p class="no-padding">
                    Our wealth advisor will analyse your portfolio Avail a free
                    analysis report and consultation.
                    <br />
                    Send your Demat Holdings or NSDL eCAS to get started.
                  </p>

                  <div class="jars-btns">
                    <a
                      class="waves-effect waves-light btn btn-large btn-orange m-r-15"
                      href="mailto:help@jama.co.in?Subject=Send my free portfolio analysis&body=Here is my  demat holdings / nsdl ecas statement:"
                    >
                      Get Free Portfolio Check
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="jama-testimonials-section">
          <div class="container w-percent-90">
            <div class="jars-section-title-heading">
              <h4 class="testimonials-title-style">Testimonials</h4>
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
            <div class="col m5 l4" style={{padding: '0.75rem'}}>
                <div
                  class="jama-testimonials-vcards wow fadeIn"
                  data-wow-delay="0.4s"
                >
                    <iframe src="https://player.vimeo.com/video/378717516" frameborder="0" allow="autoplay; fullscreen" allowfullscreen style={{position: 'absolute', height: '90%', width: '100%'}}></iframe> 
                      
                      
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
      </div>
    );
  }
}

export default HomepageBodyContent;

// function FeatureSection() {
//   return (
//     <div>
//       <div class="container homepage-below-feature-section-list w-percent-90">
//         <div class="row Feature-section-title center-align">
//           <h5>An investment model so clean, that you will be surprised</h5>
//         </div>
//         <div class="row">
//           <div class="col s6 m2 lg2">
//             <div
//               class="features-icons-images center-align wow fadeIn"
//               data-wow-delay="0.1s"
//             >
//               <img class="responsive-img" src={nocusmoney} />
//             </div>
//           </div>
//           <div class="col s6 m2 lg2">
//             <div
//               class="features-icons-images center-align wow fadeIn"
//               data-wow-delay="0.2s"
//             >
//               <img class="responsive-img" src={nocustomshare} />
//             </div>
//           </div>
//           <div class="col s6 m2 lg2">
//             <div
//               class="features-icons-images center-align wow fadeIn"
//               data-wow-delay="0.3s"
//             >
//               <img class="responsive-img" src={Group10} />
//             </div>
//           </div>
//           <div class="col s6 m2 lg2">
//             <div
//               class="features-icons-images center-align wow fadeIn"
//               data-wow-delay="0.4s"
//             >
//               <img class="responsive-img" src={Group11} />
//             </div>
//           </div>
//           <div class="col s6 m2 lg2">
//             <div
//               class="features-icons-images center-align wow fadeIn"
//               data-wow-delay="0.5s"
//             >
//               <img class="responsive-img" src={Group12} />
//             </div>
//           </div>
//           <div class="col s6 m2 lg2">
//             <div
//               class="features-icons-images center-align wow fadeIn"
//               data-wow-delay="0.6s"
//             >
//               <img class="responsive-img" src={Group13} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
