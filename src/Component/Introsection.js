import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import "../css/Introsection.css";
import { Link, NavLink, BrowserRouter as Router } from "react-router-dom";

class Introsection extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  render() {
    return (
      <div>
        {this.state.show ? (
          <div class="intro-section-bg">
            {/* <div class="close-div-btn">
                            <Button variant="raised" onClick={() => this.setState({ show: false })}><CloseIcon /></Button>                            
                        </div> */}
            <div class="intro-section-content">
              <div class="row">
                <div class="col m7">
                  <div class="intro-section-content-text">
                    <h4>Preserve Wealth, Prosper More!</h4>
                    <ul class="banner-para-list">
                      <li>
                        Equity investment portfolios, selected by experts and
                        machine learning algorithms. For busy professionals,
                        CXOs and business-owners.
                      </li>
                    </ul>
                    {/* <p>by algorithmic investing  in a high qulaiyt 'Long' portfolio if equities.</p>
                                    <h6>Unique model designed for trust. Managed by RIAs, IIM/IIT alumni.</h6> */}
                  </div>
                  <div class="jars-btns">
                    <Link to="/contactus">
                      <a class="waves-effect waves-light btn btn-large btn-orange m-r-15 get-started">
                        Get Started
                      </a>
                    </Link>
                  </div>
                  <p class="Sebi-style-intro">
                    SEBI Registered Investment Advisor: INA 200006725
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Introsection;
