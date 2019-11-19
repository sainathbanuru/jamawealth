import React, { Component } from "react";
import "../css/style.css";
import "../css/about.css";
import { Link } from "react-router-dom";
import leftarrow from "../assets/left-arrow.svg";
import howjamawealthimg from "../assets/how-jama-wealth-img.svg";
import Footer from "./Footer";
import Header from "./Header";
import Downladebook from "./Downladebook";
import WOW from "wowjs";
import aboutimg from "../assets/aboutimg.svg";
import sheerimg from "../assets/sheerimg.svg";

export class SheerMagicinfo extends Component {
  componentDidMount() {
    new WOW.WOW().init();
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Header />

        <div class="jars-section">
          <div class="row">
            <div class="container-fluid back-btn-section-row w-percent-90 m-auto">
              <Link to="/">
                {" "}
                <img class=" responsive-img" src={leftarrow} />
              </Link>
            </div>
          </div>

          <div class="container how-jama-works-content w-percent-90">
            <div class="row valign-wrapper">
              <div class="col s12 m12 push-m6">
                <div class="Aboutus-img-right right-align">
                  <img class=" responsive-img" src={sheerimg} />
                </div>
              </div>
              <div class="col s12 m12 pull-m6">
                <div class="about-philosophy-left-content">
                  <h4>The sheer magic of compounding</h4>
                  <p>
                    Most good things in life are simple, yet hard. Growing &
                    retaining wealth is simple too, right? Just invest regularly
                    in a set of equities, and over time wealth happens.
                  </p>
                  <p>
                    Compounded growth will silently do its work. But not quite
                    so!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class=" research-invest-section ">
          <div class=" row ">
            <div class=" col s12 m6 offset-m3 ">
              <div class=" research-invest-section-content ">
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
                  <a class="waves-effect waves-light btn btn-large btn-orange m-r-15">
                    Contact Advisor
                  </a>
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

export default SheerMagicinfo;
