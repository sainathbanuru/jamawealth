import React, { Component } from "react";
import "../css/style.css";
// import '../css/footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer class="page-footer-section">
        <div class="row m-0">
          <div class="col m10 offset-m1">
            <div class="row">
              <div class="col m4 s12 m-t-20">
                <h6 class="footer-titles">Contact Us</h6>
                <ul>
                  <li>
                    <a href="#!">+91 987-026-4643</a>
                  </li>
                  <li>
                    <a href="#!">advisor@jamawealth.com</a>
                  </li>
                </ul>
                {/* <div class="footer-download-sections">
                  <h6 class="footer-titles">Downloads</h6>
                  <ul>
                    <li>
                      <a href="#!">Brochure</a>
                    </li>
                    <li>
                      <a href="#!">Factsheet: Comparison MF vs JARS</a>
                    </li>
                    {/* <li>
                      <a href="#!">Factsheet: Comparison MF vs JARS</a>
                    </li> 
                    <li>
                      <a href="#!">Comparison NPS vs JARS</a>
                    </li>
                  </ul>
                </div> */}
              </div>
              {/* <div class="col m3 s12 m-t-20">
                <h6 class="footer-titles">Customer Service</h6> */}
              {/* <ul>
                  {/* <li>
                    <a href="#!">Contact Us</a>
                  </li> 
                  <li>
                    <a href="#!">Ordering & Payment</a>
                  </li>
                  <li>
                    <a href="#!">Product Walkthrough</a>
                  </li>
                  <li>
                    <a href="#!">Your Open Ticket</a>
                  </li>
                  <li>
                    <a href="#!">Returns</a>
                  </li>
                  <li>
                    <a href="#!">FAQ</a>
                  </li>
                </ul> */}
              {/* <ul>
                  <li>
                    <a href="#!">Brochure</a>
                  </li>
                  <li>
                    <a href="#!">Factsheet: Comparison MF vs JARS</a>
                  </li>
                  {/* <li>
                      <a href="#!">Factsheet: Comparison MF vs JARS</a>
                    </li> 
                  <li>
                    <a href="#!">Comparison NPS vs JARS</a>
                  </li>
                </ul>
              </div> */}
              <div class="col m4 s12 m-t-20">
                <h6 class="footer-titles">Information</h6>
                <ul>
                  <li>
                    <a href="/Aboutus">About Jama JARS</a>
                  </li>
                  <li>
                    <a href="/privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/privacy">Terms & Conditions</a>
                  </li>
                  {/* <li>
                    <a href="#!">Press Enquiries</a>
                  </li> */}
                </ul>
              </div>
              {/* <div class="col m4 s12 m-t-20">
                <h6 class="footer-titles">Subscribe to our Newsletter</h6>
                {/* <p>Lorem Ipsum is simply dumszmy text of the printing and typesetting industry.</p> 
                <form class="example" style={{ marginTop: 14 }}>
                  <input
                    type="text"
                    placeholder="Email Address"
                    name="Email Address"
                  ></input>
                  <button type="submit">Subscribe</button>
                </form>
              </div> */}
            </div>
            <p>
              * Does not assume impact of transaction costs, taxes or fees.
              Dividends are assumed as reinvested for JARS. Nifty 50 Total
              Returns Index used (source: nseindia.com). Bank FD assumed at
              5.51% for 3yr - 5yr term deposits, post income tax rate of 30%
              (source: actual 2010-2019 data at SBI.co.in). Equity investments
              are subject to HIGH MARKET RISK. No liability assumed whatsoever.
              Backtest results shown above are on past business performance, and
              do not guarantee nor predict future stock performance. <br /># FY
              corresponds to the Financial Year + a lag of 6 weeks for the
              results season. eg: FY 2017 holding period corresponds to 22 May
              2016 to 21 May 2017
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
