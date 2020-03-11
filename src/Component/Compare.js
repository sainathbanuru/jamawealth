import React, { Component } from "react";
import "../css/style.css";
import "../css/how-jama-works.css";
import { Link } from "react-router-dom";
import Moneybag from "../assets/Money Bag.svg";
import magicwand from "../assets/magic-wand.svg";
import allocate from "../assets/allocate.svg";
import Howjamaimg from "../assets/Howjamaimg.svg";
import bars from "../assets/bars.svg";
import Header from "./Header";
import HomepageBodyContent from "./HomepageBodyContent";
import Footer from "./Footer";
import philosophyyllo from "../assets/philosophyyllo.png";
import howjamaimgblk from "../assets/howjamaimgblk.png";
import startimgyllo from "../assets/startimgyllo.png";
import WOW from "wowjs";
import Introsection from "./Introsection";
import FeatureSection from "./featureSection";
import { Helmet } from "react-helmet";

class HowjamaWorks extends Component {
  componentDidMount() {
    new WOW.WOW().init();
    // window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Header />
        <Helmet>
          <title>
            {" "}
            Compare Jama Wealth Portfolio Perofrmance With Nifty 50 | Jama
            Wealth{" "}
          </title>
          <meta
            name="description"
            content="Equity investment portfolios, selected by experts and machine learning algorithms.
For busy professionals, CXOs and business-owners."
          ></meta>
        </Helmet>
        <div
          class="jars-section-title-heading"
          style={{ margin: "100px auto 0", textAlign: "center" }}
        >
          <h5>Compare Jamā Wealth Equity with Nifty 50</h5>
        </div>
        <div
          id="container"
          style={{
            width: "100%",
            height: 400,
            margin: "0 auto",
            marginTop: 32,
            maxWidth: 500,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div class="loader"></div>
        </div>
        <div class="research-invest-section">
          <div class="row">
            <div class="col s12 m6 offset-m3">
              <div
                class="research-invest-section-content"
                style={{ paddingTop: 0 }}
              >
                {/* <h4 style={{ lineHeight: 1.5 }}>
                  Too Busy To Track Investments? Not Able To Take Timely
                  Portfolio Action?
                </h4>
                <p>
                  As a busy professional or a businessman, we know that your
                  primary focus is where it should be. Delegate the day to day
                  tracking of your investment portfolio to a trusted advisor who
                  helps grow your wealth with clean operating principles.
                </p> */}
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

export default HowjamaWorks;
