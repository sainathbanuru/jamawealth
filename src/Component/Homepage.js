import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "../css/style.css";
import InvestPhilosphy from "./InvestPhilosphy";
import Footer from "./Footer";
import HomepageBodyContent from "./HomepageBodyContent";
import Moneybag from "../assets/Money Bag.svg";
import magicwand from "../assets/magic-wand.svg";
import allocate from "../assets/allocate.svg";
import aboutimg from "../assets/aboutimg.svg";
import bars from "../assets/bars.svg";
import philosophyblk from "../assets/philosophyblk.png";
import howjamaimgyllo from "../assets/howjamaimgyllo.png";
import startimgyllo from "../assets/startimgyllo.png";
import Introsection from "./Introsection";
import WOW from "wowjs";

import FeatureSection from "./featureSection";

class Homepage extends Component {
  componentDidMount() {
    new WOW.WOW().init();
    window.scrollTo(0, 0);
  }

  changeRoute = () => {
    this.context.router.push("/promospace/detail");
  };
  render() {
    return (
      <div>
        <Header />
        <Introsection />
        <FeatureSection />

        <div class="Home-section-banner-img">
          <div class="container home-tabed-section">
            <div class="row center-align main-tab-section-title">
              <h4>
                Industry Knowledge Coupled With A Robust Investment Philosophy
              </h4>
            </div>
            <div class="row">
              <div class="col s3 m4 xl3 tab-card-margin-style mobile-ver-style">
                {" "}
                <div class="left-menu-wealth-tab">
                  <div class="Jama-tab-card-btn Build-wealth-tab-btn valign-wrapper">
                    <span>
                      <span>
                        <img
                          class="mobile-show-img"
                          src={bars}
                          alt="preserve & prosper"
                        />
                      </span>
                      <span>
                        <h6 class="under-line-style" style={{ marginLeft: 0 }}>
                          Preserve & Prosper
                        </h6>
                      </span>
                    </span>
                  </div>
                </div>
                <div class="left-menu-sub-tabs">
                  <Link to="/IndiasEconomy">
                    {" "}
                    <div class="Jama-tab-card-btn left-card-tab valign-wrapper left-menu-sub-tabs-below-wealth b-rad-t">
                      <span>
                        <img class="money-bar-img-style" src={Moneybag} />
                        <span>
                          <h6 class="under-line-style">$5 Trillion Economy</h6>
                        </span>
                      </span>
                    </div>
                  </Link>
                  <Link to="/HowtoAlocate">
                    {" "}
                    <div class="Jama-tab-card-btn left-card-tab valign-wrapper left-menu-sub-tabs-below-wealth b-t-1">
                      <span>
                        <img class="money-bar-img-style" src={allocate} />
                        <span>
                          <h6 class="under-line-style">
                            How to allocate assets
                          </h6>
                        </span>
                      </span>
                    </div>
                  </Link>
                  <Link to="/SheerMagic">
                    {" "}
                    <div class="Jama-tab-card-btn left-card-tab valign-wrapper left-menu-sub-tabs-below-wealth b-t-1 b-rad-b">
                      <span>
                        <img class="money-bar-img-style" src={magicwand} />
                        <span>
                          <h6 class="under-line-style">
                            The magic of compounding
                          </h6>
                        </span>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>

              <div class="col s9 m8 xl9 mobile-ver-style">
                <div class="home-right-content-section">
                  <div class="tabs-right-top-sections">
                    <div class="row m-0">
                      <div class="col m4 s4 no-padding tab-card-margin-style">
                        <div class="Jama-tab-card-btn valign-wrapper jama-right-tabs jama-right-tabs-active bg-white m-r-4 b-left">
                          <span>
                            <img class="mobile-show-img" src={philosophyblk} />
                          </span>
                          <h6 class="under-line-style">
                            Investment Philosophy
                          </h6>
                        </div>
                      </div>
                      <div class="col m4 s4 no-padding tab-card-margin-style">
                        <Link to="/HowjamaWorks">
                          {" "}
                          <div class="Jama-tab-card-btn valign-wrapper jama-right-tabs bg-white m-r-4">
                            <span>
                              <img
                                class="mobile-show-img"
                                src={howjamaimgyllo}
                              />
                            </span>
                            <h6 class="under-line-style">How it works</h6>
                          </div>
                        </Link>
                      </div>
                      <div class="col m4 s4 no-padding tab-card-margin-style">
                        <Link to="/contactus">
                          <a target="_blank">
                            {" "}
                            <div class="Jama-tab-card-btn valign-wrapper jama-right-tabs bg-white b-right">
                              <span>
                                <img
                                  class="mobile-show-img"
                                  src={startimgyllo}
                                />
                              </span>
                              <h6 class="under-line-style">
                                Get Started{" "}
                                <span>
                                  <i class="material-icons start-arrows">
                                    arrow_right_alt
                                  </i>{" "}
                                </span>
                              </h6>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div class="Jama-home-tab-content-box valign-wrapper">
                    <div class="row m-0 valign-wrapper">
                      <div class="col s12 m12 l8">
                        <h5 class="mobile-title-text">Investment Philosophy</h5>
                        <p>
                          We follow a simple Investment Philosophy for JARS
                          called Roots & Wings. Roots aim to preserve wealth by
                          selecting companies with low debt, consistent
                          efficiency & promoter integrity. Wings aim to increase
                          prosperity by identifying growing companies (sales /
                          profit / cashflows)
                        </p>
                        <div class="read-more-btn">
                          <Link to="/Investphilosphyinfo">
                            <button class="read-more-btn-style">
                              Read More
                            </button>
                          </Link>
                        </div>
                      </div>
                      <div class="col s12 m12 l4 hide-on-med-and-down">
                        <div class="tab-content-img">
                          <img class="responsive-img" src={aboutimg} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HomepageBodyContent />

        <Footer />
      </div>
    );
  }
}

export default Homepage;
