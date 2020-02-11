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
import FeatureSection from "./featureSection";

class Aboutus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone_no: "",
      invest_amount: ""
    };
  }
  componentDidMount() {
    new WOW.WOW().init();
    window.scrollTo(0, 0);
  }

  validateName = name => {
    const re = /^[A-Za-z ]+$/;
    let name_error;
    const valid = re.test(name);
    if (!valid) {
      name_error = "Enter valid name";
    }
    this.setState({ name_error });
    return valid;
  };

  validateEmail = email => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let email_error;
    const valid = re.test(email);
    if (!valid) {
      email_error = "Enter valid email";
    }
    this.setState({ email_error });
    return valid;
  };

  validatePhone = phone => {
    let re = /^([0|\+[0-9]{1,5})?([6-9][0-9]{9})$/;
    let phone_error;
    const valid = re.test(phone);
    if (!valid) {
      phone_error = "Enter valid number";
    }
    this.setState({ phone_error });
    return valid;
  };

  validateAmount = amount => {
    // var re = /^\d+(?:\.\d{0,2})$/;
    var re = /^\d+$/;
    let amount_error;
    const valid = re.test(amount);
    if (!valid) {
      amount_error = "Enter valid amount";
    }
    this.setState({ amount_error });
    return valid;
  };

  contactNow = async () => {
    const valid = await this.validateAllFields();
    if (valid) {
      alert("validdd");
    }
  };

  validateAllFields = async () => {
    const name = await this.validateName(this.state.name);
    const email = await this.validateEmail(this.state.email);
    const phone_no = await this.validatePhone(this.state.phone_no);
    const amount = await this.validateAmount(this.state.invest_amount);
    return name && email && phone_no && amount;
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
          <meta
            name="description"
            content="Jama Wealth Management offer a clinical equity portfolio which coupled with both machine learning and human intelligence. Get best returns in stock market with Jama Wealth equity portfolio"
          ></meta>
        </Helmet>
        <div>
          <div className="container-fluid">
            {/* top section */}

            <div className="background-image"></div>
            <div
              className="row navheader"
              style={{
                paddingBottom: 10,
                backgroundColor: "transparent"
              }}
            >
              <div className="col m3">
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

            <div className="main">
              <div className="main-container">
                <div className="main-section-heading">
                  <div className="main-heading">
                    {/* <p className="main-heading-1">Build Wealth In Best</p>
                    <p className="main-heading-2">Equities Safely</p> */}
                    <p className="main-heading-3">
                      Equity investment portfolios, selected by experts and
                      machine learning algorithms. For busy professionals, CXOs
                      and business-owners
                    </p>
                  </div>
                </div>
                <div className="main-contact-form">
                  <div className="contact-form-container" style={{}}>
                    <p className="form-heading-new">CONTACT EQUITY ADVISOR</p>
                    {/* <p className="form-heading-1">
                      <span style={{ color: "#da9537", fontFamily: "ubuntu" }}>
                        Contact Us{" "}
                      </span>
                      <span style={{ color: "#ababab" }}>FOR</span>
                    </p>

                    <p className="form-heading-2">Investing In Equities</p> */}
                    <div className="contact-form-field">
                      <label style={{}} className="contact-form-label">
                        Name
                      </label>
                      <input
                        value={this.state.name}
                        id="name"
                        type="text"
                        className="contactus-form-input"
                        onChange={e => {
                          this.validateName(e.target.value);
                          this.setState({ name: e.target.value });
                        }}
                        style={{
                          paddingLeft: 10
                        }}
                      />
                      <p
                        style={{
                          marginTop: 0,
                          marginBottom: 0,
                          color: "#da9537"
                        }}
                      >
                        {this.state.name_error}
                      </p>
                    </div>
                    <div className="contact-form-field">
                      <label style={{}} className="contact-form-label">
                        Email
                      </label>
                      <input
                        value={this.state.email}
                        id="email"
                        type="text"
                        className="contactus-form-input"
                        onChange={e => {
                          this.validateEmail(e.target.value);
                          this.setState({ email: e.target.value });
                        }}
                        style={{
                          paddingLeft: 10
                        }}
                      />
                      <p
                        style={{
                          marginTop: 0,
                          marginBottom: 0,
                          color: "#da9537"
                        }}
                      >
                        {this.state.email_error}
                      </p>
                    </div>
                    <div className="contact-form-field">
                      <label style={{}} className="contact-form-label">
                        Phone Number
                      </label>
                      <input
                        value={this.state.phone_no}
                        id="phone"
                        type="text"
                        className="contactus-form-input"
                        onChange={e => {
                          this.validatePhone(e.target.value);
                          this.setState({
                            phone_no: e.target.value
                          });
                        }}
                        style={{
                          paddingLeft: 10
                        }}
                      />
                      <p
                        style={{
                          marginTop: 0,
                          marginBottom: 0,
                          color: "#da9537"
                        }}
                      >
                        {this.state.phone_error}
                      </p>
                    </div>
                    <div className="contact-form-field">
                      <label style={{}} className="contact-form-label">
                        Investment Amount
                      </label>
                      <input
                        value={this.state.invest_amount}
                        id="invest"
                        type="text"
                        className="contactus-form-input"
                        onChange={e => {
                          this.validateAmount(e.target.value);

                          this.setState({
                            invest_amount: e.target.value
                          });
                        }}
                        style={{
                          paddingLeft: 10
                        }}
                      />
                      <p
                        style={{
                          marginTop: 0,
                          marginBottom: 0,
                          color: "#da9537"
                        }}
                      >
                        {this.state.amount_error}
                      </p>
                    </div>
                    <div>
                      <a
                        className="waves-effect waves-light btn contact-form-btn"
                        onClick={() => {
                          this.contactNow();
                        }}
                      >
                        Contact NOW!
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* form end */}
            </div>
          </div>
          <div className="feature-section">
            <div className="feature-section-container">
              <FeatureSection />
            </div>
          </div>

          {/* our model portfolio */}

          {/* <div
            style={{
              width: "100%",
              position: "relative",
              backgroundColor: "white"
            }}
          >
            <div className="row portfolio-container">
              <div className="col m5 portfolio-content">
                <h5 style={{ color: "#1553a5", fontWeight: "bold" }}>
                  Our Model Portfolio
                </h5>
                <p className="portfolio-content">
                  Our model portfolio has performed exceptionally well over the
                  years
                </p>
              </div>
              <div className="col m5 portfolio-image-container" style={{}}>
                <img
                  src={require("../assets/Landing_Page/model.png")}
                  style={{}}
                  className="responsive portfolio-image"
                />
              </div>
            </div>
          </div> */}

          {/* portfolio end */}

          {/* jama over other */}

          <div className="comparison">
            <div className="row comparison-container">
              <div className="col m6 s12 comparison-one">
                <img
                  src={require("../assets/Landing_Page/asset.png")}
                  style={{}}
                  className="responsive portfolio-image"
                />
              </div>
              <div className="col m6 s12 comparison-two">
                <h5 style={{ color: "#1553a5", fontWeight: "bold" }}>
                  Jama Wealth Model Equity Portfolio Over Other Asset Classes
                </h5>
                <p className="portfolio-content">
                  The long term focused quality stock portfolio of{" "}
                  <span style={{ color: "black" }}>JARS</span> has outperformed
                  bank deposits, gold and Nifty index.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="jama-over-other">
            <div>
              <div className="row portfolio-container">
                <div className="col m5 portfolio-image-container" style={{}}>
                  <img
                    src={require("../assets/Landing_Page/asset.png")}
                    style={{}}
                    className="responsive portfolio-image"
                  />
                </div>
                <div className="col m5 portfolio-content">
                  <h5 style={{ color: "#1553a5", fontWeight: "bold" }}>
                    Jama Wealth Model Equity Portfolio Over Other Asset Classes
                  </h5>
                  <p className="portfolio-content">
                    The long term focused quality stock portfolio of{" "}
                    <span style={{ color: "black" }}>JARS</span> has
                    outperformed bank deposits, gold and Nifty index.
                  </p>
                </div>
              </div>
              <div className="jama-over-contactus">
                <a
                  className="waves-effect waves-light btn contact-us-btn"
                  style={{ backgroundColor: "#fec20f" }}
                >
                  Contact Us
                </a> */}
          {/* <a className="jama-over-contactus-btn">Contact Us</a> */}
          {/* </div>
            </div>
          </div> */}

          <div className="new-row" style={{ margin: 0 }}>
            <h5
              className="customer-heading center"
              style={{ color: "white", marginBottom: 50, marginTop: 50 }}
            >
              Don't Take Our Word. Hear What Our Clients Say.
            </h5>
            <div className="row customer-container" style={{}}>
              <div className="col m4 s12">
                <div className="customer">
                  <img
                    src={require("../assets/quote1.png")}
                    className="left-quote"
                  />
                  <p className="customer-content">
                    {/* I got impressed about No Hidden Cost, No lock-in and high
                    transparency. My Money won't be in their custody, which
                    means i am in full control my investments. */}
                    <br />
                    This portfolio is very divergent from Nifty. Falls lesser
                    and rises higher!
                    <br />
                    <br />
                  </p>
                  <img
                    src={require("../assets/quote2.png")}
                    className="right-quote"
                  />
                </div>
                <img
                  src={require("../assets/jama_ravi.png")}
                  alt="Ravi Rao"
                  className="customer-image"
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
                  <h5>Ravi S Rao</h5>
                  <p style={{ color: "#6ac19e" }}>
                    Marketing Director & Member, Board of Directors at Value
                    Momentum
                  </p>
                </div>
              </div>
              <div className="col m4 s12">
                <div className="customer">
                  <img
                    src={require("../assets/quote1.png")}
                    className="left-quote"
                  />
                  <p className="customer-content">
                    {/* I got impressed about No Hidden Cost, No lock-in and high
                    transparency. My Money won't be in their custody, which
                    means i am in full control my investments. */}
                    <br />
                    I find Jama Wealth as pretty good instrument for Equity
                    Investments
                    <br />
                    <br />
                  </p>
                  <img
                    src={require("../assets/quote2.png")}
                    className="right-quote"
                  />
                </div>
                <img
                  src={require("../assets/jama_hari.png")}
                  alt="Harilal Neelakantan"
                  className="customer-image"
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
                  <p style={{ color: "#6ac19e" }}>
                    Location Head, Technology MNC
                  </p>
                </div>
              </div>
              <div className="col m4 s12">
                <div className="customer">
                  <img
                    src={require("../assets/quote1.png")}
                    className="left-quote"
                  />
                  <p className="customer-content">
                    {/* I got impressed about No Hidden Cost, No lock-in and high
                    transparency. My Money won't be in their custody, which
                    means i am in full control my investments. */}
                    <br />
                    Impressive. No hidden costs. No lockin. Highly transparent.
                    <br />
                    <br />
                    <br />
                  </p>
                  <img
                    src={require("../assets/quote2.png")}
                    className="right-quote"
                  />
                </div>
                <img
                  src={require("../assets/jama_nageswar.png")}
                  alt="Nageswar Reddy"
                  className="customer-image"
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
                    Business Leader, Pharma Major
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="consultation-container-bg">
            <div className="consultation-opacity">
              <div className="consultation-container">
                {/* <h5 style={{ color: "white", marginBottom: 50 }}>
                  Let us help you acheive your life goals
                </h5> */}
                <a className="consultation-btn">GET FREE CONSULTATION</a>
              </div>
            </div>
          </div>
          {/* <div
            className="row"
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
          <div className="footer">
            <div className="footer-container">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Aboutus;
