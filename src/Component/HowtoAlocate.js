import React, { Component } from "react";
import "../css/style.css";
import { Link } from "react-router-dom";
import MoneybagarketGrowth from "../assets/Money-Bag-Market-Growth.svg";
import Moneybag from "../assets/Money Bag.svg";
import magicwand from "../assets/magic-wand.svg";
import allocate from "../assets/allocate.svg";
import undraw_pie_chart_6efe from "../assets/undraw_pie_chart_6efe.svg";
import barsLight from "../assets/barsLight.svg";
import diagram from "../assets/diagram.svg";
import Header from "./Header";
import HomepageBodyContent from "./HomepageBodyContent";
import Footer from "./Footer";
import philosophyyllo from "../assets/philosophyyllo.png";
import howjamaimgyllo from "../assets/howjamaimgyllo.png";
import startimgyllo from "../assets/startimgyllo.png";
import WOW from "wowjs";
import Introsection from "./Introsection";
import FeatureSection from "./featureSection";

export class HowtoAlocate extends Component {
  componentDidMount() {
    new WOW.WOW().init();
    // window.scrollTo(0, 0);
  }

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
                Industry Knowledge Coupled with Robust Investment Philosophy
              </h4>
            </div>
            <div class="row">
              <div class="col s3 m4 xl3 tab-card-margin-style mobile-ver-style">
                {" "}
                <div class="left-menu-wealth-tab">
                  <div class="Jama-tab-card-btn Build-wealth-tab-btn not-active-wealth-btn valign-wrapper">
                    <span>
                      <span>
                        <img
                          class="mobile-show-img"
                          src={barsLight}
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
                  <div class="Jama-tab-card-btn left-card-tab valign-wrapper left-menu-sub-tabs-below-wealth b-t-1 left-menu-sub-active">
                    <span>
                      <img class="money-bar-img-style" src={diagram} />
                      <span>
                        <h6 class="under-line-style">How to allocate assets</h6>
                      </span>
                    </span>
                  </div>
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

              <div class="col s9 m8 xl9">
                <div class="home-right-content-section">
                  <div class="tabs-right-top-sections">
                    <div class="row m-0">
                      <div class="col m4 s4 no-padding tab-card-margin-style">
                        <Link to="/InvestPhilosphy">
                          <div class="Jama-tab-card-btn valign-wrapper jama-right-tabs bg-white m-r-4 b-left">
                            <span>
                              <img
                                class="mobile-show-img"
                                src={philosophyyllo}
                              />
                            </span>
                            <h6 class="under-line-style">
                              Investment Philosophy
                            </h6>
                          </div>
                        </Link>
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
                            <h6 class="under-line-style">How Jama Works</h6>
                          </div>
                        </Link>
                      </div>
                      <div class="col m4 s4 no-padding tab-card-margin-style">
                        <a
                          href="https://www.jama.co.in/app/accounts/login/"
                          target="_blank"
                        >
                          {" "}
                          <div class="Jama-tab-card-btn valign-wrapper jama-right-tabs bg-white b-right">
                            <span>
                              <img class="mobile-show-img" src={startimgyllo} />
                            </span>
                            <h6 class="under-line-style">
                              Get Started{" "}
                              <span>
                                <i class="material-icons start-arrows">
                                  arrow_right_alt
                                </i>{" "}
                              </span>{" "}
                            </h6>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="Jama-home-tab-content-box valign-wrapper wow fadeIn">
                    <div class="row m-0 valign-wrapper">
                      <div class="col s12 m8">
                        <h5 class="mobile-title-text">
                          How to allocate assets
                        </h5>
                        <p>
                          Almost everything in life has a price to it. There is
                          no ‘free lunch’, as the proverb goes. But some things
                          are free. In the investing world, asset allocation is
                          a free ticket to peace of mind, and possibly higher
                          returns.
                        </p>
                        <div class="read-more-btn">
                          <Link to="/howToAllocate">
                            {" "}
                            <button class="read-more-btn-style">
                              Read More
                            </button>
                          </Link>
                        </div>
                      </div>
                      <div class="col s12 m4">
                        <div class="tab-content-img hide-on-med-and-down">
                          <img
                            class="responsive-img m-t-20"
                            src={undraw_pie_chart_6efe}
                          />
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

export default HowtoAlocate;
