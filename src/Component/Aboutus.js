import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import "../css/about.css";
import "../css/values.css";
import aboutimg from "../assets/aboutimg.svg";
import aboutustopimg from "../assets/Aboutusimg.png";
import twitter from "../assets/twitter_logo.svg";
import linkedin from "../assets/linkedin_logo.svg";
import team1 from "../assets/team1.JPG";
import team2 from "../assets/team2.JPG";
import Rectangle1a from "../assets/Rectangle1a.png";
import Footer from "./Footer";
import Header from "./Header";
import WOW from "wowjs";

export class Aboutus extends Component {
  componentDidMount() {
    new WOW.WOW().init();
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Header />

        <div class="jars-section top-content-section value-top-section valign-wrapper">
          <div class="container w-percent-90 valign-wrapper">
            <div class="row valign-wrapper">
              <div class="col s12 m6 offset-m3">
                <div class="jars-section-title-heading">
                  {/* <h4>
                    <b>Investment Philosophy</b>
                  </h4> */}
                </div>
                <div
                  class="about-philosophy-left-content center-align wow fadeIn"
                  data-wow-delay="0.4s"
                >
                  <p>
                    Jamā Wealth is unique wealth advisory that puts more wealth
                    in your hands. Because there are no hidden or indirect
                    costs, our unbiased advice works better.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="jars-section">
          <div class=" jars-section-title-heading ">
            <h4>
              <b>Founders</b>
            </h4>
          </div>
          <div class=" row ">
            <div class=" col m6 offset-m3 ">
              <div class=" row ">
                <div class=" col s12 m6 ">
                  <div class=" team-top-section wow fadeIn">
                    <div class=" team-top-img center-align ">
                      <img src={team1} />
                    </div>
                    <div class=" team-top-content center-align ">
                      <h6>Ram kalyan Medury</h6>
                      <p>Founder & CEO</p>
                      <li>
                        <img src={linkedin} />
                      </li>
                    </div>
                  </div>
                </div>
                <div class=" col s12 m6 ">
                  <div class=" team-top-section wow fadeIn">
                    <div class=" team-top-img center-align ">
                      <img src={team2} />
                    </div>
                    <div class="team-top-content center-align ">
                      <h6>Manoj Trivedi</h6>
                      <p>Research & Advisory Head</p>
                      {/* <li><img src={twitter} /></li> */}
                      <li>
                        <img src={linkedin} />
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container w-percent-90">
            <div class=" jars-section-title-heading ">
              <h4>
                <b>Team</b>
              </h4>
            </div>
            <div class="row">
              <div class="col s12 m6 l3">
                <div class="team-card center-align">
                  <img class="avatar avatar-xlg mb-3" src={Rectangle1a} />
                  <h5 class="mb-0">Tarun</h5>
                  <span>AVP, Wealth Management</span>
                  <ul class="social-icon">
                    {/* <li><img src={twitter} /> </li> */}
                    <li>
                      <img src={linkedin} />
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col s12 m6 l3">
                <div class="team-card center-align">
                  <img class="avatar avatar-xlg mb-3" src={Rectangle1a} />
                  <h5 class="mb-0">Chandra</h5>
                  <span>Technology Analyst</span>
                  <ul class="social-icon">
                    <li>
                      <img src={linkedin} />
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col s12 m6 l3">
                <div class="team-card center-align">
                  <img class="avatar avatar-xlg mb-3" src={Rectangle1a} />
                  <h5 class="mb-0">Aparna</h5>
                  <span>Technology Analyst</span>
                  <ul class="social-icon">
                    <li>
                      <img src={linkedin} />
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col s12 m6 l3">
                <div class="team-card center-align">
                  <img class="avatar avatar-xlg mb-3" src={Rectangle1a} />
                  <h5 class="mb-0">Sainath</h5>
                  <span>Technology Analyst</span>
                  <ul class="social-icon">
                    <li>
                      <img src={linkedin} />
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col s12 m6 l3">
                <div class="team-card center-align">
                  <img class="avatar avatar-xlg mb-3" src={Rectangle1a} />
                  <h5 class="mb-0">Dinesh</h5>
                  <span>Digital Marketer</span>
                  <ul class="social-icon">
                    <li>
                      <img src={linkedin} />
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col s12 m6 l3">
                <div class="team-card center-align">
                  <img class="avatar avatar-xlg mb-3" src={Rectangle1a} />
                  <h5 class="mb-0">Archana</h5>
                  <span>Customer Support</span>
                  <ul class="social-icon">
                    <li>
                      <img src={linkedin} />
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col s12 m6 l3">
                <div class="team-card center-align">
                  <img class="avatar avatar-xlg mb-3" src={Rectangle1a} />
                  <h5 class="mb-0">Ashketh</h5>
                  <span>Customer Support</span>
                  <ul class="social-icon">
                    <li>
                      <img src={linkedin} />
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div class="col s12 m6 l3">
                <div class="team-card center-align">
                  <img class="avatar avatar-xlg mb-3" src={Rectangle1a} />
                  <h5 class="mb-0">Hari Vardhan</h5>
                  <span>Admin</span>
                  <ul class="social-icon">
                    <li>
                      <img src={linkedin} />
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div class=" JAR-contant-button center-align ">
          <div class=" row ">
            <div class=" col m6 offset-m3 ">
              <h5>Connect with us to know more about</h5>
              <h3 class=" background ">
                <span>J &nbsp; . &nbsp;A &nbsp;. &nbsp;R &nbsp;. &nbsp;S</span>
              </h3>
              <div class=" jars-btns JAR-contant-button-style ">
                <Link to="/contactUs">
                  {" "}
                  <li class=" btn-outline ">Contact Our Team</li>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Aboutus;
