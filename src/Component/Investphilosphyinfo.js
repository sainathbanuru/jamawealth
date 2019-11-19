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

export class Investphilosphyinfo extends Component {
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
                <h4>Investment Philosophy</h4>
                <div class="Aboutus-img-right right-align">
                  <img class=" responsive-img" src={philosophyimg} />
                </div>
                <p>
                  We follow a simple Investment Philosophy for JARS. It is
                  called Roots & Wings.
                </p>
                <p class="article-sub-title">ROOTS</p>
                <p>
                  Roots aim to preserve wealth by selecting companies with low
                  debt, consistent ROE/ROCE & promoter integrity.
                </p>

                <p>
                  &bull; We prefer to invest in busineses that carry very low
                  debt. This means that their growth is fuelled by the their
                  customers and through internal accruals.
                </p>
                <p>
                  &bull; We like companies that consistently reward their
                  shareholders through high levels of Return on Equity, Return
                  on Capital Employed and Return on Assets. This signals not
                  only an efficient business but also one that is shareholder
                  friendly.
                </p>
                <p>
                  &bull; We like promoters who demonstrate both skin-in-the-game
                  and soul-in-the-game. Such promoters retain significant
                  ownership in their business, which prevents the ‘agency
                  problem’.
                </p>
                <p>
                  &bull; We like companies that have already run the marathon
                  and have demonstrated stamina. As a corollary, we avoid nano
                  caps, micro caps and baby caps because the intent is to
                  preserve capital first and not be exposed to risks stemming
                  out of promoter integrity (or lack of it).
                </p>

                <p class="article-sub-title">WINGS</p>
                <p>
                  Wings aim to increase prosperity by identifying growing
                  companies (sales/profit/cashflows) that are resilient and have
                  pricing and staying power in their markets.
                </p>

                <p>
                  &bull; We like companies that have a huge runway of growth
                  ahead of them. Usualy they tend to grow 1.5 to 3 x times that
                  of the GDP Growth.
                </p>
                <p>
                  &bull; We prefer companies that possess significant operating
                  cashflows. This also indicates that their growth is real, and
                  not manufactured.
                </p>
                <p>
                  &bull; Companies that are dominant in their markets and
                  continue to hold good Market Share are preferred.
                </p>

                <p class="article-sub-title">PROCESS</p>
                <p>
                  Investment is not a static process. Buying and forgetting, or
                  just sitting tight, is aluxury that the smart investor cannot
                  afford. If you don’t review, companies can sink in days or
                  even industries can get upended in months.
                </p>
                <p>
                  We grill each stock with an intense review process that
                  periodically checks for all the fundamentals. The model
                  clinically picks early indicators which help exit risky stocks
                  in time. To err on the side of caution is far more preferable
                  to losing hard earned capital.
                </p>

                <p>
                  The invesestmt phiolosphy is fully backed up by a system that
                  takes emotion out of the picture, leading to balanced
                  decisions which augur well for the portfolio.
                </p>
                <p class="article-sub-title">FOCUS</p>
                <p>
                  A large & mid cap focus preserves wealth without compromising
                  on growth
                </p>

                <img class=" responsive-img" src={philosophyimgFocus} />

                <p>
                  We focus on quality business across sectors. The emphasis on
                  the business first, and not the sector which is ‘in fashion’.
                </p>
                <img class=" responsive-img" src={philosophyimgFocus2} />
                {/* <p class="article-sub-title">Conclusion</p> */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Investphilosphyinfo;
