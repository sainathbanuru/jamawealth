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
import philosophyimgFocus from "../assets/investmentPhilosophyFocus.png";
import philosophyimgFocus2 from "../assets/investmentPhilosophyFocus2.png";
import MagicBanner from "../assets/compounding@2x.png";

class SheerMagicArticle extends Component {
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
                <h4>Unlock the magic of compounding</h4>
                <div class="Aboutus-img-right right-align">
                  <img class=" responsive-img" src={MagicBanner} />
                </div>
                <blockquote>
                  Most good things in life are simple, yet hard. Growing &
                  retaining wealth is simple too, right? Just invest regularly
                  in a set of equities, and over time wealth happens.
                  <br />
                  <br />
                  Compounded growth will silently do its work. But not quite so!{" "}
                </blockquote>
                <p>
                  Much has already been written about compounding. So I will not
                  bore you with excel sheets or bar graphs.
                </p>
                <p>
                  Yes compounded growth is one tool that can generate huge
                  wealth. However, the average investor makes below-average
                  returns. Dalbar Inc research found that for the 20 years
                  ending in 2015, the S&P 500 Index averaged 9.8% a year but the
                  average equity fund investor earned only 5.2%.{" "}
                </p>
                <p>
                  Why does compounding not work for them? What must we do to
                  unlock the magic of compounding in our investments?
                </p>
                <p class="article-sub-title">Not Buying High</p>
                <p>
                  Most investors start buying (and some rush in) when the market
                  goes up. By investing steadily and early on, one doesn’t have
                  to worry about having to buy high. Keep buying at frequent
                  intervals (monthly) into the right set of equities.
                </p>

                <p class="article-sub-title">Start Early</p>
                <p>
                  Yes, over one’s earning years, starting early on (vs delaying
                  by 10 years) can mean ending up with almost 3 times bigger
                  corpus! Think 1 crore vs 3 crore, just with an early start!
                </p>

                <p class="article-sub-title">Avoid Emotional Exits</p>
                <p>
                  When markets fall, which they will almost every year by 10%
                  and every few years by more than 20%, many investors
                  overreact. Not exiting equities when markets fall will result
                  in good growth.
                </p>
                <p>
                  Add rule #1 above, and you are all set. In other words, time
                  in the market trumps timing the market. Trying to outsmart the
                  market may only leave one bruised. In the above study, missing
                  only the 10 best days in the market, may mean a return of just
                  6.1%.
                </p>

                <p class="article-sub-title">Buy & Review</p>
                <p>
                  The industry preaches Buy and Forget and stay invested for the
                  long term. While a long term focus is great, you must review
                  the investments at least once quarterly.
                </p>
                <p>
                  The risk of getting blindsided by a business going down (eg:
                  Zee, Yes Bank) or even by an entire industry shift (eg: Horse
                  carriages, Kodak style photography) can whack your portfolio.
                  Get out of a bad investment before it damages you.
                </p>

                <p class="article-sub-title">Conclusion</p>
                <p>
                  Make compounding work for you and unlock its magic over time,
                  by making these four strategies work for you in your
                  portfolio. The best time to plant a tree was 20 years ago. The
                  next best time is, now!
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SheerMagicArticle;
