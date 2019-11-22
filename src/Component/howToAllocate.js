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
import philosophyimg from "../assets/philosophyimg.jpg";
import fivetrillioneconomy from "../assets/fivetrillioneconomy.png";
import philosophyimgFocus2 from "../assets/investmentPhilosophyFocus2.png";
import AllocateBanner from "../assets/asset_allocation@2x.png";
class HowToAllocate extends Component {
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

          <div class="row">
            <div class="col s12 m6 offset-m3 how-jama-works-content">
              <div class="about-philosophy-left-content">
                <h4>Asset Allocation</h4>
                <div class="Aboutus-img-right right-align">
                  <img class=" responsive-img" src={AllocateBanner} />
                </div>

                {/* <blockquote>
                  Self-made billionaire and author Tony Robbins always says,
                  “The quality of life we lead is determined by the quality of
                  questions we ask”.
                  <br />
                  From asking oneself ‘how do I earn more”, to ‘where do I
                  invest my hard earned money’, is a journey well travelled.
                  <br />
                  Like in life, in investing too there are no free rides. But
                  there is one exception, and that is also answers the second
                  question.
                </blockquote> */}
                <p>
                  Self-made billionaire and author Tony Robbins always says,
                  “The quality of life we lead is determined by the quality of
                  questions we ask”.
                </p>
                <p>
                  From asking oneself ‘how do I earn more”, to ‘where do I
                  invest my hard earned money’, is a journey well travelled.
                </p>
                <p>
                  Like in life, in investing too there are no free rides. But
                  there is one exception, and that is also answers the second
                  question.
                </p>
                {/* <p>
                  Almost everything in life has a price to it. There is no ‘free
                  lunch’, as the proverb goes.
                </p>
                <p>
                  But some things are free. In the investing world, asset
                  allocation is a free ticket to peace of mind, and possibly
                  higher returns.
                </p> */}
                <p>
                  A well thought out asset allocation strategy becomes a free
                  ticket to peace of mind, and stable portfolios with possibly
                  higher returns.
                </p>
                <p>
                  Asset allocation is person dependent; the strategy will vary
                  based on the corpus they hold, ie different for a person with
                  100 crore vs someone with 10 crore or 1 crore.
                </p>

                <p>
                  It will also depend on the risk profile of the individual and
                  their family situation. At any time it is advisable to have
                  liquidity that meets a few years of living expenses and
                  visible goals such as children’s gradution or marriage.
                </p>
                <p
                  className="article-sub-title"
                  style={{ textDecorationLine: "underline" }}
                >
                  Why Asset Allocation helps
                </p>
                <p className="article-sub-title">1. It Reduces Risk</p>
                <p>
                  Asset allocation is nothing but the application of a lesson
                  learned way back in school, ”Do not put all your eggs in one
                  basket”. In other words, it means that we should not invest
                  our entire money in only one asset or asset class. Our
                  investment spread between classes of Equity, Long Term Debt,
                  Short term Debt, and Gold helps with this.
                </p>
                <p>
                  Equity helps in growth, <u>Long Term Debt </u>provides
                  stability, Short Term Debt takes care of Liquidity and{" "}
                  <ul>Gold works as portfolio insurance </ul>. This works, fust
                  like a balanced diet helps with optimal health.
                </p>
                <p>
                  Sticking to one’s asset allocation guars the portfolio against
                  shocks too.
                </p>
                <p className="article-sub-title">
                  2. Rebalancing Enforces Discipline
                </p>
                <p>
                  Contrary to general investor behavior of investing more in
                  asset classes that yield more returns, Re-balancing forces the
                  investor to sell/redeem assets that have given higher return
                  and buy assets that have given a lower return. This is an
                  example of Rupee Cost Averaging. Thus, over a period of time,
                  one accumulates more at lower levels and actually books
                  profits at higher levels, resulting in higher overall long
                  term returns.
                </p>

                <p>
                  Of course, Rebalancing as a strategy may appear too
                  conservative if an asset class is on a continuous upward
                  trajectory giving supernormal returns year after year.
                  However, even in this case, the original asset allocation is
                  always maintained and the investor does not lose out much. It
                  is just that she could have made more by having a higher
                  allocation to such asset.
                </p>

                <p>
                  Unfortunately, we do not know in advance how the asset class
                  is going to perform. We do know that most of the times,
                  returns from any asset class are not consistently above or
                  below “average market returns”. In this situation, rebalancing
                  not only protects our gains but also enhances overall
                  portfolio returns.
                </p>

                <p className="article-sub-title">
                  3. Make Sure You Rebalance Yearly Once
                </p>
                <p>
                  It is recommended that this exercise is carried annually or
                  when the investor feels that there is a significant change in
                  circumstances. Investors must guard against knee-jerk
                  reactions and certain macro events and rush to make changes in
                  their allocation. Talk to a trusted advisor, preferably a SEBI
                  Regsitered Investment Advisor.
                </p>

                <p>
                  Do not mix up a long only portfolio focused on equities, with
                  tactical rebalancing. Over the long term equities have
                  outperformed every other asset class. Diluting the equity
                  portfolio will only reduce the results.
                </p>

                {/* <img class=" responsive-img" src={philosophyimgFocus2} /> */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HowToAllocate;
