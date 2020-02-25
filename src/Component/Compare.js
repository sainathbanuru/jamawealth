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
          <title> Jama Wealth | How Jama Welath Works </title>
          <meta
            name="description"
            content="Equity investment portfolios, selected by experts and machine learning algorithms.
For busy professionals, CXOs and business-owners."
          ></meta>
        </Helmet>
        <div
          id="container"
          style={{ width: 500, height: 500, margin: "0 auto", marginTop: 100 }}
        ></div>
        <Footer />
      </div>
    );
  }
}

export default HowjamaWorks;
