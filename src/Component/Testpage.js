import React, { Component } from "react";
import jamabrandlogo from "../assets/Jama_wealth_logo.svg";
import { Link } from "react-router-dom";
import Footer from "./Footer";
// import Ram2x from "../assets/Ram@2x.png";
// import Manoj2x from "../assets/Manoj@2x.png";
import "../css/test_page.css";
// import aboutimg from "../assets/aboutimg.svg";
// import aboutustopimg from "../assets/Aboutusimg.png";
// import twitter from "../assets/twitter_logo.svg";
// import linkedin from "../assets/linkedin_logo.svg";
// import team1 from "../assets/team1.JPG";
// import team2 from "../assets/team2.JPG";
// import Rectangle1a from "../assets/Rectangle1a.png";
// import Footer from "./Footer";
// import Header from "./Header";
import WOW from "wowjs";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";

class Aboutus extends Component {
  componentDidMount() {
    new WOW.WOW().init();
    window.scrollTo(0, 0);
  }

  //   <div class="row">
  //   <div class="col m4 offset-m2">
  //     <img
  //       src={require("../assets/valueicon2.svg")}
  //       alt="Honesty"
  //       class="why-image"
  //     />
  //   </div>
  //   <div class="col m6">
  //     <div class="why-cell-content">
  //       <h5 class="why-cell-heading">Have Full Control</h5>
  //       <p style={{ fontSize: 16 }} class="why-cell-content">
  //         We Don't take your money to our custody. This removes
  //         opacity and temptation to trade on your money.
  //       </p>
  //     </div>
  //   </div>
  // </div>

  render() {
    return (
      <div>
        <Helmet>
          <title> Test</title>
          <meta
            name="description"
            content="Jama Wealth Management offer a clinical equity portfolio which coupled with both machine learning and human intelligence. Get best returns in stock market with Jama Wealth equity portfolio"
          ></meta>
        </Helmet>
        <div>
          <div class="container-fluid">
            {/* top section */}

            <div class="background-image"></div>
            <div
              class="row"
              style={{
                paddingBottom: 10,

                backgroundColor: "transparent"
              }}
            >
              <div class="col m3 offset-m1">
                <a className="navbar-brand">
                  <Link to="/">
                    {" "}
                    <img
                      className="brand-logo-img"
                      src={jamabrandlogo}
                      style={{ paddingVertical: "20" }}
                    />
                  </Link>
                </a>
              </div>
            </div>

            <div class="main">
              <div class="main-container">
                <div class="main-section-heading">
                  <div class="main-heading">
                    <p class="main-heading-1">Build Wealth In Best</p>

                    <p class="main-heading-2">Equities Safely</p>

                    <p class="main-heading-3">
                      Equity investment portfolios, selected by experts and
                      machine learning algorithms. For busy professionals, CXOs
                      and business-owners
                    </p>
                  </div>
                </div>
                <div class="main-contact-form">
                  <div class="contact-form-container" style={{}}>
                    <p class="form-heading-1">
                      <span style={{ color: "#da9537", fontFamily: "ubuntu" }}>
                        Contact Us{" "}
                      </span>
                      <span style={{ color: "#ababab" }}>FOR</span>
                    </p>

                    <p class="form-heading-2">Investing In Equities</p>
                    <div class="contact-form-field">
                      <label style={{}} class="contact-form-label">
                        Name
                      </label>
                      <input
                        value=""
                        id="name"
                        type="text"
                        class="contactus-form-input"
                      />
                    </div>
                    <div class="contact-form-field">
                      <label style={{}} class="contact-form-label">
                        Email
                      </label>
                      <input
                        value=""
                        id="email"
                        type="text"
                        class="contactus-form-input"
                      />
                    </div>
                    <div class="contact-form-field">
                      <label style={{}} class="contact-form-label">
                        Phone Number
                      </label>
                      <input
                        value=""
                        id="phone"
                        type="text"
                        class="contactus-form-input"
                      />
                    </div>
                    <div class="contact-form-field">
                      <label style={{}} class="contact-form-label">
                        Investment Amount
                      </label>
                      <input
                        value=""
                        id="invest"
                        type="text"
                        class="contactus-form-input"
                      />
                    </div>
                    <div>
                      <a class="waves-effect waves-light btn contact-form-btn">
                        Contact NOW!
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* form end */}
            </div>
          </div>

          <div class="why-container">
            <h5 class="why-heading center">
              Why should you hire us as your Investment Advisory?
            </h5>
            <div class="row row-container" style={{}}>
              <div class="col m6 s12">
                <div class="row">
                  <div class="col m2 s12 image-container">
                    <img
                      src={require("../assets/honesty.svg")}
                      alt="Honesty"
                      class="why-image"
                    />
                  </div>
                  <div class="col m8 s12 content-container">
                    <h5 class="why-cell-heading">Honesty</h5>
                    <p style={{ fontSize: 16 }} class="why-cell-content">
                      No lies, No hidden costs for the clients. No Jargon. No BS
                    </p>
                  </div>
                </div>
              </div>
              <div class="col m6 s12">
                <div class="row">
                  <div class="col m2 s12 image-container">
                    <img
                      src={require("../assets/valueicon2.svg")}
                      alt="Control"
                      class="why-image"
                    />
                  </div>
                  <div class="col m8 s12 content-container">
                    <h5 class="why-cell-heading">Have Full Control</h5>
                    <p style={{ fontSize: 16 }} class="why-cell-content">
                      We Don't take your money to our custody. This removes
                      opacity and temptation to trade on your money.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row-container" style={{}}>
              <div class="col m6 s12">
                <div class="row">
                  <div class="col m2 s12 image-container">
                    <img
                      src={require("../assets/value.svg")}
                      alt="Frugality"
                      class="why-image"
                    />
                  </div>
                  <div class="col m8 s12 content-container">
                    <h5 class="why-cell-heading">Frugality</h5>
                    <p style={{ fontSize: 16 }} class="why-cell-content">
                      We do what right for you. We will always be on your side.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col m6 s12">
                <div class="row">
                  <div class="col m2 s12 image-container">
                    <img
                      src={require("../assets/valueicon6.svg")}
                      alt="ROI"
                      class="why-image"
                    />
                  </div>
                  <div class="col m8 s12 content-container">
                    <h5 class="why-cell-heading">Get Long Term ROI</h5>
                    <p style={{ fontSize: 16 }} class="why-cell-content">
                      We do not impose lock-in on your funds. Which gives the
                      flexibility to deploy wealth for your life needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* our model portfolio */}

          <div
            style={{
              width: "100%",
              position: "relative",
              backgroundColor: "white"
            }}
          >
            <div class="row portfolio-container">
              <div class="col m5 portfolio-content">
                <h5 style={{ color: "#1553a5", fontWeight: "bold" }}>
                  Our Model Portfolio
                </h5>
                <p class="portfolio-content">
                  Our model portfolio has performed exceptionally well over the
                  years
                </p>
              </div>
              <div class="col m5 portfolio-image-container" style={{}}>
                <img
                  src={require("../assets/Landing_Page/model.png")}
                  style={{}}
                  class="responsive portfolio-image"
                />
              </div>
            </div>
          </div>

          {/* portfolio end */}

          {/* jama over other */}
          <div class="jama-over-other">
            <div class="row portfolio-container">
              <div class="col m5 portfolio-image-container" style={{}}>
                <img
                  src={require("../assets/Landing_Page/asset.png")}
                  style={{}}
                  class="responsive portfolio-image"
                />
              </div>
              <div class="col m5 portfolio-content">
                <h5 style={{ color: "#1553a5", fontWeight: "bold" }}>
                  Jama Wealth Model Equity Portfolio Over Other Asset Classes
                </h5>
                <p class="portfolio-content">
                  The long term focused quality stock portfolio of{" "}
                  <span style={{ color: "black" }}>JARS</span> has outperformed
                  bank deposits, gold and Nifty index.
                </p>
              </div>
            </div>
            <div class="jama-over-contactus">
              <a
                class="waves-effect waves-light btn contact-us-btn"
                style={{ backgroundColor: "#fec20f" }}
              >
                Contact Us
              </a>
              {/* <a class="jama-over-contactus-btn">Contact Us</a> */}
            </div>
          </div>

          <div class="new-row" style={{ margin: 0 }}>
            <div>
              <h5
                class="customer-heading"
                style={{ color: "white", marginBottom: 20, marginTop: 50 }}
              >
                What our customers think of us:
              </h5>
            </div>
            <div class="row customer-container" style={{}}>
              {/* customer start */}
              <div class="col m4 s12">
                <div class="customer">
                  {/* &#8220; */}
                  <img
                    src={require("../assets/quote1.png")}
                    style={{
                      width: 45,
                      height: 30,
                      position: "relative",
                      top: 10,
                      left: 10
                    }}
                  />
                  <p class="customer-content">
                    With Jama Wealth approach to stock picking, based on
                    algorithm and deep insights I do get a sense of comfort and
                    confidence that the funds gonna do well.
                  </p>
                  <img
                    src={require("../assets/quote2.png")}
                    style={{
                      width: 45,
                      height: 30,
                      position: "relative",
                      float: "right",
                      marginRight: 10
                    }}
                  />
                </div>
                <img
                  src={require("../assets/jama_ravi.png")}
                  alt="Ravi S Rao"
                  class="customer-image"
                  style={{ display: "block", margin: "0 auto", marginTop: -55 }}
                />
                <div
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: 30,
                    marginBottom: 30
                  }}
                >
                  <h5>Ravi S Rao </h5>
                  <p style={{ color: "#6ac19e" }}>
                    Marketing Director & Member, Board of Directors at Value
                    Momentum
                  </p>
                </div>
              </div>
              {/* customer start */}
              <div class="col m4 s12">
                <div class="customer">
                  <img
                    src={require("../assets/quote1.png")}
                    style={{
                      width: 45,
                      height: 30,
                      position: "relative",
                      top: 0,
                      left: 10
                    }}
                  />
                  <p class="customer-content">
                    I Find JamaWealth as pretty good instrument for investments
                    in Equities.
                  </p>
                  <img
                    src={require("../assets/quote2.png")}
                    style={{
                      width: 45,
                      height: 30,
                      position: "relative",
                      float: "right",
                      marginRight: 10
                    }}
                  />
                </div>
                <img
                  src={require("../assets/jama_hari.png")}
                  alt="Ravi S Rao"
                  class="customer-image"
                  style={{ display: "block", margin: "0 auto", marginTop: -55 }}
                />
                <div
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: 30,
                    marginBottom: 30
                  }}
                >
                  <h5>Harilal Neelakantan</h5>
                  <p style={{ color: "#6ac19e" }}>Business Leader</p>
                </div>
              </div>
              {/* customer start */}
              <div class="col m4 s12">
                <div class="customer">
                  <img
                    src={require("../assets/quote1.png")}
                    style={{
                      width: 45,
                      height: 30,
                      position: "relative",
                      top: 10,
                      left: 10
                    }}
                  />
                  <p class="customer-content">
                    I got impressed about No Hidden Cost, No lock-in and high
                    transparency. My Money won't be in their custody, which
                    means i am in full control my investments.
                  </p>
                  <img
                    src={require("../assets/quote2.png")}
                    style={{
                      width: 45,
                      height: 30,
                      position: "relative",
                      float: "right",
                      marginRight: 10
                    }}
                  />
                </div>
                <img
                  src={require("../assets/jama_nageswar.png")}
                  alt="Ravi S Rao"
                  class="customer-image"
                  style={{ display: "block", margin: "0 auto", marginTop: -55 }}
                />
                <div
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: 30,
                    marginBottom: 30
                  }}
                >
                  <h5>Nageswera Rao Vasireddy</h5>
                  <p style={{ color: "#6ac19e" }}>
                    Sales Leader, Pharma Industry
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="consultation-container-bg">
            <div class="consultation-container">
              <h5 style={{ color: "white", marginBottom: 50 }}>
                Let us help you acheive your life goals
              </h5>
              <a class="consultation-btn">GET FREE CONSULTATION</a>
            </div>
          </div>
          {/* <div
            class="row"
            style={{
              backgroundColor: "black",
              paddingTop: 5,
              paddingBottom: 5,
              marginBottom: 0
            }}
          >
            <p
              style={{
                color: "#829099",
                textAlign: "center"
              }}
            >
              All Rights Reserved. Forward ® 2015
            </p>
          </div> */}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Aboutus;
