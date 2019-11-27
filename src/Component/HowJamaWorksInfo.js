import React, { Component } from "react";
import "../css/style.css";
import "../css/about.css";
import { Link } from "react-router-dom";
import leftarrow from "../assets/left-arrow.svg";
import howjamawealthimg from "../assets/how-jama-wealth-img.svg";
import Footer from "./Footer";
import Header from "./Header";
import Downladebook from "./Downladebook";
import {Helmet} from "react-helmet";

class HowJamaWorksInfo extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Header />
        <Helmet>
        <title> How Jama Wealth Works | Jama Wealth Management & investment Advisory Platform</title>
        <meta name="description" content="Jama Wealth Management & Investment Advisory works best in your favour to build your wealth throgh share market equities, best in class service provided to customers. ">
</meta>
</Helmet>

        <div class="jars-section">
          <div class="row">
            <div class="container-fluid back-btn-section-row w-percent-90 m-auto"></div>
          </div>

          <div class="container how-jama-works-content w-percent-90">
            <div class="row valign-wrapper">
              <div
                class=" "
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <div class="about-philosophy-left-content">
                  <h4 style={{ textAlign: "center" }}>
                    How Jama Wealth works{" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class=" research-invest-section ">
          <div class=" row ">
            <div class=" col s12 m6 offset-m3 ">
              <div
                class=" research-invest-section-content "
                style={{ paddingTop: 0 }}
              >
                <div class="row">
                  <div class="col s2" id="outer-circle">
                    {/* <div id="inner-circle"></div> */}
                    <h5>1</h5>
                  </div>
                  <div class="col s9" style={{ textAlign: "left" }}>
                    <h5 class="worksHeading" style={{ marginLeft: 0 }}>
                      Contact Wealth Manager.
                    </h5>
                    <p>
                      Speak to our Wealth Manager. Get a portfolio assessment
                      and investment plan basis your risk profile.
                    </p>
                  </div>
                </div>

                <div class="row">
                  <div class="col s2" id="outer-circle">
                    {/* <div id="inner-circle"></div> */}
                    <h5>2</h5>
                  </div>
                  <div class="col s9" style={{ textAlign: "left" }}>
                    <h5 class="worksHeading" style={{ marginLeft: 0 }}>
                      Choose Pricing Plan
                    </h5>
                    <p>Choose the pricing plan for Jama Wealth. </p>
                  </div>
                </div>

                <div class="row">
                  <div class="col s2" id="outer-circle">
                    {/* <div id="inner-circle"></div> */}
                    <h5>3</h5>
                  </div>
                  <div class="col s9" style={{ textAlign: "left" }}>
                    <h5 class="worksHeading" style={{ marginLeft: 0 }}>
                      Link Demat Account
                    </h5>
                    <p>Bring Your Own Demat Account </p>
                    {/* <div
                      class="video-container wow fadeIn"
                      style={{ margin: "32px 0" }}
                    >
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/UC6N94FWDmo"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div> */}
                  </div>
                </div>

                <div class="row">
                  <div class="col s2" id="outer-circle">
                    {/* <div id="inner-circle"></div> */}
                    <h5>4</h5>
                  </div>
                  <div class="col s9" style={{ textAlign: "left" }}>
                    <h5 class="worksHeading" style={{ marginLeft: 0 }}>
                      Start Your Investments
                    </h5>
                    <p>Login to JARS app & Buy portfolio</p>
                  </div>
                </div>
                <br />
                <br />

                <h4 style={{ lineHeight: 1.5 }}>
                  Too Busy To Track Investments? Not Able To Take Timely
                  Portfolio Action?
                </h4>
                <p>
                  As a busy professional or a businessman, we know that your
                  primary focus is where it should be. Delegate the day to day
                  tracking of your investment portfolio to a trusted advisor who
                  helps grow your wealth with Seven Clean Operating Principles.
                </p>
                <div class=" research-invest-btn-section ">
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

export default HowJamaWorksInfo;
