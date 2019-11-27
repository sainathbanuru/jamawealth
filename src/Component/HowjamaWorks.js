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
import {Helmet} from "react-helmet"

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
        <meta name="description" content="Equity investment portfolios, selected by experts and machine learning algorithms.
For busy professionals, CXOs and business-owners.">
</meta>
</Helmet>
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
                        <Link to="/InvestPhilosphy">
                          <div class="Jama-tab-card-btn valign-wrapper jama-right-tabs bg-white m-r-4 b-left">
                            <span>
                              <img
                                class="mobile-show-img"
                                src="https://jamaappprod.s3-ap-southeast-1.amazonaws.com/Website/Jamawealth/philosophyblk.png" alt="Philosophy_jama_wealth"
                              />
                            </span>
                            <h6 class="under-line-style">
                              Investment Philosophy
                            </h6>
                          </div>
                        </Link>
                      </div>
                      <div class="col m4 s4 no-padding tab-card-margin-style">
                        <div class="Jama-tab-card-btn valign-wrapper jama-right-tabs jama-right-tabs-active bg-white m-r-4">
                          <span>
                            <img class="mobile-show-img" src={howjamaimgblk} />
                          </span>
                          <h6 class="under-line-style">How it works</h6>
                        </div>
                      </div>
                      <div class="col m4 s4 no-padding tab-card-margin-style">
                        <Link to="/contactus">
                          <a target="_blank">
                            {" "}
                            <div class="Jama-tab-card-btn valign-wrapper jama-right-tabs bg-white b-right">
                              <span>
                                <img
                                  class="mobile-show-img"
                                  src="https://jamaappprod.s3-ap-southeast-1.amazonaws.com/Website/Jamawealth/startimgblk.png" alt="get_started_jama_wealth"
                                />
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
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div class="Jama-home-tab-content-box wow fadeIn valign-wrapper">
                    <div class="row m-0 valign-wrapper">
                      <div class="col s12 m8">
                        <h5 class="mobile-title-text">How it works</h5>
                        <p>
                          Investing with Jama Wealth is easy. Invest in our high
                          performing portfolio after selecting your preferred
                          demat account.
                        </p>
                        <div class="read-more-btn">
                          <Link to="/HowJamaWorksInfo">
                            {" "}
                            <button class="read-more-btn-style">
                              Read More
                            </button>
                          </Link>
                        </div>
                      </div>
                      <div class="col s12 m4">
                        <div class="tab-content-img hide-on-med-and-down">
                          <img class="responsive-img" src={Howjamaimg} />
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

export default HowjamaWorks;
