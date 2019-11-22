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
import BannerImage from "../assets/5trillion@2x.png";

class Investphilosphyinfo extends Component {
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
                <h4>Benefiting from India’s $5 Trillion Economy</h4>
                <div class="Aboutus-img-right right-align">
                  <img class=" responsive-img" src={BannerImage} />
                </div>
                <p>
                  The remarkable thing about India’s economy is that it has
                  grown faster every decade since independence. Never mind the
                  so called Hindu rate of growth.
                </p>
                <p>
                  Since we all love compounding, this will only snowball
                  favourably for the Indian economy. Yes, a $5 Trillion economy
                  is only a matter a time.
                </p>
                <p>
                  We can all benefit from the trillions of value getting
                  created. Here is how it is likely to happen.
                </p>
                <img class=" responsive-img" src={fivetrillioneconomy} />
                <p>
                  What exactly goes into the makeup of a country’s Gross
                  Domestic Product (GDP)?
                </p>
                <p>
                  Textbooks tell us: <strong>GDP = C + I + G + X - M</strong>
                </p>
                <p>
                  where C = Private Consumption, I = Private Investment, G=
                  Government Spend + Govt Consumption + Govt Investment, X =
                  Exports and M = Imports
                </p>
                <p>
                  Here is how each factor will impact GDP and result in
                  opportunities for us to invest and prosper.
                </p>
                <p class="article-sub-title">Increase in Consumption</p>
                <p>
                  1. The governement has alread reduced corporate taxes to one
                  of the lowest in the world in September 2019. This is spurring
                  corprates to invest more in capacity creation and in jobs.
                  Jobs will in turn increase consumption by people.
                </p>

                <p>
                  2. Personal Income Tax could be reduced to a level that it
                  does not make sense to evade taxes.
                </p>
                <p>
                  3. Incentivize tax savings by re-launching Infrastructure
                  bonds for additional tax savings.
                </p>
                <p>4. Cut down GST drastically to 8% or 12% max.</p>
                <p>
                  5. Introduce special rebates for people who pay tax. Greater
                  rebate for people paying more tax. People should see benefit
                  of paying taxes.
                </p>
                <p>
                  6. Encourage domestic tourism. People spend when they travel.
                  Indians are now travelling to many places and spending a lot
                  of forex.
                </p>
                <p>
                  7. Remove all extra charges when payments are made through
                  credit/ debit cards.
                </p>
                <p>
                  8. Jewellery Insurance at very low rates. In other words,
                  discourage hoarding of undeclared assets.
                </p>
                <p>
                  9. Tax Agricultural income. Give 120% cash back vouchers to
                  farmers to the extent of tax paid. (No effective tax, but
                  money to be spent and accounted for)
                </p>

                <p class="article-sub-title">Increase in Investment</p>
                <p>
                  1.Introduce labour reforms – should be possible for employers
                  to fire labour after paying 6 months salary
                </p>

                <p>
                  2.Make land acquisition easy. Monetize most Government owned
                  land (except eco-sensitive) by selling or long leasing.
                </p>
                <p>
                  3.Introduce Tax holidays. No tax for first 5 years of any
                  greenfield project.
                </p>
                <p>
                  4.Remove high interest bearing, assured return saving schemes
                  such as PPF, except for senior citizens.
                </p>
                <p>
                  5.Encourage Start-ups. No questions asked policy for first 5
                  years. 0% tax for allemployees of start-ups for 5 years. 0%
                  tax on ESOP shares. This will lower cost of operations for
                  businesses, encouraging them to invest.
                </p>
                <p>
                  6.Create Special Financial Institutions to fund Start-ups.
                  They will provide 0% convertible debt – 0% interest for 5
                  years, then convert bond into equity that can be offloaded to
                  next round of investors.
                </p>
                <p>
                  7.Automatic approvals – if a bureaucrat doesn’t document in
                  system a specific reason for not granting approval, approval
                  is automatically granted
                </p>

                <p class="article-sub-title">
                  Increase in Government Expenditure (Spending + Consumption +
                  Investment)
                </p>
                <p>
                  1. The government plans to spend 1 lakh crore on
                  infrastructure and may raise funds via this route. This could
                  be to build roads, ports, last mile connectivity, Solar, Wind
                  and Hydro power plants
                </p>
                <p>
                  2. Invest in Social Infrastructure – spend heavily on
                  improving quality of Education in Government schools by
                  providing competitive pay to teachers, having playgrounds,
                  offering a viable alternative against private schools charging
                  exhorbitant fee.
                </p>

                <p>
                  3. Identify bunch of industries where India has competitive
                  advantage. Go full steam to corner significant global market
                  share in these industries.
                </p>
                <p>
                  4. Set-up Vocational training institutes to create skilled
                  labour force – manual/ mechanical/ technical etc
                </p>
                <p>
                  5. Spend heavily on enhancing medical facilities at Government
                  hospitals.
                </p>
                <p>
                  6. Incentivize General Insurance – Health, Travel, Property,
                  etc instead of Life Insurance. Only pure term Insurance
                  policies should get Insurance benefit.
                </p>
                <p>
                  7. Spend heavily on promoting Indian culture, Indian
                  festivals, etc increasing pride in being Indian.
                </p>
                <p class="article-sub-title">Increase in Exports</p>
                <p>
                  1. Improved infrastructure, tax incentives, low finance costs
                  will reduce cost of production, making Indian goods cheaper
                  and thus competitive in global markets
                </p>
                <p>2. Market the made in India brand – not just handicrafts.</p>

                <p>
                  3. Promoting tourism heavily and smartly will earn foreign
                  exchange.
                </p>
                <p>
                  4. Target NRIs for Charity to support old age homes,
                  orphanages, etc. This will result in remittances.
                </p>

                <p class="article-sub-title">Reduction in Imports</p>
                <p>
                  &bull; Develop non-conventional sources of energy to reduce
                  dependence on oil – solar, wind, hydel – even if they are loss
                  making initially.
                </p>
                <p>
                  &bull; Discourage Jewellery and Gold imports, even if people
                  protest. Incentivise Indian jeweller of stones locally
                  available in India.
                </p>
                <p>
                  &bull; Encourage more Make In India projects that reduce the
                  import bill
                </p>
                <p>
                  These are but just some paths that could and would be taken in
                  the journey to $5Trillion.
                </p>

                <p class="article-sub-title">Conclusion</p>
                {/* <p></p> */}
                {/* <img class=" responsive-img" src={philosophyimgFocus} /> */}

                <p>
                  As GDP grows, investing in equities will beat inflation. But
                  won’t create wealth.By investing in the right businesses that
                  will ride the increased consumption and investment waves
                  across sectors, one could generate outsized returns on one’s
                  portfolio.
                </p>
                <p>
                  Picking is not enough. Often businesses start well, but end up
                  destroying wealth. Wealth is truly preserved & we prosper when
                  we invest in solid businesses based on a rigorous, unbiased
                  system, powered by best-in-class human & machine intelligence.
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

export default Investphilosphyinfo;
