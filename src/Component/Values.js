import React, { Component } from "react";
import "../css/style.css";
import "../css/about.css";
import "../css/values.css";
import ourvalueimg from "../assets/ourvalueimg.svg";
import promiselogoa from "../assets/promiselogoa.svg";
import value from "../assets/value.svg";
import honesty from "../assets/honesty.svg";
import profit from "../assets/profit.svg";
import save from "../assets/save.svg";
import speed from "../assets/speed.svg";
import valueicon1 from "../assets/valueicon1.svg";
import valueicon2 from "../assets/valueicon2.svg";
import valueicon3 from "../assets/valueicon3.svg";
import valueicon4 from "../assets/valueicon4.svg";
import valueicon5 from "../assets/valueicon5.svg";
import valueicon6 from "../assets/valueicon6.svg";
import Footer from "./Footer";
import Header from "./Header";
import Tab from "./Tab";
import WOW from "wowjs";

export class Values extends Component {
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
              <div class="col s12 m8 offset-m2">
                <div class="jars-section-title-heading">
                  {/* <h4><b>What we vouch for</b></h4> */}
                </div>
                <div
                  class="about-philosophy-left-content center-align wow fadeIn"
                  data-wow-delay="0.4s"
                >
                  <p>
                    Our core values and operating principles are designed such
                    that your wealth is preserved first and then procreated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="value-tab-section">
          <Tab />

          {/* <div class="tabs-btns center-align">
                        <div class="Tabs">
                            <a class="Tabs__Tab value-tab value-tab-active">Values</a>
                            <a class="Tabs__Tab operating-tab">Operating Principles</a>
                        </div>
                    </div> */}
        </div>
        <div class="divider"></div>

        <div class="promise-image-section valign-wrapper">
          <div class=" row valign-wrapper">
            <div class=" research-invest-section-content ">
              <img src={promiselogoa} />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Values;
