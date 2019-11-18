import React from "react";
import Tabs from "./Tabs";
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

const styles = {
  fontFamily: "sans-serif"
};

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: "bTab" };
  }
  render() {
    const content = {
      aTab: [
        <div>
          <div class="container Values-tab-content">
            <div class="row m-0">
              <div class="col m4 col s12">
                <div class="tab-content-value-list wow fadeIn">
                  <img src={value} />
                  <h5>Customer Focus</h5>
                  <p>
                    Do what is right for the client. <br></br>Always be on their
                    side!{" "}
                  </p>
                </div>
              </div>
              <div class="col m4 col s12">
                <div class="tab-content-value-list wow fadeIn">
                  <img src={honesty} />
                  <h5>Honesty</h5>
                  <p>
                    No lies, No hidden costs for the <br></br>
                    clients. No Jargon. No BS.{" "}
                  </p>
                </div>
              </div>
              <div class="col m4 col s12">
                <div class="tab-content-value-list wow fadeIn">
                  <img src={profit} />
                  <h5>Profitability</h5>
                  <p>
                    Help clients in a long term and<br></br>
                    sustainable way.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="row m-0">
              <div class="col m2"></div>
              <div class="col m4 col s12">
                <div class="tab-content-value-list wow fadeIn">
                  <img src={save} />
                  <h5>Frugality</h5>
                  <p>
                    Do what is right for the client. <br></br>Always be on their
                    side!{" "}
                  </p>
                </div>
              </div>
              <div class="col m4 col s12">
                <div class="tab-content-value-list wow fadeIn">
                  <img src={speed} />
                  <h5>Speed</h5>
                  <p>
                    Spend judiciously in the interest <br></br>
                    of the client and the company.{" "}
                  </p>
                </div>
              </div>
              <div class="col m2"></div>
            </div>
          </div>
        </div>
      ],
      bTab: [
        <div>
          <div class="container Values-tab-content">
            <div class="row m-0">
              <div class="col m4 col s12">
                <div class="tab-content-value-list">
                  <img src={valueicon1} />
                  <h5>Do not take custody of client’s money</h5>
                  <p>This ensures security and safety of client wealth. </p>
                </div>
              </div>
              <div class="col m4 col s12">
                <div class="tab-content-value-list">
                  <img src={valueicon2} />
                  <h5>Do not take custody of client’s share or units</h5>
                  <p>
                    This removes opacity and temptation to trade on client
                    holdings.
                  </p>
                </div>
              </div>
              <div class="col m4 col s12">
                <div class="tab-content-value-list">
                  <img src={valueicon3} />
                  <h5>
                    Do not take money off the clients portfolio via hidden fees
                  </h5>
                  <p>Our model does not allow indirect fees.</p>
                </div>
              </div>
              <div class="col m4 col s12">
                <div class="tab-content-value-list">
                  <img src={valueicon4} />
                  <h5>
                    Eliminate incentives to create brokerage or transaction fees
                  </h5>
                  <p>This ensures every move generates value for the client.</p>
                </div>
              </div>
              <div class="col m4 col s12">
                <div class="tab-content-value-list">
                  <img src={valueicon5} />
                  <h5>Do not constrain client with exit loads</h5>
                  <p>This gives clients full control on their holdings.</p>
                </div>
              </div>
              <div class="col m4 col s12">
                <div class="tab-content-value-list">
                  <img src={valueicon6} />
                  <h5>Do not impose lock-in on client funds</h5>
                  <p>
                    This gives flexibility to deploy wealth for client’s life
                    needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ]
    };
    return (
      <div style={styles}>
        <Tabs
          active={this.state.active}
          onChange={active => this.setState({ active })}
        >
          <div key="bTab">Operating Principles</div>
          <div key="aTab">Our Values</div>
        </Tabs>
        <p>{content[this.state.active]}</p>
      </div>
    );
  }
}
export default Tab;
